import styled from "styled-components";

export const ArchiveWrapper = styled.div`
    background-color: #424242;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const ArchiveTitle = styled.h1`
    font-family: 'Oswald', sans-serif;
    color: white;
    line-height: 20vh;
    text-align: center;
    font-weight: bold;
`;

export const ArchiveContainer = styled.div`
    display: grid;
    background-color: #424242;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 50px;
    margin-bottom: 15vh;

    @media only screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        margin-bottom: 5vh;
    }
`
export const ArchiveGithub = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 40vw;
    border-radius: 10px;

    @media only screen and (max-width: 576px) {
        width: 90vw;
        margin-left: 5%;
    }
`;

export const ArchiveVelog = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 40vw;
    border-radius: 10px;

    @media only screen and (max-width: 576px) {
        width: 90vw;
        margin-left: 5%;
        margin-top: 5%;
    }
`;

export const GithubTitle = styled.img`
    width: 20vw;
    margin-top: 13%;
    margin-left: 8vw;

    @media only screen and (max-width: 576px) {
        width: 70vw;
    }
`;

export const VelogTitle = styled.img`
    width: 30vw;
    margin-left: 5vw;
    padding: 10%;

    @media only screen and (max-width: 576px) {
        width: 80vw;
    }
`;

export const GithubUl = styled.ul`
    margin-top: 10%;
`;

export const VelogUl = styled.ul`

`;

export const GithubLi = styled.li`
    font-size: 1.2rem;

    @media only screen and (max-width: 576px) {
        font-size: 0.75rem;
    }
    
`;

export const VelogLi = styled.li`
    font-size: 1.2rem;

    @media only screen and (max-width: 576px) {
        font-size: 0.75rem;
    }
`;

export const GoToGithub = styled.a`
    text-decoration: none;
    color: black;
`;

export const GoToVelog = styled.a`
    text-decoration: none;
    color: black;
`;