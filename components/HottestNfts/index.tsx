import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/placeholder.svg";
import Button from "../Button";

export default function Component({}: any) {
  return (
    <>
      <div className={style.container}>
        <div className={style.header_container}>
          <p>Featured Communities</p>
          <Button>View All</Button>
        </div>
        <div className={style.cards_container}>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <Image
                src={logo}
                alt="Picture of the author"
                objectFit="scale-down"
              />
            </div>
            <p>BLVCK PURPLE</p>
            <p>Price: 10 SOL</p>
          </div>
        </div>
      </div>
    </>
  );
}
