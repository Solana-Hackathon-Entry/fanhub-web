import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import carousel_image from "@/public/carousel_image.png";

function Carousel() {
  return (
    <div className={style.container}>
      <div
        style={{
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "65vh",
          maxHeight: "65vh",
          position: "relative",
        }}
      >
        <Image alt="carousel" src={carousel_image} fill />
      </div>
    </div>
  );
}

export default Carousel;
