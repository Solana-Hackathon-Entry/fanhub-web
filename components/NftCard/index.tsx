"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Image from "next/image";
import axios from "axios";
import logo from "@/public/placeholder.svg";

export default function Component({ metadata }: any) {
  const [image, setimage] = useState(logo);
  const [title, settitle] = useState("UNTITLED");

  useEffect(() => {
    axios.get(metadata.uri).then((response: any) => {
      setimage(response.data.image);
      settitle(response.data.name);
    });
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.card_image}>
          <Image
            src={image}
            alt="Picture of the author"
            height={301}
            width={285}
            objectFit="scale-down"
          />
        </div>
        <p>{title}</p>
        <div className={style.row_container}>
          <p>Price: </p>
          <p>100 SOL</p>
        </div>
      </div>
    </>
  );
}
