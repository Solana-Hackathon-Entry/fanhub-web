import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/placeholder.svg";
import Button from "../Button";
export default function ({}: any) {
  return (
    <>
      <div className={style.container}>
        <div className={style.header_container}>
          <p>Collect, Bid, Create – Your NFT Odyssey Begins!</p>
          <Button outlined light>
            View All
          </Button>
        </div>
        <div className={style.cards_container}>
          <div className={style.card_image}>
            <Image
              src={logo}
              alt="Picture of the author"
              objectFit="scale-down"
            />
          </div>
          <div className={style.card_image}>
            <Image
              src={logo}
              alt="Picture of the author"
              objectFit="scale-down"
            />
          </div>
          <div className={style.card_image}>
            <Image
              src={logo}
              alt="Picture of the author"
              objectFit="scale-down"
            />
          </div>
          <div className={style.card_image}>
            <Image
              src={logo}
              alt="Picture of the author"
              objectFit="scale-down"
            />
          </div>
        </div>
      </div>
    </>
  );
}
