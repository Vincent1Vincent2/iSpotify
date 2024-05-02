"use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import Link from "next/link";

export default function SelectedPlaylist({}) {
  const { selectedPlaylist, tracks } = usePlaylist();
  const { handleTrackClick, isPlaylistedTrack, isPlaying, selectedTrack } =
    usePlayer();

  if (!selectedPlaylist) {
    return (
      <main className="p-5">
        <p>Playlist not found.</p>
        <Link href="/">Go to homepage</Link>
      </main>
    );
  }

  return (
    <div className="selectedPlaylist">
      {isPlaying && selectedTrack !== null && (
        <div style={{ height: 100, width: 100 }}>
          {isPlaylistedTrack(selectedTrack) ? (
            <img
              height={100}
              width={100}
              src={selectedTrack.track.album.images[0].url}
              alt=""
              style={{ zIndex: 2 }}
            />
          ) : (
            <img
              className="selectedImage"
              height={100}
              width={100}
              src={selectedPlaylist.images[0].url}
              alt=""
            />
          )}
        </div>
      )}
      {selectedTrack === null && (
        <div>
          <picture>
            <img
              className="selectedImage"
              height={100}
              width={100}
              src={selectedPlaylist.images[0].url}
              alt=""
            />
          </picture>
        </div>
      )}
      <div className="trackList">
        {tracks.items.map((track) => (
          <div key={track.track.id}>
            <li onClick={() => handleTrackClick(track)} className="track">
              {track.track.name}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}
