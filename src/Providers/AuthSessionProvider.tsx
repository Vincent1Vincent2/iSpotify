"use client";

import { Session } from "next-auth";
import { SessionProvider } from "../../node_modules/next-auth/src/react";

function AuthSessionProvider({
  session,
  children,
}: {
  children: React.ReactNode;
  session: Session | null | undefined;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AuthSessionProvider;
