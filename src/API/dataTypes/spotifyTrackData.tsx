import { SpotifyAlbumData } from "./spotifyAlbumData";
import { ArtistObject } from "./spotifyArtistData";

export interface PlaylistTrackResponse {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: PlaylistTrackItem[];
}

export interface PlaylistTrackItem {
  added_at: string;
  added_by: {
    external_urls: {
      [key: string]: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  is_local: boolean;
  primary_color: string | null;
  track: TrackObject; // This is where the 'track' property is expected
  video_thumbnail: {
    url: string | null;
  };
}

export interface TrackObject {
  album: SpotifyAlbumData | SpotifyAlbumData[];
  artists: ArtistObject[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    // Include properties of external IDs object as needed
  };
  external_urls: {
    // Include properties of external URLs object as needed
  };
  href: string; // A link to the Web API endpoint providing full details of the track
  id: string; // The Spotify ID for the track
  is_playable: boolean;
  linked_from: {
    // Include properties of linked_from object as needed
  };
  restrictions: {
    // Include properties of restrictions object as needed
  };
  name: string; // The name of the track
  popularity: number;
  preview_url: string | null; // A link to a 30-second preview (MP3 format) of the track, can be null
  track_number: number;
  type: "track";
  uri: string; // The Spotify URI for the track
  is_local: boolean; // Whether or not the track is from a local file
}

export interface SpotifyTrackData {
  // ... other properties ...
  album?: SpotifyAlbumData | SpotifyAlbumData[];
}
