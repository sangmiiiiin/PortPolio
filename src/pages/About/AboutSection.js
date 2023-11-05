import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-55px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const AboutSection = styled.div`
    background-color:#CF806A;
    font-family: 'Roboto', sans-serif;
    color: white;
    margin-top: -60px;
    text-align: center;
    padding-bottom: 10vh;
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImg = styled.img`
    width: 300px;
    height: 300px;

    border-radius: 50%;
    object-fit: cover;

    margin-top: 10vh;

    opacity: ${({ fade }) => (fade ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    animation: ${({ fade }) => (fade ? fadeIn : 'none')} 1s ease-in-out;
`;

export const Introduce = styled.h2`
    margin-top: 5vh;
    font-size: 4rem;
    color: white;
    font-weight: bold;
`;

export const SubIntroduce = styled.span`
    font-size: 1.8rem;
    color: white;
    font-weight: bold;
`;

