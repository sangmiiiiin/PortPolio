import React, { useState } from "react";
import { AboutContainer, AboutSection, Introduce, ProfileImg, SubIntroduce } from "./About/AboutSection";
import { Fade } from "react-bootstrap";
import ProfileImage from "../image/IMG_8109.jpg"
import { ProjectSection, ProjectTitle } from "./Project/ProjectSection";
import { useScroll } from "../hooks/useScroll";

export const About = () => {
    const [introduce, setIntroduce] = useState(false);
    const [profile, setProfile] = useState(false);

    useScroll((scrollY) => {
        const threshold = 300;
        const threshold2 = 500;

        setProfile(scrollY > threshold);
        setIntroduce(scrollY > threshold2);
    });

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

        <ProjectSection>
            <ProjectTitle>Project</ProjectTitle>


        </ProjectSection>
        </>
    );
}

