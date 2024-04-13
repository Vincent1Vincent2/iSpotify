"use client";

import SelectedPlaylist from "@/app/playlists/[name]/selectedPlaylist";
import Playlists from "@/app/playlists/playlists";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PlaylistMenuItem from "./PlaylistMenuItem/PlaylistMenuItem";

export default function IPodMenu() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <Link href="/playlists">
          <PlaylistMenuItem />
        </Link>
      )}
      {pathname === "/playlists" && (
        <foreignObject x="0" y="-140" width="300" height="350">
          <Playlists />
        </foreignObject>
      )}
      {pathname.startsWith("/playlists/") && (
        <foreignObject x="7" y="20" width="250" height="300">
          <SelectedPlaylist />
        </foreignObject>
      )}
    </>
  );
}
