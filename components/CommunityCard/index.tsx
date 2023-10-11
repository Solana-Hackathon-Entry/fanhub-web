import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import Button from "../Button";

function CommunityCard({ title, image }: any) {
  return (
    <div className={style.container}>
      <Image alt="carousel" src={image} width={2250} height={2250} />
      <p>{title ?? "Untitled"}</p>
      <Button title="Join Now"></Button>
    </div>
  );
}

export default CommunityCard;
