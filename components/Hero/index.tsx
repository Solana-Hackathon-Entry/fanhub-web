import React from "react";
import style from "./style.module.css";
import logo from "@/public/hero-image.png";
import Image from "next/image";

export default function Component({}: any) {
  return (
    <>
      <div className={style.container}>
        <div>
          <h3 className="font-extrabold">The Ultimate Fan </h3>
          <h3 className="font-extrabold">Destination.</h3>
          <p className="text-lg pr-20">
            Fanhub is a fan engagement platform providing an interactive
            community that actively supports entertainers!
          </p>
        </div>
        <Image src={logo} alt="Picture of the author" />
      </div>
    </>
  );
}
