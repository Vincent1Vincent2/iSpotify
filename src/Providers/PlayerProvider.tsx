"use client";

import { retryWithBackoff } from "@/utils/Retry";
import { PlaybackState, PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";
import { createContext, useContext, useEffect, useState } from "react";
import sdk from "../lib/spotify-sdk/ClientInstance";
import { usePlaylist } from "./PlaylistProvider";

interface PlayerContextType {
  deviceId: string;
  setDeviceId: (deviceId: string) => void;
  handleTrackClick: (track: PlaylistedTrack<Track>) => void;
  clearPlaybackQueue: (deviceId: string) => void;
}

interface PlayerProviderProps {
  children: React.ReactNode;
}

const PlayerContext = createContext<PlayerContextType>({
  deviceId: "",
  setDeviceId: () => {},
  handleTrackClick: () => {},
  clearPlaybackQueue: () => {},
});

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const [deviceId, setDeviceId] = useState<string>("");
  const { selectedPlaylist, tracks, setTracks } = usePlaylist();

  const playAndQueue = async (
    deviceId: string,
    track: PlaylistedTrack<Track>,
    playlist: PlaylistedTrack<Track>[]
  ) => {
    try {
      // Queue the remaining tracks after the selected track
      for (
        let i = playlist.findIndex((t) => t.track.id === track.track.id) + 1;
        i < playlist.length;
        i++
      ) {
        await retryWithBackoff(
          () =>
            sdk.player.addItemToPlaybackQueue(playlist[i].track.uri, deviceId),
          3,
          1000
        );
      }

      // Start playing the selected track
      await retryWithBackoff(
        () =>
          sdk.player.startResumePlayback(deviceId, undefined, [
            track.track.uri,
          ]),
        3,
        1000
      );
    } catch (error) {
      console.error("Error queuing and playing tracks:", error);
    }
  };

  const clearPlaybackQueue = async (deviceId: string) => {
    try {
      // Remove each track from the queue one by one
      let currentQueue = await sdk.player.getUsersQueue();
      currentQueue.queue.forEach((allQueued) => {
        retryWithBackoff(() => sdk.player.skipToNext(deviceId), 3, 1000);
      });
    } catch (error) {
      console.error("Error clearing the playback queue:", error);
    }
  };

  const handleTrackClick = async (track: PlaylistedTrack<Track>) => {
    if (deviceId) {
      const currentPlaybackState: PlaybackState =
        await sdk.player.getPlaybackState();

      if (currentPlaybackState !== null) {
        await clearPlaybackQueue(deviceId);
      }

      await playAndQueue(deviceId, track, tracks.items);
    }
  };

  useEffect(() => {
    if (tracks.items.length > 0 && deviceId) {
      sdk.player.startResumePlayback(deviceId, undefined, [
        tracks.items[0].track.uri,
      ]);
    }
  }, [tracks, deviceId]);

  return (
    <PlayerContext.Provider
      value={{ deviceId, setDeviceId, handleTrackClick, clearPlaybackQueue }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
