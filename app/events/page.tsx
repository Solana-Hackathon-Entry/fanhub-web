"use client";

import { Navbar, EventsCard } from "@/components";
import style from "./style.module.css";

export default function Home() {
  const mock = Array.from({ length: 96 }, (_, i) => i + 1);
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <p>Events</p>

        <input type="text" />
        <div className={style.community_contanier}>
          {mock.map((e: number) => (
            <EventsCard
              key={e}
              title="PPOP CON 2022: The Ultimate P-Pop Fan Gathering"
              date="APR 09, 2022"
              place="New Frontier Theater "
            />
          ))}
        </div>
      </div>
    </>
  );
}
