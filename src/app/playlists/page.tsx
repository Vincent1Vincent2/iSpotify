import sdk from "@/lib/spotify-sdk/ClientInstance";
import Playlists from "./playlists";

export default function AllPlaylists() {
  return (
    <div className="selectedPlaylist">
      <Playlists sdk={sdk} />
    </div>
  );
}
