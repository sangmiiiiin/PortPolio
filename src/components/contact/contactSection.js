import styled from "styled-components";

export const ContactContainer = styled.div`
    margin-top: 4em;
    margin-bottom: 3em;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

export const ContactTitle = styled.h2`
    font-weight: bold;
`

export const ContactContents = styled.p`
    margin-bottom: 10vh;
`

export const ContactButton = styled.a`
    position: relative;
    color: #697082;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2em;
    border: 2px solid #697082;
    border-radius: 4px;
    padding: 20px 65px;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 2px solid #697082;
        border-radius: 50px;
        background-color: #697082;
        color: #697082;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        top: -14px;
        left: -12px;
        width: 132px;
        height: 25px;
    }
`;

export const Email = styled.span`
    text-transform: none;
    position: absolute;
    color: white;
    top: 20px;
    left: 12px;
    opacity: 0;
    transition: all 0s ease 0s;

    ${ContactButton}:hover & {
        opacity: 1;
        transition: all 0.25s ease-in-out 0.1s;
        font-size: 14px;
    }
`;



export const ContactButtons = styled.div`

`

export const SocialIcon = styled.a`

`

