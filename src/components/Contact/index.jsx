import React from "react";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail, SiHashnode, SiHackerrank } from "react-icons/si";

import {
  ContactContainer,
  ContactWrapper,
  Icon,
  CIcon,
  Title,
  CTitle,
  LinkContainer,
  CLinkContainer,
  ContactAt,
  FolllowAt,
  Heading,
  FolllowContainer,
} from "./Contact.style";
const Contact = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <ContactAt>
          <CLinkContainer>
            <CIcon>
              <FaPhoneAlt color="green" title="8224841856" />
            </CIcon>
            <CTitle href="tel:8224841856">8224841856</CTitle>
          </CLinkContainer>
          <CLinkContainer>
            <CIcon>
              <SiGmail color="red" title="kmrraviranjan1@gmail.com" />
            </CIcon>
            <CTitle href="mailto: kmrraviranjan1@gmail.com">
              Kmrraviranjan1@gmail.com
            </CTitle>
          </CLinkContainer>
        </ContactAt>
        <FolllowContainer>
          <Heading>Connect with me at</Heading>
          <FolllowAt>
            <LinkContainer>
              <Icon>
                <FaLinkedin color="blue" />
              </Icon>
              <Title
                href="https://www.linkedin.com/in/kmrraviranjan1/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </Title>
            </LinkContainer>
            <LinkContainer>
              <Icon>
                <FaGithub color="black" />
              </Icon>
              <Title
                href="https://github.com/kmrraviranjan1"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </Title>
            </LinkContainer>
            <LinkContainer>
              <Icon>
                <SiHashnode color="blue" />
              </Icon>
              <Title
                href="https://raviranjankumar.hashnode.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Hashnode
              </Title>
            </LinkContainer>
            <LinkContainer>
              <Icon>
                <SiHackerrank color="green" />
              </Icon>
              <Title
                href="https://www.hackerrank.com/kmrraviranjan1"
                target="_blank"
                rel="noreferrer"
              >
                HackerRank
              </Title>
            </LinkContainer>
          </FolllowAt>
        </FolllowContainer>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
