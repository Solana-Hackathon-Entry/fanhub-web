import React from "react";
import style from "./style.module.css";

function Button({ onClick, type, children, outlined }: any) {
  return (
    <>
      <button
        className={outlined ? style.outlined : style.button}
        onClick={onClick}
        type={type ?? "button"}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
