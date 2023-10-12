import React from "react";
import style from "./style.module.css";
import logo from "@/public/hero-image.png";
import Image from "next/image";

export default function ({}: any) {
  return (
    <>
      <div className={style.container}>
        <div>
          <p>The Ultimate Fan Destination.</p>
          <p>
            Fanhub is a fan engagement platform providing an interactive
            community that actively supports entertainers!
          </p>
        </div>
        <Image src={logo} alt="Picture of the author" />
      </div>
    </>
  );
}
