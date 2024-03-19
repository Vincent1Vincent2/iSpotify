"use client";

import { withNextAuthStrategy } from "@/lib/spotify-sdk/ClientInstance";
import { useEffect, useState } from "react";
import { usePlayer } from "./PlayerProvider";

interface PlayerProviderProps {
  children: React.ReactNode;
}

export const PlaybackProvider: React.FC<PlayerProviderProps> = ({
  children,
}) => {
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const { setDeviceId } = usePlayer();

  useEffect(() => {
    const initializePlayer = async () => {
      const spotifyApi = withNextAuthStrategy();

      const accessTokenResponse = await spotifyApi.getAccessToken();
      if (!accessTokenResponse) {
        console.error("Access token is null.");
        return;
      }

      const access_token: string | undefined = accessTokenResponse.access_token;

      window.onSpotifyWebPlaybackSDKReady = () => {
        const newPlayer = new Spotify.Player({
          name: "iSpotify",

          getOAuthToken: (cb) => {
            cb(access_token);
          },
          volume: 0.5,
        });

        newPlayer.addListener("ready", ({ device_id }) => {
          console.log("Device ID", device_id);
          setDeviceId(device_id);
        });

        newPlayer.connect().then((success) => {
          if (success) {
            console.log("Connected to Spotify");
            setPlayer(newPlayer);
          }
        });
      };

      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (player) {
          player.connect();
        }
      };
    };

    initializePlayer();
  }, []);

  return <>{children}</>;
};
