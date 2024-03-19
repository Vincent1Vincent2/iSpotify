"use client";

import React, { createContext, useContext, useState } from "react";

interface PlayerContextType {
  deviceId: string | null;
  setDeviceId: (deviceId: string | null) => void;
}

interface PlayerProviderProps {
  children: React.ReactNode;
}

const PlayerContext = createContext<PlayerContextType>({
  deviceId: null,
  setDeviceId: () => {},
});

export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  return (
    <PlayerContext.Provider value={{ deviceId, setDeviceId }}>
      {children}
    </PlayerContext.Provider>
  );
};
