"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";

export default function PlaybackController({}) {
  const { deviceId } = usePlayer();
  const { tracks } = usePlaylist();

  const startPlayback = async () => {
    if (deviceId) {
      console.log(deviceId);

      // Transfer playback to the device
      await sdk.player.transferPlayback([deviceId], true);

      if (tracks.items.length > 0) {
        // Play the playlist
        await sdk.player.startResumePlayback(deviceId, undefined, [
          tracks.items[0].track.uri,
        ]);
      }

      return <button onClick={startPlayback}>Play</button>;
    }
  };

  return <>{startPlayback()}</>;
}
