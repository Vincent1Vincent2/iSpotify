import { SpotifyAlbumData } from "./spotifyAlbumData";
import { SpotifyArtist, SpotifyArtistData } from "./spotifyArtistData";

export type NavCategorySelector = {
  title: string;
  id: string | number;
  type: "playlist" | "album" | "user";
  active: boolean;
};

export interface MenuItemCategory {
  author?: string;
  type?: "playlist" | "album" | "user";
  thumbnail?: string | undefined;
  name?: string | undefined;
  id?: string;
  artists?: SpotifyArtistData[];
}

export interface DataItem extends SpotifyAlbumData, SpotifyArtist {
  owner?: {
    display_name: string;
  };
  artists?: SpotifyArtistData[];
}
