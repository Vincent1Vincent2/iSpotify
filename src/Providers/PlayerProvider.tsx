"use client";
import { PlaylistedTrack, Track } from "@spotify/web-api-ts-sdk";

import { retryWithBackoff } from "@/utils/Retry";
import { createContext, useContext } from "react";
import sdk from "../lib/spotify-sdk/ClientInstance";
import { usePlayback } from "./PlaybackProvider";
import { usePlaylist } from "./PlaylistProvider";

interface PlayerContextType {
  handleTrackClick: (track: PlaylistedTrack<Track>) => void;
  skip: () => void;
  previous: () => void;
}

interface PlayerProviderProps {
  children: React.ReactNode;
}

const PlayerContext = createContext<PlayerContextType>({
  handleTrackClick: () => {},
  skip: () => {},
  previous: () => {},
});

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const { selectedPlaylist, tracks, setTracks } = usePlaylist();
  const { deviceId } = usePlayback();

  const uris = [...(tracks.items.map((track) => track.track.uri) ?? [])];

  const playTrack = async (selectedTrack: PlaylistedTrack<Track>) => {
    // Play the selected track
    await retryWithBackoff(
      () =>
        sdk.player.startResumePlayback(
          deviceId,
          undefined,
          uris,
          selectedTrack.track
        ),
      3,
      1000
    );
  };

  const handleTrackClick = async (track: PlaylistedTrack<Track>) => {
    if (deviceId) {
      await playTrack(track);
    }
  };

  const previous = async () => {
    await sdk.player.skipToPrevious(deviceId);
  };

  const skip = async () => {
    await sdk.player.skipToNext(deviceId);
  };

  return (
    <PlayerContext.Provider
      value={{
        handleTrackClick,
        skip,
        previous,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => useContext(PlayerContext);
