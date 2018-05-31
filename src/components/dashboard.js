import React from "react";
import FatpourBurger from "./fatpour-burger";
import BadgerBurger from "./badger-burger";
import BlackhawkBurger from "./blackhawk-burger";

export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <h1> This is the dashboard! </h1>
        <h2> Lets get started! </h2>
        <h3> Menu </h3>
        <p> Click on an item to see it </p>
        <FatpourBurger />
        <BadgerBurger />
        <BlackhawkBurger />
      </div>
    );
  }
}
