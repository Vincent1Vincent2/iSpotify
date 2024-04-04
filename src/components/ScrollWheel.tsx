"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import Link from "next/link";

export default function ScrollWheel() {
  const { skipTrack, previousTrack } = usePlayer();
  return (
    <div>
      <Link href="/playlists">
        <button>Menu</button>
      </Link>
      <button onClick={previousTrack}>Previous</button>
      <button>Middle</button>
      <button onClick={skipTrack}>Skip</button>
      <button>Play/Pause</button>
    </div>
  );
}
