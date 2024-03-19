"use client";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import {
  Episode,
  PlaylistedTrack,
  SimplifiedPlaylist,
  SpotifyApi,
  Track,
} from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

//PlaylistedTrack with a playlistId
interface AugmentedPlaylistedTrack extends PlaylistedTrack {
  playlistId: string;
}

export default function UserPlaylist({}: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SimplifiedPlaylist[]>([]);
  const [trackResults, setTrackResults] = useState<AugmentedPlaylistedTrack[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await sdk.currentUser.playlists.playlists(10, 0);
      setResults(response.items || []);
      const devices = await sdk.player.getAvailableDevices();
      const playlistIds = response.items?.map((playlist) => playlist.id) || [];
      const tracksPromises = playlistIds.map(async (playlistId) => {
        const trackResponse = await sdk.playlists.getPlaylistItems(playlistId);
        const tracksWithPlaylistId =
          trackResponse.items?.map((track) => ({
            ...track,
            playlistId: playlistId,
          })) || [];
        return tracksWithPlaylistId;
      });
      const tracks = await Promise.all(tracksPromises);
      const allTracks = tracks.flat();
      setTrackResults(allTracks);
      console.log(devices);
    };

    fetchData();
  }, [sdk]);

  return (
    <div>
      {results.map((playlist) => (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
          {playlist.images.length > 0 && (
            <img
              src={playlist.images[0].url}
              alt={`Playlist: ${playlist.name}`}
              style={{ width: "200px", height: "200px" }}
            />
          )}
          {trackResults
            .filter((track) => track.playlistId === playlist.id)
            .map((track) => (
              <div key={track.track.id}>
                <p>Name: {track.track.name}</p>

                {isTrack(track.track) && (
                  <p>
                    Artist:{" "}
                    {track.track.artists
                      .map((artist) => artist.name)
                      .join(", ")}
                  </p>
                )}
                <p>Duration: {formatDuration(track.track.duration_ms)}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

function formatDuration(duration_ms: number): string {
  const minutes = Math.floor(duration_ms / 60000);
  const seconds = Math.floor((duration_ms % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function isTrack(item: Track | Episode): item is Track {
  return "artists" in item;
}
