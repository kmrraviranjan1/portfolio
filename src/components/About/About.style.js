import styled from "styled-components";
export const Wrapper = styled.div`
/* max-width:1200px; */
background-image: url("assets/raviFull.png");
  background-position: 90% bottom;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 1240px) {
    
    background-position: bottom;
  }
`;
export const Container = styled.div`
max-width:1200px;
margin: auto;
  display: flex;
  align-items: flex-end;
  height: calc(100vh - 5rem);
  


  @media (max-width: 1240px) {
    align-items:normal;
   
  }
`;

export const Main = styled.main`

  display: flex;
  flex-direction: column;
  padding-bottom:10%;
  @media (max-width: 1240px) {
    padding-bottom:0;
  }
`;
export const Greet=styled.h6`
  font-size: 2rem;
  @media (max-width: 1240px) {
    align-items:normal;
    background-position: bottom right;
  }
`
export const Name=styled.h1`
  font-size: 3rem;
  @media (max-width: 1240px) {
 
  }
`
export const Writer=styled.p`
  font-size: 2rem;
  @media (max-width: 1240px) {
   
  }
`
export const Follow = styled.div`
  display: flex;
  @media (max-width: 1200px) {
    flex-direction:column;
  }
`;
export const LinkContainer = styled.div`
margin-top:1rem;
  
`;
export const Icon = styled.a`
  margin: 1rem;
  font-size: 1.5rem;
  @media (min-width: 320px) {
    font-size: 2rem;
  }
  @media (min-width: 480px) {
    font-size: 2.5rem;
  }
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Wave = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;
