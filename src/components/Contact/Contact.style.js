import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const ContactWrapper = styled.div`
  padding: 1rem;
  text-align: center;

  display: grid;
  grid-template-rows: 1fr 2fr;
  align-items: center;
  align-items: center & a {
    text-decoration: none;
  }
`;

export const ContactAt = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CLinkContainer = styled.div`
  margin: 1rem;
  display: flex;
  align-items: space-between;
  flex-direction: column;
  padding: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    /* justify-content:space-around; */
  }
`;

export const CIcon = styled.div`
  font-size: 2rem;
  margin: 1rem;
  @media (min-width: 320px) {
    font-size: 3rem;
  }
`;
export const CTitle = styled.a`
  @media (min-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FolllowContainer = styled.div`
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
`;
export const Heading = styled.h3`
  font-size: 1.5rem;
`;
export const FolllowAt = styled.div`
  display: grid;
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const Icon = styled.div`
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

export const LinkContainer = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
`;
export const Title = styled.a`
  border: 1px solid blue;
  padding: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 30px;
  margin: 0.5rem;
`;
