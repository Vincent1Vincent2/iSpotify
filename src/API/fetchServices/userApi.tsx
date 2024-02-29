import { spotifyClientApi } from "../auth/createSpotifyClientApi";

export const getUserData = async () => {
  const { data } = await spotifyClientApi.get(`me`);
  return data;
};

export const getUserPlaylists = async (limit = 20, offset = 0) => {
  try {
    const { data } = await spotifyClientApi.get("me/playlists", {
      params: {
        limit,
        offset,
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching user playlists:", error);
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
