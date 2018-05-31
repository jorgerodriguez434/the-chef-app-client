import React from "react";
import * as menu from "../menu";

export default function BadgerBurger() {
  return (
    <div>
      <h1> Badger Burger</h1>
      <img src={menu.badgerBurger.image} alt="badger-burger" />
    </div>
  );
}
