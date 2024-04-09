"use client";

import sdk from "@/lib/spotify-sdk/ClientInstance";
import { createContext, useContext, useEffect, useState } from "react";
import {
  Page,
  PlaylistedTrack,
  SimplifiedPlaylist,
  Track,
  TrackReference,
} from "../../node_modules/@spotify/web-api-ts-sdk";

interface PlaylistContextValue {
  playlists: SimplifiedPlaylist[];
  setPlaylists: (playlists: SimplifiedPlaylist[]) => void;
  selectedPlaylist: SimplifiedPlaylist | null;
  setSelectedPlaylist: (playlist: SimplifiedPlaylist | null) => void;
  tracks: Page<PlaylistedTrack<Track>>;
  setTracks: (tracks: Page<PlaylistedTrack<Track>>) => void;
  trackReference: ExtendedTrackReference | null;
  setTrackReference: (trackReference: ExtendedTrackReference | null) => void;
}

interface PlaylistProviderProps {
  children: React.ReactNode;
}

const PlaylistContext = createContext<PlaylistContextValue>({
  playlists: [
    {
      tracks: null,
      collaborative: false,
      description: "",
      external_urls: {
        spotify: "",
      },
      followers: {
        href: "",
        total: 0,
      },
      href: "",
      id: "",
      images: [],
      name: "",
      owner: {
        display_name: "",
        external_urls: {
          spotify: "",
        },
        href: "",
        id: "",
        type: "",
        uri: "",
      },
      primary_color: "",
      public: false,
      snapshot_id: "",
      type: "",
      uri: "",
    },
  ],
  setPlaylists: () => {},
  selectedPlaylist: null,
  setSelectedPlaylist: () => {},
  tracks: {
    href: "",
    items: [],
    limit: 0,
    next: null,
    offset: 0,
    previous: null,
    total: 0,
  },
  setTracks: () => {},
  trackReference: null,
  setTrackReference: () => {},
});

export const PlaylistProvider: React.FC<PlaylistProviderProps> = ({
  children,
}) => {
  const [playlists, setPlaylists] = useState<SimplifiedPlaylist[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] =
    useState<SimplifiedPlaylist | null>(null);
  const [tracks, setTracks] = useState<Page<PlaylistedTrack<Track>>>({
    href: "",
    items: [],
    limit: 0,
    next: null,
    offset: 0,
    previous: null,
    total: 0,
  });
  const [trackReference, setTrackReference] =
    useState<ExtendedTrackReference | null>(null);

  useEffect(() => {
    const storedPlaylists = localStorage.getItem("playlists");
    const storedSelectedPlaylist = localStorage.getItem("selectedPlaylist");

    if (storedPlaylists) {
      setPlaylists(JSON.parse(storedPlaylists));
    } else {
      fetchPlaylists();
    }

    if (storedSelectedPlaylist) {
      setSelectedPlaylist(JSON.parse(storedSelectedPlaylist));
    }
  }, []);

  const fetchPlaylists = async () => {
    try {
      const page = await sdk.currentUser.playlists.playlists(15, 0);
      setPlaylists(page.items);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  useEffect(() => {
    const fetchPlaylistTracks = async (playlistId: string) => {
      if (selectedPlaylist) {
        try {
          console.log("Fetching playlist tracks...");
          const playlistResponse = await sdk.playlists.getPlaylistItems(
            playlistId
          );
          console.log("Playlist response:", playlistResponse);
          setTracks(playlistResponse);
          console.log("Tracks state updated:", playlistResponse.items);
        } catch (error) {
          console.error("Error fetching playlist tracks:", error);
        }
      }
    };

    if (selectedPlaylist) {
      fetchPlaylistTracks(selectedPlaylist.id);
    }
  }, [selectedPlaylist, sdk]);

  useEffect(() => {
    if (selectedPlaylist) {
      localStorage.setItem(
        "selectedPlaylist",
        JSON.stringify(selectedPlaylist)
      );
    }
  }, [selectedPlaylist, sdk]);

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        setPlaylists,
        selectedPlaylist,
        setSelectedPlaylist,
        tracks,
        setTracks,
        trackReference,
        setTrackReference,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => useContext(PlaylistContext);

interface ExtendedTrackReference extends TrackReference {
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

function convertTrackToTrackReference(track: Track): ExtendedTrackReference {
  return {
    href: track.href,
    id: track.id,
    name: track.name,
    type: track.type,
    uri: track.uri,
    total: 0, // Set the 'total' property to 0 or a default value
  };
}
