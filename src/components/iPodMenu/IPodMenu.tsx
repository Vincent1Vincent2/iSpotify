"use client";

import SelectedPlaylist from "@/app/playlists/[name]/SelectedPlaylist";
import Playlists from "@/app/playlists/playlists";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AlbumMenuItem from "./AlbumMenuItem/AlbumMenuItem";
import ArtistMenuItem from "./ArtistMenuItem/ArtistMenuItem";
import PlaylistMenuItem from "./PlaylistMenuItem/PlaylistMenuItem";

export default function IPodMenu() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <g>
          <Link href="/playlists">
            <PlaylistMenuItem />
          </Link>
          <Link href="/artists">
            <ArtistMenuItem />
          </Link>
          <Link href="/albums">
            <AlbumMenuItem />
          </Link>
        </g>
      )}
      {pathname === "/playlists" && (
        <foreignObject x="0" y="-140" width="300" height="350">
          <Playlists />
        </foreignObject>
      )}
      {pathname === "/albums" && (
        <foreignObject x="15" y="35" width="300" height="350">
          <h2 style={{ fontSize: 30, color: "black" }}>Under Construction</h2>
        </foreignObject>
      )}
      {pathname === "/artists" && (
        <foreignObject x="15" y="35" width="300" height="350">
          <h2 style={{ fontSize: 30, color: "black" }}>Under Construction</h2>
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
