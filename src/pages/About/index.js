import React, { useEffect, useState } from "react";
import { AboutContainer, AboutSection, Introduce, ProfileImg, SubIntroduce } from "./AboutSection";
import { Fade } from "react-bootstrap";
import ProfileImage from "../../image/IMG_8109.jpg"

export const About = () => {
    const [introduce, setIntroduce] = useState(false);
    const [profile, setProfile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // 스크롤 이벤트를 감지할 스크롤 위치
            const threshold = 300;  
            const threshold2 = 500;
            
            setProfile(scrollY > threshold);
            setIntroduce(scrollY > threshold2);
            
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup 함수
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return(
        <>
        <AboutSection>
            <AboutContainer>
                <ProfileImg fade={profile} src={ProfileImage}/>
            </AboutContainer>

            <Fade in={introduce}>
                <div>
                    <Introduce>Hi, I'm Sangmin !</Introduce>
                    <SubIntroduce>Junior FrontEnd Web Developer</SubIntroduce>
                </div>
            </Fade>
        </AboutSection>
        </>
    );
}

