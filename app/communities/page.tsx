"use client";
import { Navbar, CommunityCard } from "@/components";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { get } from "@/services/api";

export default function Home() {
  const [communities, setcommunities] = useState([]);

  useEffect(() => {
    const getCommunities = async () => {
      const { data } = await get("communities");
      setcommunities(data.data);
    };

    getCommunities();
  }, []);
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.community_contanier}>
          {communities.map((e: any) => (
            <CommunityCard title={e.name} image={e.image} />
          ))}
        </div>
      </div>
    </>
  );
}
