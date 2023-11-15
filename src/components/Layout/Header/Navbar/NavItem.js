import styled from "styled-components";

const commondImageStyles = `
  margin-right: 0.7vw;
  margin-bottom: 0.2vh;
`

export const NavItems = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 0.3vh;
  
  @media only screen and (max-width: 768px) {
    gap: 5vw;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const AboutImage = styled.img`
  ${commondImageStyles}
`;

export const ProjectImage = styled.img`
  ${commondImageStyles}
`

export const ContactImage = styled.img`
  ${commondImageStyles}
`
