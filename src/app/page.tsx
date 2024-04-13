"use client";
import { useSession } from "next-auth/react";
import "./globals.css";

export default function Home() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return null;
  }

  return;
}
