import sdk from "@/lib/spotify-sdk/ClientInstance";
import {
  PlaylistedTrack,
  SimplifiedPlaylist,
  Track,
} from "@spotify/web-api-ts-sdk";

export async function getPlaylistData(name: string): Promise<{
  selectedPlaylist: SimplifiedPlaylist;
  tracks: { items: PlaylistedTrack<Track>[] };
}> {
  try {
    // Fetch the user's playlists
    const playlistsResponse = await sdk.currentUser.playlists.playlists(5, 0);

    // Find the selected playlist
    const selectedPlaylist = playlistsResponse.items.find(
      (playlist) => playlist.name === name
    );

    if (!selectedPlaylist) {
      return {
        selectedPlaylist: {
          tracks: null,
          collaborative: false,
          description: "",
          external_urls: {
            spotify: "",
          },
          followers: {
            href: "",
            total: 0,
          },
          href: "",
          id: "",
          images: [],
          name: "",
          owner: {
            display_name: "",
            external_urls: {
              spotify: "",
            },
            href: "",
            id: "",
            type: "",
            uri: "",
          },
          primary_color: "",
          public: false,
          snapshot_id: "",
          type: "",
          uri: "",
        },
        tracks: {
          items: [],
        },
      };
    }

    // Fetch the tracks for the selected playlist
    const tracksResponse = await sdk.playlists.getPlaylistItems(
      selectedPlaylist.id
    );

    return {
      selectedPlaylist,
      tracks: tracksResponse,
    };
  } catch (error) {
    console.error("Error fetching playlist data:", error);
    throw error;
  }
}
