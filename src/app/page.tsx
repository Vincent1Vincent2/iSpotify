"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import "./globals.css";

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
      <p>{session.data.user?.name}</p>
      <button onClick={() => signOut()}>Sign out</button>
      <Link href={"/playlists"}>Go to playlists</Link>
    </div>
  );
}
