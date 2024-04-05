"use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import ScrollWheel from "@/components/ScrollWheel";
import Link from "next/link";

export default function SelectedPlaylist({}) {
  const { selectedPlaylist, tracks } = usePlaylist();
  const { handleTrackClick, isPlaying, selectedTrack } = usePlayer();

  if (!selectedPlaylist) {
    return (
      <main className="p-5">
        <p>Playlist not found.</p>
        <Link href="/">Go to homepage</Link>
      </main>
    );
  }

  return (
    <main className="selectedPlaylist">
      {isPlaying ? (
        <div style={{ height: 200, width: 200 }}>
          <img
            height={200}
            width={200}
            src={selectedTrack?.album.images[0].url}
            alt=""
          />
        </div>
      ) : (
        <div>
          <picture>
            <img
              height={200}
              width={200}
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
      <ScrollWheel />
    </main>
  );
}
