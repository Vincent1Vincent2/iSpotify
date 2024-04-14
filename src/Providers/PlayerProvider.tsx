"use client";

import { retryWithBackoff } from "@/utils/Retry";
import {
  PlaylistedTrack,
  SimplifiedTrack,
  Track,
} from "@spotify/web-api-ts-sdk";
import { createContext, useContext, useState } from "react";
import sdk from "../lib/spotify-sdk/ClientInstance";
import { usePlayback } from "./PlaybackProvider";
import { usePlaylist } from "./PlaylistProvider";

interface PlayerContextType {
  handleTrackClick: (track: PlaylistedTrack<Track> | SimplifiedTrack) => void;
  isPlaylistedTrack: (
    track: PlaylistedTrack<Track> | SimplifiedTrack
  ) => track is PlaylistedTrack<Track>;
  skipTrack: () => void;
  previousTrack: () => void;
  isPlaying: boolean;
  selectedTrack: PlaylistedTrack<Track> | SimplifiedTrack | null;
}

interface PlayerProviderProps {
  children: React.ReactNode;
}

const PlayerContext = createContext<PlayerContextType>({
  handleTrackClick: () => {},
  isPlaylistedTrack: (track): track is PlaylistedTrack<Track> => {
    return (track as PlaylistedTrack<Track>).track !== undefined;
  },
  skipTrack: () => {},
  previousTrack: () => {},
  isPlaying: false,
  selectedTrack: null,
});

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const { selectedPlaylist, tracks, setTracks } = usePlaylist();
  const { deviceId } = usePlayback();

  const uris = [...(tracks.items.map((track) => track.track.uri) ?? [])];
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<
    PlaylistedTrack<Track> | SimplifiedTrack | null
  >(null);

  const playTrack = async (track: PlaylistedTrack<Track> | SimplifiedTrack) => {
    // Play the selected track
    await retryWithBackoff(
      () =>
        sdk.player.startResumePlayback(
          deviceId,
          undefined,
          isPlaylistedTrack(track) ? uris : [],
          isPlaylistedTrack(track) ? track.track : track
        ),
      3,
      1000
    );

    // Set the selected track
    setSelectedTrack(track);
  };

  function isPlaylistedTrack(
    track: PlaylistedTrack<Track> | SimplifiedTrack
  ): track is PlaylistedTrack<Track> {
    return (track as PlaylistedTrack<Track>).track !== undefined;
  }

  const handleTrackClick = async (
    track: PlaylistedTrack<Track> | SimplifiedTrack
  ) => {
    if (deviceId) {
      await playTrack(track);
      setIsPlaying(true);
    }
  };

  const previousTrack = async () => {
    await sdk.player.skipToPrevious(deviceId);
  };

  const skipTrack = async () => {
    await sdk.player.skipToNext(deviceId);
  };

  return (
    <PlayerContext.Provider
      value={{
        handleTrackClick,
        isPlaylistedTrack,
        skipTrack,
        previousTrack,
        isPlaying,
        selectedTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
