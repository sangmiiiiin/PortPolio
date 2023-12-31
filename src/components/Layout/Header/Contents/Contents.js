import styled from "styled-components";
import { Name, Position } from "./Text";
import { Github, Instagram, Mail, SocialLink, SocialLinkItems, Velog } from "./SocialLinks";
import gitImg from "../../../../image/github.svg";
import InstaImg from "../../../../image/instagram.svg";
import MailImg from "../../../../image/envelope-fill.svg";
import VelogImg from "../../../../image/velogImg.png";
import { Email } from "../../../contact/contactSection";


const HeaderContents = styled.div`
    text-align: center;
    padding-top: 25vh;
    color: white;
`

const UnderLine = styled.hr`
    display: block;
    padding: 0;
    width: 21em;
    height: 0;
    max-height: 0;
    line-height: 1;
    margin: 0.5em auto 0.5em auto;
    border-width: 2px;
`

export const Contents = () => {
    const email = "kwk680037@gmail.com";

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };
    return (
        <HeaderContents>
            <Name>Sangmin's PortPolio</Name>
            <Position>FrontEnd Developer</Position>

            <UnderLine />

            <SocialLinkItems>
                <SocialLink href="https://github.com/sangmiiiiin">
                    <Github src={gitImg} />
                </SocialLink>

                <SocialLink href="https://www.instagram.com/sangmiiiiiin/">
                    <Instagram src={InstaImg} />
                </SocialLink>

                <SocialLink onClick={handleEmailClick}>
                    <Mail src={MailImg} />
                    <Email>{email}</Email>
                </SocialLink>

                <SocialLink href="https://velog.io/@sangmiiiiin">
                    <Velog src={VelogImg} />
                </SocialLink>
            </SocialLinkItems>
        </HeaderContents>
    );
}