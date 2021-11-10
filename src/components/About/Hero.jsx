import React from "react";
import Type from "./Type";
import {
  Container,
  Main,
  Follow,
  Wave,
  LinkContainer,
  Icon,
} from "./About.style";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <Container>
      <Main>
        <h1>
          Hi There!
          <Wave role="img" aria-labelledby="wave">
            👋🏻
          </Wave>
        </h1>

        <h1 className="heading-name">
          I'M
          <strong className="main-name"> RAVI RANJAN KUMAR</strong>
        </h1>
        <Type />
        <Follow>
          <LinkContainer>
            <Icon
              href="https://www.linkedin.com/in/kmrraviranjan1/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin color="blue" />
            </Icon>
          </LinkContainer>
          <LinkContainer>
            <Icon
              href="https://github.com/kmrraviranjan1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub color="black" />
            </Icon>
          </LinkContainer>
        </Follow>
      </Main>
      <div>
        <img src="assets/ravi.png" alt="" />
      </div>
    </Container>
  );
};

export default Hero;
