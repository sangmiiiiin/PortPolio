import styled from "styled-components";

const commonSocialIcon = `
    width: 3vw;
`

export const SocialLink = styled.a`
    margin: 5px;
    color: white;
    font-size: 2em;
`

export const SocialLinkItems = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 1vh;
`

export const Github = styled.img`
    ${commonSocialIcon}
`

export const Instagram = styled.img`
    ${commonSocialIcon}
`

export const Mail = styled.img`
    ${commonSocialIcon}
`