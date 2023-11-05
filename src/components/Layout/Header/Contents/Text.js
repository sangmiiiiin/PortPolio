import styled from "styled-components";

const Animatedtext =`
    -moz-animation-delay: 1s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
`

export const Name = styled.h1`
    ${Animatedtext}
    font-family: 'Racing Sans One', cursive;
    font-size: 4.5em;
`

export const Position = styled.p`
    ${Animatedtext}
    font-size: 1.7em;
`