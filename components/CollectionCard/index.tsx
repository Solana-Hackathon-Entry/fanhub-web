import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/placeholder.svg";

function CollectionCard() {
  return (
    <div className={style.container}>
      <Image alt="carousel" src={logo} />
    </div>
  );
}

export default CollectionCard;
