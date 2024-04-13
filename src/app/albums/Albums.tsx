"use client";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Album, Page, SavedAlbum } from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

export default function Albums() {
  const [savedArtists, setSavedArtists] = useState<Page<SavedAlbum>>();
  const [selectedAlbum, setSelectedAlbum] = useState<Album>();

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
    <div
      style={{
        display: "flex",
        alignItems: "start",
        justifyContent: "start",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100px",
          overflowY: "scroll",
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
      {selectedAlbum ? (
        <div style={{ height: "150px", width: "150px" }}>
          <h2 style={{ color: "black" }}>{selectedAlbum.name}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              alignItems: "center",
              height: "50px",
            }}
          >
            {selectedAlbum.tracks.items.map((trackItem) => (
              <div key={trackItem.id}>
                <p style={{ color: "black" }}>{trackItem.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
