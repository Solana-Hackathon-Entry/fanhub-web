import React from "react";
import style from "./style.module.css";

function DetailsSegment({}: any) {
  const cards: any = [
    {
      title: "Join our community",
      description:
        "We are a huge marketplace dedicated to connecting great artists ofall.",
    },
    {
      title: "Learn more",
      description:
        "We are a huge marketplace dedicated to connecting great artists of all.",
    },
  ];
  return (
    <>
      <div className={style.container}>
        <div className={style.header_container}>
          <div>
            <h6 className="font-bold">
              Embark on a Journey with the Swiftest Growing Collection
            </h6>
            <h6 className="font-bold">of 2000+ NFTs</h6>
          </div>
          <div>
            <h6 className="font-normal">
              We're a bustling marketplace committed to linking
            </h6>
            <h6 className="font-normal">
              extraordinary artists with their dedicated fanbase and
            </h6>
            <h6 className="font-normal">discerning token enthusiasts!</h6>
          </div>
        </div>
        <div className={style.cards_container}>
          {cards.map((e: any) => (
            <div className={style.card_container}>
              <h6 className="font-bold">{e.title}</h6>
              <p>{e.description}</p>
              <p className="font-bold">Read More</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailsSegment;
