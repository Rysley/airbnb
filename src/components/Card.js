import React from "react";

export default function Card(props = props.card) {
  //props = props.card;
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={require(`../assets/img/${props.img}`).default} alt="portrait" />
      <div className="card--stats">
        <span id="star">&#128970;</span>
        <span>{props.rating}</span>
        <span className="grey">({props.reviewCount}) &#8226; </span>
        <span className="grey">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
