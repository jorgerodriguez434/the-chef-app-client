import React from "react";
import * as menu from "../menu";

export default function FatpourBurger() {
  return (
    <div>
      <h1> Fatpour Burger</h1>
      <img src={menu.fatpourBurger.image} alt="fatpour-burger" />
    </div>
  );
}
