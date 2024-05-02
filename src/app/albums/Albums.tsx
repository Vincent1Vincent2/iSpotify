"use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Album, Page, SavedAlbum } from "@spotify/web-api-ts-sdk";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Albums() {
  const [savedArtists, setSavedArtists] = useState<Page<SavedAlbum>>();
  const [selectedAlbum, setSelectedAlbum] = useState<Album>();
  const { handleTrackClick } = usePlayer();
  const { scrollX } = useScroll();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await sdk.currentUser.albums.savedAlbums(5);
      setSavedArtists(response);
      console.log(response);
    }
    fetchData();
  }, []);

  function loadAlbum(album: Album) {
    setSelectedAlbum(album);
  }

  return (
    <div className="display">
      {!selectedAlbum ? (
        <div className="display">
          {savedArtists?.items.map((albumItem) => (
            <motion.div
              className="musicItem"
              onClick={() => loadAlbum(albumItem.album)}
              key={albumItem.album.id}
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
              <picture>
                <img
                  className="coverImage"
                  src={albumItem.album.images[0].url}
                />
              </picture>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="musicItem">
          <div style={{ paddingLeft: "10px" }}>
            <picture>
              <img
                className="coverImage"
                src={selectedAlbum.images[0].url}
                alt="track cover image"
              />
            </picture>
            <p
              style={{
                color: "black",
                padding: "0",
                margin: "0",
                height: "50px",
                width: "100px",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {selectedAlbum?.name}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              height: "190px",
            }}
          >
            {selectedAlbum?.tracks.items.map((trackItem) => (
              <div key={trackItem.id}>
                <p
                  onClick={() => handleTrackClick(trackItem)}
                  style={{ color: "black", margin: "0" }}
                >
                  {trackItem.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
