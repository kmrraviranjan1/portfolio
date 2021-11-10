import React from "react";
import Type from "./Type";
import { Wave } from "./About.style";
const Hero = () => {
  return (
    <div>
      <h1 style={{ paddingBottom: 15 }} className="heading">
        Hi There!{" "}
        <Wave role="img" aria-labelledby="wave">
          👋🏻
        </Wave>
      </h1>

      <h1 className="heading-name">
        I'M
        <strong className="main-name"> RAVI RANJAN KUMAR</strong>
      </h1>
      <Type />
      <img src="assets/ravi.png" alt="" />
    </div>
  );
};

export default Hero;
