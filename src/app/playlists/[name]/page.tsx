"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import Link from "next/link";

type PageProps = { params: { name: string } };

export default function PlaylistPage({ params }: PageProps) {
  const { selectedPlaylist, tracks } = usePlaylist();
  const { handleTrackClick } = usePlayer();
  const searchParams = decodeURIComponent(params.name);

  if (!selectedPlaylist || !tracks.items.length) {
    return (
      <main className="p-5">
        <p>Playlist not found.</p>
        <Link href="/">Go to homepage</Link>
      </main>
    );
  }

  return (
    <main className="bg-zinc-800 mx-5 max-sm:p-5 max-sm:rounded-lg">
      <h2>{selectedPlaylist.name}</h2>
      <ul>
        {tracks.items.map((track) => (
          <li
            key={track.track.id}
            onClick={() => handleTrackClick(track)}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
          >
            {track.track.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
