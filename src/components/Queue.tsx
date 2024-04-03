// QueueProvider.tsx
"use client";

import { TrackItem } from "@spotify/web-api-ts-sdk";
import { createContext, useContext, useEffect, useState } from "react";
import sdk from "../lib/spotify-sdk/ClientInstance";

interface QueueContextType {
  queue: TrackItem[] | undefined;
  updateQueue: () => Promise<void>;
}

const QueueContext = createContext<QueueContextType>({
  queue: undefined,
  updateQueue: async () => {},
});

export const QueueProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queue, setQueue] = useState<TrackItem[]>();

  const updateQueue = async () => {
    try {
      const queuedTracks = await sdk.player.getUsersQueue();
      setQueue(queuedTracks.queue);
    } catch (error) {
      console.error("Error fetching queue:", error);
    }
  };

  useEffect(() => {
    updateQueue();
  }, []);

  return (
    <QueueContext.Provider value={{ queue, updateQueue }}>
      {children}
    </QueueContext.Provider>
  );
};

export const useQueue = () => useContext(QueueContext);
