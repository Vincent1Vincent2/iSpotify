"use client";

import { usePlaylist } from "@/Providers/PlaylistProvider";
import { SimplifiedPlaylist, SpotifyApi } from "@spotify/web-api-ts-sdk";
import Link from "next/link";

export default function Playlists({}: { sdk: SpotifyApi }) {
  const { playlists, setSelectedPlaylist } = usePlaylist();

  const handlePlaylistClick = (playlist: SimplifiedPlaylist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div>
      {playlists.map((playlist) => (
        <div key={playlist.id}>
          <Link
            href={`playlists/${encodeURIComponent(playlist.name)}`}
            onClick={() => handlePlaylistClick(playlist)}
          >
            <p>{playlist.name}</p>
            {playlist.images.length > 0 && (
              <div>
                <img
                  src={playlist.images[0].url}
                  alt={`Playlist: ${playlist.name}`}
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
