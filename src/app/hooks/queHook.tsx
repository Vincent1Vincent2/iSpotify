/* "use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { useEffect, useState } from "react";

// Custom hook to queue remaining songs after the selected track
export const useQueueRemainingTracks = (
  selectedTrackUri: string | undefined,
  playlist: string[]
) => {
  const [remainingUris, setRemainingUris] = useState<string[]>([]);
  const { deviceId } = usePlayer();

  useEffect(() => {
    if (selectedTrackUri && playlist.length > 0) {
      const selectedTrackIndex = playlist.indexOf(selectedTrackUri);
      if (selectedTrackIndex !== -1) {
        const remainingTracks = playlist.slice(selectedTrackIndex + 1);
        setRemainingUris(remainingTracks);
      }
    }
  }, [selectedTrackUri, playlist]);

  const queueRemainingTracks = async () => {
    if (deviceId && remainingUris.length > 0) {
      for (const uri of remainingUris) {
        await sdk.player.addItemToPlaybackQueue(
          decodeURIComponent(uri),
          deviceId
        );
      }
    }
  };

  return queueRemainingTracks;
};
 */
