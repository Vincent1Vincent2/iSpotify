import { SpotifyArtistData } from "./spotifyArtistData";
import { spotifyImagesData } from "./spotifyImagesData";

export interface SpotifyAlbumData {
  title?: string;
  imageUrl?: string;
  id?: string;
  author?: string;
  dateTime?: string;
  album?: {
    id?: string;
    images?: spotifyImagesData[];
    name?: string;
    artists?: SpotifyArtistData[];
  };
}
