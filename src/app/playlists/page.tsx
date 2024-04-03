"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import Playlists from "./playlists";

export default function AllPlaylists() {
  const { tracks } = usePlaylist();
  const { handleTrackClick } = usePlayer();

  return <Playlists sdk={sdk} />;
}
