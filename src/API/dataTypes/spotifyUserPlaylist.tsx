import { spotifyImagesData } from "./spotifyImagesData";
import { SpotifyTrackData } from "./spotifyTrackData";

export interface SpotifyPlayListItem {
  title?: string;
  imageUrl?: string;
  author?: string;
  id?: string;
  name?: string;
  description?: string;
  images?: spotifyImagesData[];
}

export interface SpotifyPlaylistData {
  description?: string;
  id?: string;
  name?: string;
  images?: spotifyImagesData[];
  owner?: {
    display_name?: string;
    id?: string;
  };
  tracks?: {
    items?: { track: SpotifyTrackData }[];
    total?: number;
  };
}
