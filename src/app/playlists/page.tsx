"use client";

import sdk from "@/lib/spotify-sdk/ClientInstance";
import Playlists from "./playlists";

export default function AllPlaylists() {
  return <Playlists sdk={sdk} />;
}
