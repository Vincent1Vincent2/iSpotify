import { SpotifyImagesData } from "./spotifyImagesData";
import { SpotifyTrackData } from "./spotifyTrackData";

export interface SpotifyPlayListItem {
  title?: string;
  imageUrl?: string;
  author?: string;
  id?: string;
  name?: string;
  description?: string;
  images?: SpotifyImagesData[];
}

export interface SpotifyPlaylistData {
  description?: string;
  id?: string;
  name?: string;
  images?: SpotifyImagesData[];
  owner?: {
    display_name?: string;
    id?: string;
  };
  tracks?: {
    items?: { track: SpotifyTrackData }[];
    total?: number;
  };
}
