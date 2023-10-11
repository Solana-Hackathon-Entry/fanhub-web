import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/placeholder.svg";
import Button from "../Button";
function MyHub() {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>My HUB</p>
        <Button title="Add Hubs" />
      </div>
      <div className={style.hubs_container}>
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
        <Image alt="carousel" src={logo} />
      </div>
    </div>
  );
}

export default MyHub;
