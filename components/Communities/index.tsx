import React from "react";
import style from "./style.module.css";
import Button from "../Button";
import CommunityCard from "../CommunityCard";

function Communities() {
  const mock = new Array(10).fill("Black Purple");
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p>Meet your Community!</p>
        <Button title="View All" />
      </div>
      <div className={style.hubs_container}>
        {mock.map((e: string) => (
          <CommunityCard title={e} />
        ))}
      </div>
    </div>
  );
}

export default Communities;
