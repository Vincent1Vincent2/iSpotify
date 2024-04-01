/* "use client";
import { usePlayer } from "@/Providers/PlayerProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { retryWithBackoff } from "@/utils/Retry";
import {
  Episode,
  PlaylistedTrack,
  SimplifiedPlaylist,
  SpotifyApi,
  Track,
} from "@spotify/web-api-ts-sdk";
import { useEffect, useState } from "react";

//PlaylistedTrack with a playlistId
export interface AugmentedPlaylistedTrack extends PlaylistedTrack {
  playlistId: string;
}

export default function LoadedPlaylist({}: { sdk: SpotifyApi }) {
  const [results, setResults] = useState<SimplifiedPlaylist[]>([]);
  const [trackResults, setTrackResults] = useState<AugmentedPlaylistedTrack[]>(
    []
  );
  const [selectedTrack, setSelectedTrack] = useState<string>();
  const [playlist, setPlaylist] = useState<string[]>([]);

  const { deviceId } = usePlayer();

  useEffect(() => {
    const fetchData = async () => {
      const response = await sdk.currentUser.playlists.playlists(1, 0);
      setResults(response.items || []);
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
      const uris: string[] = allTracks.map((track) => track.track.uri);
      setPlaylist(uris);
    };

    fetchData();
  }, [sdk, playlist, results]);

  const handleTrackClick = async (track: AugmentedPlaylistedTrack) => {
    setSelectedTrack(track.track.uri);
    const uris: string[] = trackResults.map((track) => track.track.uri);
    setPlaylist(uris);

    if (deviceId) {
      try {
        // Queue the remaining tracks after the selected track
        for (let i = uris.indexOf(track.track.uri) + 1; i < uris.length; i++) {
          await retryWithBackoff(
            () => sdk.player.addItemToPlaybackQueue(deviceId, uris[i]),
            3,
            1000
          );
        }

        // Start playing the selected track
        await retryWithBackoff(
          () =>
            sdk.player.startResumePlayback(deviceId, undefined, [
              track.track.uri,
            ]),
          3,
          1000
        );
      } catch (error) {
        console.error("Error queuing and playing tracks:", error);
      }
    }
  };

  useEffect(() => {
    if (selectedTrack && deviceId) {
      sdk.player.startResumePlayback(deviceId, undefined, [selectedTrack]);
    }
  }, [selectedTrack, deviceId]);

  return (
    <div>
      {results.map((playlist) => (
        <div key={playlist.name}>
          <p>{playlist.name}</p>
          {playlist.images.length > 0 && (
            <div>
              <img
                src={playlist.images[0].url}
                alt={`Playlist: ${playlist.name}`}
                style={{ width: "200px", height: "200px" }}
              />
            </div>
          )}

          {trackResults
            .filter((track) => track.playlistId === playlist.id)
            .map((track) => (
              <div key={track.track.id}>
                <p
                  onClick={() => {
                    handleTrackClick(track);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Name: {track.track.name}
                </p>
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
 */
