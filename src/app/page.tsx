"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return null;
  }

  return (
    <main className="signOut">
      <Link href={"/playlists"}>Go to playlists</Link>
    </main>
  );
}
