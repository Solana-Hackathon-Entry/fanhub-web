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
        <p className="text-lg font-semibold text-white-300">{title}</p>
        <p className="text-lg font-normal text-secondary-50 px-12">
          {description}
        </p>
      </div>
    </>
  );
}
