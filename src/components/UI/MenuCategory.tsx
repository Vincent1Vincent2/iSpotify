import { FC } from "react";
import { Link } from "react-router-dom";
import { MenuItemCategory } from "../../API/dataTypes/spotifyCategoryData";
import { ImageLoad } from "../UI/Image/Image";

const MenuCategory: FC<MenuItemCategory> = (props) => {
  const { type, thumbnail, name, author, id } = props;

  const newType = (() => {
    if (type === "playlist") return author;
    if (type === "album") return "Album";
    if (type === "user") return "artist";
  })();

  return (
    <div>
      <Link to={`/${type}/${id}`}>
        <div>
          <div>
            {thumbnail ? <ImageLoad src={thumbnail} alt={name} /> : <div></div>}
          </div>
          <div>
            <h4>{name}</h4>
            <span>{newType}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
