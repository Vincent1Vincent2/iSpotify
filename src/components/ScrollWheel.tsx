"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import Link from "next/link";

export default function ScrollWheel() {
  const { skipTrack, previousTrack } = usePlayer();
  return (
    <div className="trackControls">
      <button className="trackButton" onClick={previousTrack}>
        Previous
      </button>
      <Link href="/playlists">
        <button className="trackButton">Menu</button>
      </Link>
      <button className="trackButton" onClick={skipTrack}>
        Skip
      </button>
    </div>
  );
}
