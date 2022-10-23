import React from "react";
import cup from "../assets/img/cup.jpg";
import door from "../assets/img/door.jpg";
import door2 from "../assets/img/door2.jpg";
import map from "../assets/img/map.jpg";
import walk from "../assets/img/walk.jpg";
import zen from "../assets/img/zen.jpg";
import pool from "../assets/img/pool.jpg";

export default function Hero() {
  return (
    <div className="hero--wrapper">
      <div className="hero--container">
        <div className="hero--column">
          <img src={cup} alt="cup" />
        </div>
        <div className="hero--column">
          <img src={door} alt="door" />
          <img src={walk} alt="door" />
        </div>
        <div className="hero--column">
          <img src={zen} alt="door" />
          <img src={pool} alt="door" />
        </div>
        <div className="hero--column">
          <img src={door2} alt="door" />
          <img src={map} alt="door" />
        </div>
        <div className="hero--column">
            
        </div>
      </div>
    </div>
  );
}
