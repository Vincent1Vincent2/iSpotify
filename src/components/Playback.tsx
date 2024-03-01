import { useEffect } from "react";
import SpotifyPlayer from "spotify-web-playback";

const spotifyPlayer = new SpotifyPlayer("iSpotify", 1);

function isString(value: any): value is string {
  return typeof value === "string";
}

const Playback = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const storedTrackId = localStorage.getItem("selectedTrackId");

        if (isString(token) && isString(storedTrackId)) {
          await spotifyPlayer.connect(token);
          spotifyPlayer.play(`spotify:track:${storedTrackId}`);
        } else {
          console.error("Error: Access token or track ID not found");
        }
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Playback controls go here</p>
    </div>
  );
};

export default Playback;
