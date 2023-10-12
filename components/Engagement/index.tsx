import React from "react";
import style from "./style.module.css";
import icon from "@/public/engage-icon.svg";
import EngagementCard from "../EngagementCard";

export default function ({}: any) {
  const cards: any = [
    {
      title: "Connect your wallet",
      description:
        "Use Trust Wallet, Metamask or any wallet to connect to the app.",
    },
    {
      title: "Create your NFT Item",
      description: "Upload your NFTs and set a title, description and price.",
    },
    {
      title: "List them for sale",
      description: "Earn for all your NFTs that you sell on our marketplace.",
    },
  ];

  return (
    <>
      <div className={style.container}>
        <p>Start engaging with your idols</p>
        <div className={style.cards_container}>
          {cards.map((e: any) => (
            <>
              <EngagementCard
                icon={icon}
                title={e.title}
                description={e.description}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
