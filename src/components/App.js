import React from "react";
import Slider from "./Slider";
import Hero from "./Hero";
import HeroTitle from "./HeroTitle";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeroTitle />
      <Slider />
    </div>
  );
}
