import React from "react";
import style from "./style.module.css";
import Button from "../Button";

function SideCarousel({ title, children }: any) {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>{title ?? "Untitled"}</p>
        <Button title="View All" />
      </div>
      <div className={style.items_container}>{children}</div>
    </div>
  );
}

export default SideCarousel;
