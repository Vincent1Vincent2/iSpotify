import axios from "axios";
import { getAccessToken } from "../auth/getAccessToken";

export const getUserPlaylists = async () => {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      console.error("No access token available.");
      return null;
    }

    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/playlists",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("User playlists data:", data);
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

    return null;
  }
};
