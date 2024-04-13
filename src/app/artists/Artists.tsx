"use client";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { useEffect, useState } from "react";

export default function Artists() {
  const [savedArtists, setSavedArtists] = useState();
  useEffect(() => {
    async () => {
      const response = await sdk.currentUser.albums.savedAlbums(5);
    };
  });
}
