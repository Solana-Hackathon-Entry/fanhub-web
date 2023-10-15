"use client";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Component({}: any) {
  return (
    <>
      <div className={style.container}>
        <Image src={logo} alt="Picture of the author" />
        <p className="font-medium">2023 Fanhub. All Rights Reserved.</p>
        <p>FB IG LinkedIn X/Twitter</p>
      </div>
    </>
  );
}
