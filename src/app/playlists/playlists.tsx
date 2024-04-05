"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import { SimplifiedPlaylist, SpotifyApi } from "@spotify/web-api-ts-sdk";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Playlists({}: { sdk: SpotifyApi }) {
  const { scrollX } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { playlists, setSelectedPlaylist } = usePlaylist();
  const { isPlaying } = usePlayer();

  const handlePlaylistClick = (playlist: SimplifiedPlaylist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <main className="playlist">
      <div className="display">
        {playlists.map((playlist, index) => (
          <motion.div
            className={`playlistItem flexItem-${index + 1}`}
            key={playlist.id}
            initial={{
              scale: 0.8,
              zIndex: 0,
            }}
            whileInView={{
              x: 0,

              scale: 1,
              translateX: 0,
              zIndex: 999,
            }}
            exit={{
              x: scrollX.get() > 0 ? -300 : 300,
              scale: 0.5,
              opacity: 0,
            }}
            transition={{
              type: "just",
              duration: 0.5,
              ease: "easeInOut",
            }}
            viewport={{
              root: scrollRef,
              amount: 0.9,
            }}
          >
            <Link
              href={`playlists/${encodeURIComponent(playlist.name)}`}
              onClick={() => handlePlaylistClick(playlist)}
            >
              {playlist.images.length > 0 && (
                <picture>
                  <img
                    className="playlistCovers"
                    src={playlist.images[0].url}
                    alt={`Playlist: ${playlist.name}`}
                  />
                </picture>
              )}
            </Link>
            <p className="playlistName">{playlist.name}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
