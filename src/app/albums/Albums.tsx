"use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Album, Page, SavedAlbum } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

export default function Albums() {
  const [savedArtists, setSavedArtists] = useState<Page<SavedAlbum>>();
  const [selectedAlbum, setSelectedAlbum] = useState<Album>();
  const { handleTrackClick } = usePlayer();

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
    <div>
      {!selectedAlbum ? (
        <div
          style={{
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "190px",
              overflowY: "scroll",
              width: "115px",
            }}
          >
            {savedArtists?.items.map((albumItem) => (
              <div
                onClick={() => loadAlbum(albumItem.album)}
                key={albumItem.album.id}
              >
                <picture>
                  <img
                    width={100}
                    height={100}
                    src={albumItem.album.images[0].url}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            height: "190px",
            width: "275px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ paddingLeft: "10px" }}>
            <picture>
              <img
                src={selectedAlbum.images[0].url}
                width={100}
                height={100}
                alt=""
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
