"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import { SimplifiedPlaylist } from "@spotify/web-api-ts-sdk";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Playlists() {
  const { scrollX } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);
  const { playlists, setSelectedPlaylist } = usePlaylist();
  const { isPlaying } = usePlayer();

  const handlePlaylistClick = (playlist: SimplifiedPlaylist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="display">
      {playlists.map((playlist: SimplifiedPlaylist) => (
        <motion.div
          className="musicItem"
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
            {playlist && playlist.images && playlist.images.length > 0 ? (
              <picture>
                <img
                  className="coverImage"
                  src={playlist.images[0].url}
                  alt={`Playlist: ${playlist.name}`}
                />
              </picture>
            ) : (
              <p>No img</p>
            )}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
