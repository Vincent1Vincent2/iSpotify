"use client";

import { PlaybackProvider } from "@/Providers/PlaybackProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { signIn, signOut, useSession } from "next-auth/react";
import UserPlaylist from "./api/spotify/playlist";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <div>
        <h1>Welcome!</h1>
        <button onClick={() => signIn("spotify")}>Sign in with Spotify</button>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome {session.data.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
      <PlaybackProvider>
        <UserPlaylist sdk={sdk} />
      </PlaybackProvider>
    </div>
  );
}
