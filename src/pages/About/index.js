import React, { useEffect, useState } from "react";
import { AboutSection } from "./AboutSection";
import { Fade } from "react-bootstrap";

export const About = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 1;  // 스크롤 이벤트를 감지할 스크롤 위치

            setShow(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return(
        <AboutSection>
            <Fade in={show}>
                <h2 id="content">Hi, I'm Sangmin</h2>
            </Fade>
        </AboutSection>
    );
}

