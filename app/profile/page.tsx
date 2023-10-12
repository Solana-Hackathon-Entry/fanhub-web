"use client";
import { Navbar, CommunityCard } from "@/components";
import style from "./style.module.css";
import { useState, useEffect } from "react";
import { get } from "../../services/api";
import Image from "next/image";
import logo from "@/public/placeholder.svg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.sidenav_container}>
          <div className={style.sidenav_header}>
            <div className="">
              <p>Denver Dalman</p>
              <p>@denver_dalman</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
