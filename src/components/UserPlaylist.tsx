"use client";

import { usePlayer } from "@/Providers/PlayerProvider";
import { usePlaylist } from "@/Providers/PlaylistProvider";

const UserPlaylist: React.FC = ({}) => {
  const { tracks } = usePlaylist();
  const { handleTrackClick } = usePlayer();

  return (
    <div className="flex">
      {tracks.items.map((item) => (
        <div
          key={item.track.name}
          className="relative w-64 h-full flex flex-col"
        >
          <img
            src={item.track.album.images[0].url}
            alt={item.track.name}
            width="w-64"
            height={300}
            className="rounded"
          />

          <div className="flex-1 flex items-center justify-between pt-5">
            <div
              className="hover:cursor-pointer"
              onClick={() => handleTrackClick(item)}
            >
              <h3 className="text-lg font-bold truncate">{item.track.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserPlaylist;
