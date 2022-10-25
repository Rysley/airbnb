import React from "react";
import Card from "./Card.js";

export default function Slider() {
  return (
    <div className="card--wrapper">
      <div className="card--container">
        <Card
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        {/* <Card
          img="card_face_2.png"
          rating="4.8"
          reviewCount={12}
          country="Belgium"
          title="What bothers Gilbert Grape"
          price={250}
        />
        <Card
          img="card_face_3.png"
          rating="4.9"
          reviewCount={99}
          country="Sweden"
          title="Jane Goodall among the Gorillas"
          price={75}
        />
        <Card
          img="card_face_1.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="card_face_2.png"
          rating="4.8"
          reviewCount={12}
          country="Belgium"
          title="What bothers Gilbert Grape"
          price={250}
        />
        <Card
          img="card_face_3.png"
          rating="4.9"
          reviewCount={99}
          country="Sweden"
          title="Jane Goodall among the Gorillas"
          price={75}
        /> */}
      </div>
    </div>
  );
}
