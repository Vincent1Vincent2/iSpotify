import { SpotifyImagesData } from "./spotifyImagesData";
import { TrackObject } from "./spotifyTrackData";

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
  description: string;
  id: string;
  name: string;
  images: SpotifyImagesData[] | null;
  owner: {
    display_name: string | null;
    id: string | null;
  } | null;
  tracks: {
    items: TrackObject[] | null;
    total: number | null;
  } | null;
}
