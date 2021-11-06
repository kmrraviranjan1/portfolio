import styled from "styled-components";
export const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;
export const PageHeading = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
export const ProjectWrapper = styled.div`
    display:grid;
  grid-template-columns:1fr;
  /* grid-gap: 2rem;
  justify-content: center; */
  @media screen and (min-width: 780px) {
    grid-template-columns: 1fr 1fr 1fr;
    
  }
`;
export const ProjectCard = styled.div`
  display:flex;
 flex-direction:column;
  margin: 1rem;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
 
`;
export const ImageContainer = styled.div`
  max-width: 100%;
  padding: 1rem;
`;
export const Image = styled.img`
  border-radius:1rem;
`;
export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 80%;

  & > div {
    margin: 0.3rem 1rem;
  }
`;
export const Heading = styled.div`
  /* height:20%; */
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;
export const Info = styled.div``;
export const TechWrapper = styled.div`
  display: grid;
  justify-items: center;
  @media screen and (min-width: 420px) {
    grid-template-columns: 1fr 1fr;
    justify-items: normal;
  }
`;
export const Tech = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid blue;
  border-radius: 30px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`;
export const DemoWrapper = styled.div``;
export const Demo = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid blue;
  border-radius: 30px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
`;
export const DemoVideo = styled.div``;
export const ButtonWrapper = styled.div`
  display: grid;

  @media screen and (min-width: 420px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Deploy = styled.a`
  border: 1px solid blue;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 30px;
  margin: 0.5rem;
`;
export const Github = styled.a`
  border: 1px solid blue;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 30px;
  margin: 0.5rem;
`;
