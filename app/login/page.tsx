"use client";
import { Navbar, Button } from "@/components";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useAuthStore } from "@/states";
import { useState } from "react";

export default function Login() {
  const { authenticate } = useAuthStore() as any;

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: any) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    authenticate(state);
  }

  return (
    <>
      <Navbar />
      <div className={style.container}>
        <form className={style.login_container} onSubmit={handleSubmit}>
          <Image alt="logo" src={logo} />
          <div className={style.form_input}>
            <p>Username</p>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
              value={state.email}
              required
            />
          </div>
          <div className={style.form_input}>
            <p>Password</p>
            <input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={state.password}
              required
            />
          </div>
          <Button title="Login" type="submit" />
        </form>
      </div>
    </>
  );
}
