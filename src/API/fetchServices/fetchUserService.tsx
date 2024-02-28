import { getUserAlbum, getUserData, getUserPlaylists } from "../userApi";

interface argsProps {
  type: "playlist" | "album" | "user";
  userId: string;
}

const fetchUserData = async (args: Partial<argsProps>) => {
  const { type, userId } = args;

  switch (type) {
    case "playlist": {
      if (!userId) return;
      const data = await getUserAlbum();
      return data?.items;
    }
    case "album": {
      const data = await getUserData();
      return data?.items;
    }
    case "user": {
      const data = await getUserPlaylists();
      return data?.items;
    }
  }
};

export default fetchUserData;
