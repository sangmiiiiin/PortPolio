import styled from "styled-components";
export const ProjectWrapper = styled.div`
    width: 100%;
    padding: 5%;
    background-color: #FFCA28;
    margin-top: 25vh;
`

export const Project1Container = styled.div`
    background-color: white;
    height: 90vh;
    border-radius: 30px;
    padding-top: 3%;

    @media only screen and (max-width: 576px) {
        height: 60vh;
    }
`

export const Project1Title = styled.h1`
    font-family: 'Orbit', sans-serif;
    text-align: center;
    font-size: 45px;
    font-weight: bold;

    @media only screen and (max-width: 576px) {
        font-size: 1.8rem;
    }
`

export const Project1Subtitle = styled.h6`
    color: gray;
    text-align: center;

    @media only screen and (max-width: 576px) {
        font-size: 1rem;
    }
`

export const Project1Img = styled.img`
    margin-top: 3.5%;
    margin-bottom: 2%;
    margin-left: 10%;
    width: 80%;
    height: 55vh;
    box-shadow: 0px 0px 25px 5px rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 576px) {
        height: 25vh;
        margin-top: 5vh;
        margin-bottom: 5%;
    }
`

export const Project1ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Project1Contents = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    font-size: 20px;
`
