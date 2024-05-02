"use client";

import playlists from "@/app/playlists/playlists";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import {
  Album,
  Page,
  PlaylistedTrack,
  SavedAlbum,
  SimplifiedPlaylist,
  Track,
} from "@spotify/web-api-ts-sdk";
import { createContext, useContext, useEffect, useState } from "react";

interface AlbumContextValue {
  albums: Album | undefined;
  setAlbums: (album: Album | undefined) => void;
  selectedAlbum: SimplifiedPlaylist | null;
  setSelectedAlbum: (playlist: SimplifiedPlaylist | null) => void;
  tracks: Track[];
  setTracks: (tracks: Page<PlaylistedTrack<Track>>) => void;
}

interface AlbumProviderProps {
  children: React.ReactNode;
}

const AlbumContext = createContext<AlbumContextValue>({
  albums: undefined,
  setAlbums: () => {},
  selectedAlbum: null,
  setSelectedAlbum: () => {},
  tracks: [],
  setTracks: () => {},
});

export const AlbumProvider: React.FC<AlbumProviderProps> = ({ children }) => {
  const [albums, setAlbums] = useState<Page<SavedAlbum>>();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [tracks, setTracks] = useState<Track>();

  useEffect(() => {
    const storedAlbums = localStorage.getItem("albums");
    const storedSelectedAlbum = localStorage.getItem("selectedAlbum");

    if (storedAlbums) {
      setAlbums(JSON.parse(storedAlbums));
    } else {
      fetchAlbums();
    }

    if (storedSelectedAlbum) {
      setSelectedAlbum(JSON.parse(storedSelectedAlbum));
    }
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await sdk.currentUser.albums.savedAlbums(5);
      setAlbums(response);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    const fetchAlbumTracks = async (playlistId: string) => {
      if (selectedAlbum) {
        try {
          console.log("Fetching playlist tracks...");
          const playlistResponse = await sdk.tracks.get(playlistId);

          setTracks(playlistResponse);
          console.log("Tracks state updated:", playlistResponse);
        } catch (error) {
          console.error("Error fetching playlist tracks:", error);
        }
      }
    };

    if (selectedAlbum) {
      fetchAlbumTracks(selectedAlbum.id);
    }
  }, [selectedAlbum, sdk]);

  useEffect(() => {
    if (selectedAlbum) {
      localStorage.setItem("selectedAlbum", JSON.stringify(selectedAlbum));
    }
  }, [selectedAlbum, sdk]);

  return (
    <AlbumContext.Provider
      value={{
        albums,
        setAlbums,
        selectedAlbum,
        setSelectedAlbum,
        playlists,
        tracks,
        setTracks,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export const usePlaylist = () => useContext(AlbumContext);
