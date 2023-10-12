import React from "react";
import style from "./style.module.css";
import logo from "@/public/placeholder.svg";
import NftCard from "@/components/NftCard";
function DetailsSegment({}: any) {
  return (
    <>
      <div className={style.container}>
        <div className={style.header_container}>
          <p>
            Embark on a Journey with the Swiftest Growing Collection of 2000+
            NFTs
          </p>
          <p>
            We're a bustling marketplace committed to linking extraordinary
            artists with their dedicated fanbase and discerning token
            enthusiasts!
          </p>
        </div>
        <div className={style.cards_container}>
          <div className={style.card_container}>
            <p>Join our community</p>
            <p>
              We are a huge marketplace dedicated to connecting great artists of
              all.
            </p>
            <p>Read More</p>
          </div>
          <div className={style.card_container}>
            <p>Learn more</p>
            <p>
              We are a huge marketplace dedicated to connecting great artists of
              all.
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsSegment;
