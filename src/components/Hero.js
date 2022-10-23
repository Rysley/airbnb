import React from "react";
import door from "../assets/img/door.jpg";
import door2 from "../assets/img/door2.jpg";
import map from "../assets/img/map.jpg";
import zen from "../assets/img/zen.jpg";
import pool from "../assets/img/pool.jpg";
import road from "../assets/img/road.jpg";
import lane from "../assets/img/lane.jpg";
import hut from "../assets/img/hut.jpg";

export default function Hero() {
  return (
    <div className="hero--wrapper">
      <div className="hero--container">
        <div className="hero--column">
          <div className="hero--tile">
            <img src={road} alt="road" />
          </div>
        </div>
        <div className="hero--column">
          <div className="hero--tile">
            <img src={door} alt="door" />
          </div>
          <div className="hero--tile">
            <img src={pool} alt="pool" />
          </div>
        </div>
        <div className="hero--column">
          <div className="hero--tile">
            <img src={zen} alt="meditate" />
          </div>
          <div className="hero--tile">
            <img src={lane} alt="lane" />
          </div>
        </div>
        <div className="hero--column">
          <div className="hero--tile">
            <img src={door2} alt="door" />
          </div>
          <div className="hero--tile">
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="hero--column">
          <div className="hero--tile">
            <img src={hut} alt="hut" />
          </div>
        </div>
      </div>
    </div>
  );
}
