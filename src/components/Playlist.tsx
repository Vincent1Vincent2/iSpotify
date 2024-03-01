import { useEffect, useState } from "react";
import SpotifyPlayer from "spotify-web-playback";
import { SpotifyImagesData } from "../API/dataTypes/spotifyImagesData";
import { SpotifyPlaylistData } from "../API/dataTypes/spotifyUserPlaylist";
import { getUserPlaylists } from "../API/fetchServices/userApi";
import PlaylistTracksComponent from "./PlaylistTracks";

const PlaylistItem = () => {
  const [playlistInfo, setPlaylistInfo] = useState<SpotifyPlaylistData[]>([]);
  const [selectedPlaylist, setSelectedPlaylist] =
    useState<SpotifyPlaylistData | null>(null);
  const [images, setImages] = useState<SpotifyImagesData[]>([]);

  const spotifyPlayer = new SpotifyPlayer("iSpotify", 1);

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

      const images: SpotifyImagesData[] = playlistInfo
        .map((playlist) =>
          playlist.images && playlist.images.length >= 1
            ? playlist.images[0]
            : null
        )
        .filter((image) => image !== null) as SpotifyImagesData[];

      setPlaylistInfo(playlistInfo);
      setImages(images);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="h-60 flex justify-center items-center">
      {selectedPlaylist ? (
        <div>
          <button onClick={() => setSelectedPlaylist(null)}>Back</button>

          <PlaylistTracksComponent
            playlistId={selectedPlaylist.id}
            spotifyPlayer={spotifyPlayer}
          />
        </div>
      ) : (
        <ul className="flex p-5 gap-7 overflow-y-hidden overflow-x-scroll">
          {playlistInfo.map((playlist, index) => (
            <li className="flex items-center" key={index}>
              {images[index] && (
                <div className="w-40">
                  <img
                    className="w-36"
                    src={images[index]?.url}
                    alt={`Playlist Image ${index}`}
                  />
                </div>
              )}
              <button onClick={() => setSelectedPlaylist(playlist)}>
                Select Playlist
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistItem;
