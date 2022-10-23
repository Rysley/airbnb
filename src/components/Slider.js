import React from "react";
import Card from "./Card.js";

export default function Slider() {
  return (
    <div className="card--wrapper">
      <div className="card--container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
