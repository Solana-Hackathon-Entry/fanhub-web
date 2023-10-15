"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";
import NftCard from "@/components/NftCard";
import { useNftStore } from "@/states";

export default function Component({}: any) {
  const { data, get } = useNftStore() as any;

  useEffect(() => {
    get();
  });

  return (
    <>
      <div className={style.container}>
        <div>
          <h3 className="font-bold">Seize the Moment, </h3>
          <h3 className="font-bold">Own the Masterpiece!</h3>
        </div>
        <div className={style.cards_container}>
          {data.map((e: any) => (
            <NftCard key={e.address} metadata={e} />
          ))}
        </div>
      </div>
    </>
  );
}
