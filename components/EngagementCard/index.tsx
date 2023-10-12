import React from "react";
import style from "./style.module.css";
import Image from "next/image";

export default function ({ icon, title, description }: any) {
  return (
    <>
      <div className={style.card}>
        <div className={style.icon}>
          <Image
            src={icon}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
}
