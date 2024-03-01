import axios from "axios";
import { spotifyClientApi } from "../auth/createSpotifyClientApi";
import { getAccessToken } from "../auth/getAccessToken";

export const getUserData = async () => {
  const { data } = await spotifyClientApi.get(`me`);
  return data;
};

export const getUserPlaylists = async (limit = 50, offset = 0) => {
  try {
    const headers = {
      Authorization: `Bearer ${await getAccessToken()}`,
    };

    const { data } = await spotifyClientApi.get("me/playlists", {
      headers,
      params: {
        limit,
        offset,
      },
    });

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching user playlists:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    } else {
      console.error("Unexpected error fetching user playlists:", error);
    }

    throw error;
  }
};

export const getUserAlbum = async () => {
  const { data } = await spotifyClientApi.get("me/albums");
  console.log(data);
  return data;
};

export const getUserTopArtists = async () => {
  const { data } = await spotifyClientApi.get("me/top/artists", {
    params: {
      limit: 50,
    },
  });
  console.log(data);
  return data;
};

export const getPlaylistTrack = async (
  playlistId: string,
  limit = 50,
  offset = 0
) => {
  try {
    const headers = {
      Authorization: `Bearer ${await getAccessToken()}`,
    };

    const { data } = await spotifyClientApi.get(
      `playlists/${playlistId}/tracks`,
      {
        headers,
        params: {
          playlistId,
          limit,
          offset,
        },
      }
    );

    return data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching tracks:", error);

      if (error.response) {
        console.error("Response data:", error.response.data);
      }
    } else {
      console.error("Unexpected error fetching tracks:", error);
    }

    throw error;
  }
};
