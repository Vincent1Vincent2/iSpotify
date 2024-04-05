"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SignIn() {
  const session = useSession();

  if (!session || session.status !== "authenticated") {
    return (
      <main className="signIn">
        <div className="signIn">
          <h1>Welcome!</h1>
          <button className="signInButton" onClick={() => signIn("spotify")}>
            Sign in with Spotify
          </button>
        </div>
      </main>
    );
  }

  return (
    <header className="header">
      <p>Hi, {session.data.user?.name}</p>
      <button className="signOutButton" onClick={() => signOut()}>
        Sign out
      </button>
    </header>
  );
}
