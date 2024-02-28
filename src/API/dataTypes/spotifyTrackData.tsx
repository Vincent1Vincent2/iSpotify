import { SpotifyAlbumData } from "./spotifyAlbumData";
import { SpotifyArtistData } from "./spotifyArtistData";

export interface SpotifyTrackData {
  album?: SpotifyAlbumData;
  artists?: SpotifyArtistData[];
  explicit?: boolean;
  duration_ms?: number;
  name?: string;
  id?: string;
  popularity?: number;
}
