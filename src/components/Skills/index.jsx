import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiSlack,
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiMaterialui,
  SiStyledcomponents,
} from "react-icons/si";

import { FaNode, FaGit, FaNodeJs } from "react-icons/fa";
import {
  TechStackContainer,
  Title,
  Stacks,
  Card,
  SkillCard,
  IconCont,
  Name,
  TechStackWrapper,
} from "./Skills.style";
const Skills = () => {
  return (
    <TechStackContainer>
      <TechStackWrapper>
        <Card>
          <Title>Front-End</Title>
          <Stacks>
            <SkillCard>
              <IconCont>
                <SiHtml5 color="red" />
              </IconCont>
              <Name>HTML</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiCss3 color="blue" />
              </IconCont>
              <Name>CSS </Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiJavascript color="gold" />
              </IconCont>
              <Name> Javascript </Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiReact color="blue" />
              </IconCont>
              <Name>React </Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiRedux color="blue" />
              </IconCont>
              <Name>Redux </Name>
            </SkillCard>
          </Stacks>
        </Card>

        <Card>
          <Title>Back-End</Title>
          <Stacks>
            <SkillCard>
              <IconCont>
                <FaNode color="green" />
              </IconCont>
              <Name>Node Js </Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <FaNodeJs color="green" />
              </IconCont>
              <Name>Express Js </Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiMongodb color="green" />
              </IconCont>
              <Name> MongoDb </Name>
            </SkillCard>
            {/* <SkillCard>
            <IconCont></IconCont>
            <Name> </Name>
          </SkillCard> */}
          </Stacks>
        </Card>

        <Card>
          <Title>Tools</Title>
          <Stacks>
            <SkillCard>
              <IconCont>
                <SiVisualstudiocode color="blue" />
              </IconCont>
              <Name>VS Code</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiPostman />
              </IconCont>
              <Name>Postman</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiMaterialui />
              </IconCont>
              <Name>Material UI</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiStyledcomponents />
              </IconCont>
              <Name>Styled components</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <FaGit />
              </IconCont>
              <Name>Git</Name>
            </SkillCard>
            <SkillCard>
              <IconCont>
                <SiSlack />
              </IconCont>
              <Name>Slack</Name>
            </SkillCard>
          </Stacks>
        </Card>
      </TechStackWrapper>
    </TechStackContainer>
  );
};

export default Skills;
