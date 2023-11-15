import styled, { keyframes } from "styled-components";

const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Name = styled.h1`
    font-family: 'Racing Sans One', cursive;
    font-size: 4.5em;
    animation: ${fadeInDown} 3s ease-in-out;

    @media only screen and (max-width: 576px) {
        margin-top: 3vh;
        font-size: 3.8em;
    }
`

export const Position = styled.p`
    font-size: 1.7em;
    animation: ${fadeInDown} 1s ease-in-out;

    @media only screen and (max-width: 576px) {
        font-size: 1.3em;
    }
`