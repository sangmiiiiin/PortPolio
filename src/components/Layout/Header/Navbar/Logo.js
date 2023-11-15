import styled from "styled-components";

export const Logo = styled.img`
  margin-top: 0.3vh;
  width: 5vw;
  height: 3.5vh;

  @media only screen and (max-width: 768px) {
    margin-top: 0.6vh;
    width: 8vw;
    height: 2.6vh;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  `