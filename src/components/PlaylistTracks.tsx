import React, { useEffect, useState } from "react";
import SpotifyPlayer from "spotify-web-playback";
import { PlaylistTrackItem } from "../API/dataTypes/spotifyTrackData";
import { getPlaylistTrack } from "../API/fetchServices/userApi";

interface PlaylistTracksComponentProps {
  playlistId: string;
  spotifyPlayer: SpotifyPlayer; // Add SpotifyPlayer prop
}

const PlaylistTracksComponent: React.FC<PlaylistTracksComponentProps> = ({
  playlistId,
  spotifyPlayer,
}) => {
  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrackItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleTrackClick = (trackId: string) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken !== null) {
      // Use the SpotifyPlayer instance to initiate playback
      const fullTrackId = `spotify:track:${trackId}`;
      spotifyPlayer.connect(accessToken);
      spotifyPlayer.play(fullTrackId);
    } else {
      // Handle the case where access token is null
      console.error("Error: Access token is null");
    }
  };

  useEffect(() => {
    const fetchPlaylistTracks = async () => {
      try {
        if (playlistId.length > 0) {
          console.log("Fetching playlist tracks for playlistId:", playlistId);

          const data = await getPlaylistTrack(playlistId);
          console.log("Playlist Tracks Data:", data);

          if (data.items && Array.isArray(data.items)) {
            setPlaylistTracks(data.items);
            console.log(data.items);
          } else {
            setPlaylistTracks([]);
          }
        }
      } catch (error) {
        console.error("Error fetching playlist tracks:", error);
        setError("Error fetching playlist tracks");
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchPlaylistTracks();
  }, [playlistId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log("Playlist Tracks:", playlistTracks);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="overflow-y-scroll flex">
          {playlistTracks.map((item, i) => (
            <li key={i} onClick={() => handleTrackClick(item.track.id)}>
              <div>
                <p>{item.track.name}</p>
                {item.track.album && (
                  <div>
                    {Array.isArray(item.track.album) ? (
                      // Handle the case where album is an array
                      item.track.album.map((album, a) => (
                        <div key={a}>
                          {album.name && <p>Album Name: {album.name}</p>}
                          {album.images && album.images.length > 0 && (
                            <img src={album.images[0].url} alt="" />
                          )}
                        </div>
                      ))
                    ) : (
                      // Handle the case where album is an object
                      <div className="w-40">
                        {item.track.album.images &&
                          item.track.album.images.length > 0 && (
                            <img
                              className="w-40"
                              src={item.track.album.images[0].url}
                              alt=""
                            />
                          )}
                        <div>{item.track.id}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistTracksComponent;
