import React from "react";
import style from "./style.module.css";
function Button({ title, onClick }: any) {
  return (
    <>
      <button className={style.button} onClick={onClick}>
        {title ?? "Untitled"}
      </button>
    </>
  );
}

export default Button;
