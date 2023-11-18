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
`;

export const ArchiveContainer = styled.div`
    display: grid;
    background-color: #424242;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 50px;
    margin-bottom: 15vh;
`
export const ArchiveGithub = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    width: 30vw;
    border-radius: 10px;
`;

export const ArchiveVelog = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    width: 30vw;
    border-radius: 10px;
`;

export const GithubTitle = styled.img`
    width: 20vw;
`;

export const VelogTitle = styled.img`
    width: 20vw;
`;