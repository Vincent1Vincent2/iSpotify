import { useState } from "react";
import { SpotifyImagesData } from "../../API/dataTypes/spotifyImagesData";
import { SpotifyPlaylistData } from "../../API/dataTypes/spotifyUserPlaylist";

export const usePlaylistDataState = () => {
  const [playlistInfo, setPlaylistInfo] = useState<SpotifyPlaylistData[]>([]);
  const [images, setImages] = useState<SpotifyImagesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [playlistIds, setPlaylistIds] = useState<string[]>([]);

  return {
    playlistInfo,
    setPlaylistInfo,
    images,
    setImages,
    loading,
    setLoading,
    playlistIds,
    setPlaylistIds,
  };
};
