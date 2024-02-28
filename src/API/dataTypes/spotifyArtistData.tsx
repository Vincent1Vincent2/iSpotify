import { spotifyImagesData } from "./spotifyImagesData";

export interface SpotifyArtistData {
  name: string;
  id: string;
}

export interface SpotifyArtist {
  name?: string;
  imageUrl?: string;
  id?: string;
  images?: spotifyImagesData[];
}
