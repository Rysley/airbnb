import React from "react";
import Photo from "../assets/img/zen.jpg";

export default function Card() {
  return (
    <div className="card">
      <img src={Photo} alt="portrait" />
      <div className="card--stats">
        <span id="star">&#128970;</span>
        <span>5.0</span>
        <span className="grey">(6) &#8226; </span>
        <span className="grey">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
