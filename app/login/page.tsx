"use client";
import { Navbar, Button } from "@/app/components";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";
export default function Login() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.login_container}>
          <Image alt="logo" src={logo} />
          <div className={style.form_input}>
            <p>Username</p>
            <input type="text" />
          </div>
          <div className={style.form_input}>
            <p>Password</p>
            <input type="password" />
          </div>
          <Button title="Login" />
        </div>
      </div>
    </>
  );
}
