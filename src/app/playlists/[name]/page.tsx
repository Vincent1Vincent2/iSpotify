import SelectedPlaylist from "./selectedPlaylist";

type PageProps = { params: { name: string } };

export default function PlaylistPage({ params }: PageProps) {
  params = { name: "name" };

  return <SelectedPlaylist params={params} />;
}
