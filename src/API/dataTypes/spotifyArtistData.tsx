import { ImageObject } from "./spotifyImagesData";

export interface ArtistObject {
  external_urls: {
    spotify: string; // The Spotify URL for the object
  };
  followers: {
    href: string | null; // Nullable, always set to null as the Web API does not support it
    total: number; // The total number of followers
  };
  genres: string[]; // A list of genres associated with the artist
  href: string; // A link to the Web API endpoint providing full details of the artist
  id: string; // The Spotify ID for the artist
  images: ImageObject[]; // Images of the artist in various sizes
  name: string; // The name of the artist
  popularity: number; // The popularity of the artist (between 0 and 100)
  type: "artist"; // The object type
  uri: string; // The Spotify URI for the artist
}
