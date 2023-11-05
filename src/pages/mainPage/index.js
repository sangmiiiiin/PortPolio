import React, { useState } from "react";
import { AboutContainer, AboutSection, Introduce, ProfileImg, SubIntroduce } from "../../components/About/AboutSection";
import { ReactJs, Bootstrap, Express, MySQL, ProjectContainer, ProjectDetail, ProjectImg, ProjectMemo, ProjectName, ProjectSection, ProjectTitle } from "../../components/Project/ProjectSection";

import { useScroll } from "../../hooks/useScroll";

import { Button, Fade } from "react-bootstrap";

import ProfileImage from "../../image/IMG_8109.jpg";
import ProjectImage from "../../image/projectImage.jpg";


export const Index = () => {
    const [introduce, setIntroduce] = useState(false);
    const [profile, setProfile] = useState(false);
    const [projectImg, setProjectImg] = useState(false);
    const [projectDetail, setProjectDetail] = useState(false);

    useScroll((scrollY) => {
        const threshold = 300;
        const threshold2 = 500;
        const threshold3 = 800;

        setProfile(scrollY > threshold);
        setIntroduce(scrollY > threshold2);
        setProjectImg(scrollY > threshold3);
        setProjectDetail(scrollY > threshold3);
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

            <ProjectContainer>
                <ProjectImg fadeLeft={projectImg} src={ProjectImage}/>
                <ProjectDetail fadeRight={projectDetail}>
                    <ProjectName>
                        BookStock 프로젝트
                    </ProjectName>

                    <ProjectMemo>
                        리버스 옥션(역경매) 기반 도서 구매 사이트 <br />
                        리버스 옥션이란? <br />
                        수요자가 원하는 물건에 대해 공급자 여러명이 <br />
                        희망 판매 가격을 제시하며 최종 가격이 결정되는 서비스
                    </ProjectMemo>

                    <ReactJs>
                        React
                    </ReactJs>

                    <Bootstrap>
                        Bootstrap
                    </Bootstrap>

                    <Express>
                        Express
                    </Express>

                    <MySQL>
                        MySQL
                    </MySQL> <br />

                    <Button style={{fontWeight: "bold"}}>자세히보기 →</Button>
                </ProjectDetail>
            </ProjectContainer>
        </ProjectSection>

        <div style={{height: "800px"}}></div>  {/* 나중에 지울것 */}
        </>
    );
}

