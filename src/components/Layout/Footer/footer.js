import styled from "styled-components";
import 'bootstrap-icons/font/bootstrap-icons.css'

const FooterContainer = styled.div`
    background-color: #272628;
    color: white;
    text-align: center;
    padding: 10vh;
`

export const Footer =() => {
    return (
        <>
            <FooterContainer>
            Coded with <i className="bi bi-heart-fill"></i> by 유상민<br />
            <i class="bi bi-c-circle"></i> 2023  <i class="bi bi-geo-alt-fill"></i> Seoul, Korea
            </FooterContainer>
        </>
    );
}