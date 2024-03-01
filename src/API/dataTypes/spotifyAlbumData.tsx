import { ArtistObject } from "./spotifyArtistData";
import { SpotifyImagesData } from "./spotifyImagesData";

export interface SpotifyAlbumData {
  album_type?: string;
  artists?: ArtistObject[];
  available_markets?: string[];
  external_urls?: { spotify: string };
  href?: string;
  id?: string;
  images?: SpotifyImagesData[];
  name?: string;
  release_date?: string;
  release_date_precision?: string;
  total_tracks?: number;
  type?: string;
  uri?: string;
}

// Add another interface for the array case
export interface SpotifyAlbumArrayData extends Array<SpotifyAlbumData> {}
