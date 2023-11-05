import styled, { keyframes } from "styled-components";

const commonSocialIcon = `
    width: 3vw;
`

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
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
    animation: ${fadeInUp} 1s ease-in-out;
`

export const Instagram = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 1.5s ease-in-out;
`

export const Mail = styled.img`
    ${commonSocialIcon}
    animation: ${fadeInUp} 2s ease-in-out;
`