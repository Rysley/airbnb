import React from "react";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import HeroTitle from "./components/HeroTitle";
import Navbar from "./components/Navbar";

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
