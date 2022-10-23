import React from "react";
import AirbnbLogo from "../assets/img/airbnb.png";
import { getDate } from "../helpers.js";

export default function Navbar() {
  return (
    <nav>
      <img src={AirbnbLogo} alt="airbnb logo" />
      <h2 className="nav--greeter">Good {getDate()}</h2>
    </nav>
  );
}
