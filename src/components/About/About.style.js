import styled from "styled-components";


export const Container=styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:space-evenly;
  
`

export const Main=styled.main`
  display:flex;
  flex-direction:column;
`
export const Follow=styled.div`
  display:flex;
 
`
export const LinkContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
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