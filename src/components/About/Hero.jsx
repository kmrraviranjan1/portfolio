import React from "react";
import Type from "./Type";
import {
  Container,
  Wrapper,
  Main,
  Follow,
  Wave,
  LinkContainer,
  Icon,
  Name,
  Writer,
  Greet
} from "./About.style";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <Wrapper>

   
    <Container>
      <Main>
        <Greet>
          Hi There!
          <Wave role="img" aria-labelledby="wave">
            👋🏻
          </Wave>
        </Greet>

        <Name className="heading-name">
          I'M
          <strong className="main-name"> RAVI RANJAN KUMAR</strong>
        </Name>
        <Writer>
          <Type />
        </Writer>
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
    </Container>
    </Wrapper>
  );
};

export default Hero;
