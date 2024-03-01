import { useEffect } from "react";
import SpotifyPlayer from "spotify-web-playback";

const spotifyPlayer = new SpotifyPlayer("iSpotify", 1);

// Type guard for checking if an item is a string
function isString(value: any): value is string {
  return typeof value === "string";
}

const Playback = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const storedTrackId = localStorage.getItem("selectedTrackId");

        // Check if playBackToken and storedTrackId are strings before using them
        if (isString(token) && isString(storedTrackId)) {
          await spotifyPlayer.connect(token);
          spotifyPlayer.play(`spotify:track:${storedTrackId}`);
        } else {
          // Handle the case where token or storedTrackId is null or not a string
          console.error("Error: Access token or track ID not found");
        }

        // ... (other logic if needed)
      } catch (error) {
        // Handle any errors that might occur during playback initiation
        console.error("Error in fetchData:", error);
      }
    };

    fetchData();
  }, []);

  return (
    // Your Playback component JSX
    // You might include playback controls or other features here
    <div>
      <p>Playback controls go here</p>
    </div>
  );
};

export default Playback;
