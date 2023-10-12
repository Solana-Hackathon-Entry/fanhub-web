import React from "react";
import style from "./style.module.css";
import logo from "@/public/placeholder.svg";
import NftCard from "@/components/NftCard";
export default function ({}: any) {
  return (
    <>
      <div className={style.container}>
        <div>
          <p>Seize the Moment, </p>
          <p>Own the Masterpiece!</p>
        </div>
        <div className={style.cards_container}>
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
          <NftCard image={logo} price={100} />
        </div>
      </div>
    </>
  );
}
