import React from "react";
import * as menu from "../menu";

export default function BlackhawkBurger() {
  return (
    <div>
      <h1> Blackhawk Burger</h1>
      <img src={menu.blackHawkBurger.image} alt="blackhawk-burger" />
    </div>
  );
}
