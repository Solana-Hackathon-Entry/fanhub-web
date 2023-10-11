import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import logo from "@/public/placeholder.svg";
import Button from "../Button";

function EventsCard({ title, date, place }: any) {
  return (
    <div className={style.container}>
      <Image alt="carousel" src={logo} />
      <p>{title ?? "Untitled"}</p>
      <p className={style.date}>{date ?? "APR 09, 2022"}</p>
      <p>{place ?? "New Frontier Theater "}</p>
      <Button title="Buy Ticket"></Button>
    </div>
  );
}

export default EventsCard;
