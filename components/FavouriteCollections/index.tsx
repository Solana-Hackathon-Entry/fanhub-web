import React from "react";
import style from "./style.module.css";
import Button from "../Button";
import CollectionCard from "../CollectionCard";

function FavouriteCollections() {
  const mock = new Array(10).fill("Black Purple");
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Choose your Favorite Collection!</p>
        <Button title="View All" />
      </div>
      <div className={style.collections_container}>
        {mock.map((e: string) => (
          <CollectionCard key={e} />
        ))}
      </div>
    </div>
  );
}

export default FavouriteCollections;
