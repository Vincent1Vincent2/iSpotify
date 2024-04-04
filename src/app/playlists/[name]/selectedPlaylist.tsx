"use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import Link from "next/link";

type PageProps = { params: { name: string } };

export default function SelectedPlaylist({ params }: PageProps) {
  const { selectedPlaylist, tracks } = usePlaylist();
  const { handleTrackClick } = usePlayer();
  const searchParams = decodeURIComponent(params.name);

  if (!selectedPlaylist) {
    return (
      <main className="p-5">
        <p>Playlist not found.</p>
        <Link href="/">Go to homepage</Link>
      </main>
    );
  }

  const playlistItem = tracks.items.find(
    (item) => item.track.name === searchParams
  );

  return (
    <main className="bg-zinc-800 mx-5 max-sm:p-5 max-sm:rounded-lg">
      <div className="flex flex-col">
        <h1> {playlistItem?.track.name}</h1>
        {tracks.items.map((track) => (
          <li
            key={track.track.id}
            onClick={() => handleTrackClick(track)}
            className="cursor-pointer hover:bg-gray-700 p-2 rounded-md"
          >
            {track.track.name}
          </li>
        ))}
      </div>
    </main>
  );
}
