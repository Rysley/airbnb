import React from "react";
import Card from "./Card.js";
import Cards from "../assets/img/Cards.js";

export default function Slider() {
  return (
    <div className="card--wrapper">
      <div className="card--container">
        {Cards.map((card, i) => {
          return (
            <Card
              key={i}
              //card={card}
               {...card}
            />
          );
        })}
      </div>
    </div>
  );
}
