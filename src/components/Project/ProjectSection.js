import styled, {keyframes} from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const technologiesUsed = `
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 13px;
    font-weight: bold;

    border-radius: 4px;
    
    margin-left: 0px;
    padding-left: 5px;
    padding-right: 5px; 
`

export const fadeIn1 = keyframes`
    from {
        opacity: 0;
        transform: translateX(-35px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const fadeIn2 = keyframes`
    from {
        opacity: 0;
        transform: translateX(35px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const ProjectSection = styled.div`
    margin-top: 10vh;
`;

export const ProjectTitle = styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    text-align: center;
`;


export const ProjectContainer = styled.div`
    display: flex;
    margin-top: 8vw;
    margin-left: 5vw;

    @media only screen and (max-width: 576px) {
        display: flex;
        flex-wrap: wrap;
    }
`
export const ProjectImg = styled.img`
    width: 45vw;
    height: 30vh;
    border: 0.5px solid lightgray;
    box-shadow: -2px 10px 30px rgba(0, 0, 0, 0.2);

    opacity: ${({ $fadeLeft }) => ($fadeLeft ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    animation: ${({ $fadeLeft }) => ($fadeLeft ? fadeIn1 : 'none')} 1s ease-in-out;

    @media only screen and (max-width: 576px) {
        width: 90%;
        margin-bottom: 5vh;
    }
`

export const ProjectDetail = styled.div`
    margin-left: 5vw;

    opacity: ${({ $fadeRight }) => ($fadeRight ? 1 : 0)};
    transition: opacity 0.5s ease-in-out;
    animation: ${({ $fadeRight }) => ($fadeRight ? fadeIn2 : 'none')} 1s ease-in-out;
`

export const ProjectName = styled.h3`
    font-family: 'Orbit', sans-serif;
    font-weight: bold
`

export const ProjectMemo = styled.p`
    font-family: 'Orbit', sans-serif;
    font-size: 16px;
    margin-bottom: 1vh;
`

export const ReactJs = styled(Form.Label)`
    ${technologiesUsed}
    background-color: gray;
    color: white
`

export const Bootstrap = styled(Form.Label)`
    ${technologiesUsed}
    background-color: purple;
    color: white;
    margin-left: 0.5vw;
`

export const Express = styled(Form.Label)`
    ${technologiesUsed}
    background-color: blue;
    color: white;
    margin-left: 0.5vw;
`

export const MySQL = styled(Form.Label)`
    ${technologiesUsed}
    background-color: Green;
    color: white;
    margin-left: 0.5vw;
`
export const HTML = styled(Form.Label)`
    ${technologiesUsed}
    background-color: red;
    color: white;
    margin-left: 0.5vw;
`

export const CSS = styled(Form.Label)`
    ${technologiesUsed}
    background-color: blue;
    color: white;
    margin-left: 0.5vw;
`

export const JavaScript = styled(Form.Label)`
    ${technologiesUsed}
    background-color: #FDD835;
    color: white;
    margin-left: 0.5vw;
`
export const StyledButton = styled(Button)`
    font-weight: bold;
    border: none;
    background-color: #42A5F5;
`

export const StyledButton2 = styled(Button)`
    margin-left: 3%;
    font-weight: bold;
    border: none;
    background-color: #66BB6A;
`