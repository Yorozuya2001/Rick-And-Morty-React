import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  console.log(myFavorites);
  return (
    <div>
      {myFavorites.map((fav) => {
        return <div>{fav.name}</div>;
      })}
    </div>
  );
};

export default Favorites;
