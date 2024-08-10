import React from "react";
import "./Hero.css";
const Hero = ({ children }) => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero-title">{children}</h1>
      </div>
    </div>
  );
};

export default Hero;
