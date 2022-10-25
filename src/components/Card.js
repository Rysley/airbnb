import React from "react";
import ImgCards from "../assets/img/ImgCards";
//import Photo from "../assets/img/card_face_2.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={ImgCards.card_1} alt="portrait" />
      <div className="card--stats">
        <span id="star">&#128970;</span>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &#8226; </span>
        <span className="grey">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

//      <img src={`../assets/img/${props.img}`} alt="portrait" />
