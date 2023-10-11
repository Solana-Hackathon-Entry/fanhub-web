"use client";
import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";
import home from "@/public/home.png";
import store from "@/public/store.png";
import user from "@/public/user.png";
import users from "@/public/users.png";
import { useRouter } from "next/navigation";
import { Button } from "..";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={style.toolbar}>
        <Image
          src={logo}
          alt="Picture of the author"
          onClick={() => router.push("/")}
        />

        <div className={style.links_container}>
          <Image
            src={home}
            alt="Picture of the author"
            onClick={() => router.push("/")}
          />
          <Image
            src={store}
            alt="Picture of the author"
            onClick={() => router.push("/communities")}
          />
          <Image src={user} alt="Picture of the author" />
          <Image src={users} alt="Picture of the author" />
          <Button title="Login" onClick={() => router.push("/login")} />
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}

export default Navbar;
