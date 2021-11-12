import styled from "styled-components";
export const ProjectContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 2rem;
`;
export const PageHeading = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;
export const ProjectWrapper = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid black;
`;
export const ImageContainer = styled.div`
  padding: 1rem;
`;
export const Image = styled.img`
  border-radius: 1rem;
  width: 100%;
`;
export const DescriptionWrapper = styled.div`
  & > div {
    margin: 0.3rem 1rem;
  }
`;
export const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
export const Info = styled.p`
  margin: 0.3rem 1rem;
`;
export const TechWrapper = styled.div`
  display: grid;
 
  @media screen and (min-width: 420px) {
    grid-template-columns: 10rem 10rem 10rem;
  }
`;
export const Tech = styled.div`
  padding: 1.5rem;
  border: 1px solid blue;
  border-radius: 30px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
