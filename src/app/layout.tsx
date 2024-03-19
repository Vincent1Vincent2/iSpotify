import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import AuthSessionProvider from "@/Providers/AuthSessionProvider";
import { PlayerProvider } from "@/Providers/PlayerProvider";
import { getServerSession } from "next-auth";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthSessionProvider session={session}>
          <PlayerProvider>{children}</PlayerProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
