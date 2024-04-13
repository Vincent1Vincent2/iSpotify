"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import IPodShell from "./iPodShell/IPodShell";

export default function SignIn() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <div className="signIn">
        <h1 className="welcomeText">Welcome!</h1>
        <button className="signInButton" onClick={() => signIn("spotify")}>
          Sign in with Spotify
        </button>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <p>Hi, {session.data.user?.name}</p>
        <button className="signOutButton" onClick={() => signOut()}>
          Sign out
        </button>
      </header>
      <main className="iPodContainer">
        <IPodShell />
      </main>
    </>
  );
}
