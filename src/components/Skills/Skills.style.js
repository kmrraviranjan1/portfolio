import styled from "styled-components";
export const TechStackContainer = styled.div`
  max-width:1200px;
    margin:auto;
`;
export const TechStackWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 5rem);
  /* background-image: url("assets/svg/react.svg");
  background-size: contain;
  background-position:center;
  background-repeat: no-repeat; */
`;

export const Stacks = styled.div`
  /* 
 */
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  display: grid;
  text-align: center;
  grid-gap: 2rem;
  padding:2rem;
  grid-template-columns: 1fr;

  @media (min-width:480px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width:768px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width:1024px){
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.div`
  height: 4rem;
  font-size:2rem;
  text-align: center;
  padding-top:1rem;
`;
export const Card = styled.div`
margin:2rem;
box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

`;

export const Skills = styled.div``;
export const SkillCard = styled.div`
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;`;
export const IconCont = styled.div`
  font-size: 3rem;
  @media (min-width:768px){
    font-size: 5rem;
  }
`;

export const Name = styled.h3``;
export const Tools = styled.div``;
export const ToolContainter = styled.div``;
