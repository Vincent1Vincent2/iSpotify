import AuthSessionProvider from "@/Providers/AuthSessionProvider";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";

import { getServerSession } from "next-auth";

import SignIn from "@/components/SignIn";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  {
    return (
      <html lang="en">
        <body>
          <AuthSessionProvider session={session}>
            <SignIn />
            {children}
          </AuthSessionProvider>
        </body>
      </html>
    );
  }
}
