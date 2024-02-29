import { useEffect, useState } from "react";
import { SpotifyImagesData } from "../../API/dataTypes/spotifyImagesData";
import { SpotifyPlaylistData } from "../../API/dataTypes/spotifyUserPlaylist";
import { getUserPlaylists } from "../../API/fetchServices/userApi";

const PlaylistItem = () => {
  const [playlistInfo, setPlaylistInfo] = useState<SpotifyPlaylistData[]>([]);
  const [images, setImages] = useState<SpotifyImagesData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserPlaylists();
        const playlistData = data.items;

        const playlistInfo: SpotifyPlaylistData[] = playlistData.map(
          (playlist: SpotifyPlaylistData) => ({
            description: playlist.description,
            id: playlist.id,
            name: playlist.name,
            images: playlist.images || ([] as SpotifyImagesData[]),
            owner: playlist.owner,
            display_name: playlist.owner?.display_name,
            ownerId: playlist.owner?.id,
            tracks: playlist.tracks,
            items: playlist.tracks?.items,
            total: playlist.tracks?.total,
          })
        );

        const images: (SpotifyImagesData | null)[] = playlistInfo.map(
          (playlist) =>
            playlist.images && playlist.images.length >= 1
              ? playlist.images[0]
              : null
        );

        setPlaylistInfo(playlistInfo);
        setImages(
          images.filter((image) => image !== null) as SpotifyImagesData[]
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-y-auto">
      <h1>Playlists</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {playlistInfo.map((playlist, index) => (
            <li key={index}>
              <h2>{playlist.name}</h2>
              {images[index] && (
                <div>
                  <img
                    src={images[index]?.url}
                    alt={`Playlist Image ${index}`}
                  />
                </div>
              )}
              <p>{playlist.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistItem;
