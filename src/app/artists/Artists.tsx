"use client";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { FollowedArtists } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

export default function Artists() {
  const [followedArtists, setFollowedArtist] = useState<FollowedArtists>();

  useEffect(() => {
    async function fetchData() {
      const response = await sdk.currentUser.followedArtists(undefined, 4);
      setFollowedArtist(response);
    }
    fetchData();
  }, []);

  if (!followedArtists) {
    return <div>You follow no artists</div>;
  }

  return (
    <div>
      {followedArtists.artists.items.map((results) => (
        <div key={results.id}>
          <p style={{ color: "black" }}>{results.name}</p>
        </div>
      ))}
    </div>
  );
}
