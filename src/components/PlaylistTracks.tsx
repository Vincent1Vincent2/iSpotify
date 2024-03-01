import React, { useEffect, useState } from "react";
import SpotifyPlayer from "spotify-web-playback";
import { PlaylistTrackItem } from "../API/dataTypes/spotifyTrackData";
import { getPlaylistTrack } from "../API/fetchServices/userApi";

interface PlaylistTracksComponentProps {
  playlistId: string;
  spotifyPlayer: SpotifyPlayer;
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
      const fullTrackId = `spotify:track:${trackId}`;
      spotifyPlayer.connect(accessToken);
      spotifyPlayer.play(fullTrackId);
    } else {
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

    fetchPlaylistTracks();
  }, [playlistId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="h-52 flex justify-center items-end">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="flex p-5 gap-5 overflow-x-scroll overflow-y-hidden w-72">
          {playlistTracks.map((item, i) => (
            <li key={i} onClick={() => handleTrackClick(item.track.id)}>
              <div>
                <p>{item.track.name}</p>
                {item.track.album && (
                  <div>
                    {Array.isArray(item.track.album) ? (
                      item.track.album.map((album, a) => (
                        <div key={a}>
                          {album.name && <p>Album Name: {album.name}</p>}
                          {album.images && album.images.length > 0 && (
                            <img src={album.images[0].url} alt="" />
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="w-40">
                        {item.track.album.images &&
                          item.track.album.images.length > 0 && (
                            <img
                              className="w-35"
                              src={item.track.album.images[0].url}
                              alt=""
                            />
                          )}
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
