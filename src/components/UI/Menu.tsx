import { useContext, useEffect, useMemo, useState } from "react";
import {
  DataItem,
  NavCategorySelector,
} from "../../API/dataTypes/spotifyCategoryData";
import { UserData } from "../../API/dataTypes/spotifyUserData";
import fetchUserData from "../../API/fetchServices/fetchUserService";
import { AuthContext } from "../../auth/authCodeLogin";
import MenuCategory from "./MenuCategory";

type NavCategory = "playlist" | "album" | "user";

function MenuNav() {
  const [userData] = useState<UserData>({});
  const { signInAuth } = useContext(AuthContext);
  const [category, setCategory] = useState<NavCategory>("playlist");
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData({
        type: category,
        userId: userData?.id,
      });
      setData(data);
    };
    fetchData();
  }, [category, userData]);

  const categorySelector: NavCategorySelector[] = useMemo(
    () => [
      {
        type: "playlist",
        title: "Playlist",
        id: "00003",
        active: category === "playlist",
      },
      {
        type: "album",
        title: "Album",
        id: "00004",
        active: category === "album",
      },
      {
        type: "user",
        title: "User",
        id: "00005",
        active: category === "user",
      },
    ],
    [category]
  );

  const categorySelected = useMemo(
    () => categorySelector.find((categorySelected) => categorySelected.active),
    [category]
  );

  const categoryAlert = (type: NavCategory): string => {
    switch (type) {
      case "playlist":
        return "Sign in for your playlists";
      case "album":
        return " Sign in for saved albums";
      case "user":
        return "Sign in for your profile";
    }
  };

  const handleSelection = (type: "playlist" | "album" | "user"): void => {
    setCategory(type);
  };

  return (
    <div>
      <div>
        {categorySelector.map((item, index) => (
          <button onClick={() => handleSelection(item.type)} key={index}>
            {item.title}
          </button>
        ))}
      </div>
      <div>
        {data &&
          data.map((item, index: number) => (
            <MenuCategory
              key={item?.id || index}
              id={item?.id || item?.album?.id}
              author={item?.owner && item?.owner?.display_name}
              type={categorySelected?.type}
              name={item?.name || item?.album?.name}
              thumbnail={
                item?.images?.[item?.images?.length - 1]?.url ??
                item?.album?.images?.[item?.album?.images?.length - 1 ?? 0]?.url
              }
            />
          ))}
      </div>
      <div>
        <button onClick={signInAuth}>{categoryAlert(category)}</button>
      </div>
    </div>
  );
}
export default MenuNav;
