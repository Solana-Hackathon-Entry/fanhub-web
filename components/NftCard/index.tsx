import React from "react";
import style from "./style.module.css";
import Image from "next/image";

export default function ({ image, price }: any) {
  return (
    <>
      <div className={style.container}>
        <div className={style.card_image}>
          <Image
            src={image}
            alt="Picture of the author"
            objectFit="scale-down"
          />
        </div>
        <p>VXON Official</p>
        <div className={style.row_container}>
          <p>Price: </p>
          <p>{price} SOL</p>
        </div>
      </div>
    </>
  );
}
