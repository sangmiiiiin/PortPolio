import React, { useState } from "react";
import { AboutContainer, AboutSection, Introduce, ProfileImg, SubIntroduce } from "../../components/About/AboutSection";
import { ReactJs, Bootstrap, Express, MySQL, ProjectContainer, ProjectDetail, ProjectImg, ProjectMemo, ProjectName, ProjectSection, ProjectTitle, StyledButton, StyledButton2 } from "../../components/Project/ProjectSection";
import { ProjectModal1 } from "../projectModal";

import { useScroll } from "../../hooks/useScroll";

import { Carousel, CarouselItem, Fade } from "react-bootstrap";

import ProfileImage from "../../image/IMG_8109.jpg";
import ProjectImage from "../../image/projectImage.jpg";
import { Project1Container, Project1ContentContainer, Project1Contents, Project1Img, Project1Subtitle, Project1Title, Project1Wrapper } from "../../components/Project/Project1";

import mainImg from "../../image/bookStockMain.gif";
import loginImg from "../../image/bookStockLogin.gif";
import signUpImg from "../../image/bookStockSignUp.gif";
import bookSignImg from "../../image/bookStockBookSearch.gif"
import bidImg from "../../image/bookStockBid.gif"
import searchImg from "../../image/bookStockSearch.gif"

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-scroll";


export const Index = () => {
    const [introduce, setIntroduce] = useState(false);
    const [profile, setProfile] = useState(false);
    const [projectImg, setProjectImg] = useState(false);
    const [projectDetail, setProjectDetail] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useScroll((scrollY) => {
        const threshold = 300;
        const threshold2 = 500;
        const threshold3 = 800;

        setProfile(scrollY > threshold);
        setIntroduce(scrollY > threshold2);
        setProjectImg(scrollY > threshold3);
        setProjectDetail(scrollY > threshold3);
    });

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <>
            <AboutSection id="about">
                <AboutContainer>
                    <ProfileImg fade={profile} src={ProfileImage} />
                </AboutContainer>

                <Fade in={introduce}>
                    <div>
                        <Introduce>Hi, I'm Sangmin !</Introduce>
                        <SubIntroduce>Junior FrontEnd Web Developer</SubIntroduce>
                    </div>
                </Fade>
            </AboutSection>

            <ProjectSection id="project">
                <ProjectTitle>Project</ProjectTitle>
                <Carousel
                    interval={null}
                    indicators={true}
                >
                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg fadeLeft={projectImg} src={ProjectImage} />
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

                                <StyledButton onClick={openModal}>
                                    산출물보기 →
                                </StyledButton>

                                <StyledButton2>
                                    <Link to='bookstock'>
                                        자세히보기 →
                                    </Link>
                                </StyledButton2>
                                <ProjectModal1 isOpen={showModal} isClose={closeModal} />
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>

                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg fadeLeft={projectImg} src={ProjectImage} />
                            <ProjectDetail fadeRight={projectDetail}>
                                <ProjectName>
                                    두번째 프로젝트
                                </ProjectName>

                                <ProjectMemo>
                                    직접 만든 포트폴리오를 통해<br />
                                    경험치 상승! 여러가지 모듈 사용!<br />
                                    코딩 너무너무 재밌다 Redux 공부하자<br />
                                    코드 리팩토링도 하자!
                                </ProjectMemo>

                                <ReactJs>
                                    React
                                </ReactJs>

                                <Bootstrap>
                                    Bootstrap
                                </Bootstrap>

                                <Express>
                                    StyledComponent
                                </Express>

                                <MySQL>
                                    Redux
                                </MySQL> <br />

                                <StyledButton onClick={openModal}>
                                    산출물보기 →
                                </StyledButton>
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>
                </Carousel>

                <Project1Wrapper id='bookstock'>
                    <Project1Container>
                        <Project1Title>BookStock</Project1Title>
                        <Project1Subtitle>2022.09 ~ 10 (팀 프로젝트)</Project1Subtitle>
                        <Slider {...settings}>
                            <div>
                                <Project1Img src={mainImg} alt="북스탁 메인 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 메인페이지
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={loginImg} alt="북스탁 로그인 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 로그인
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={signUpImg} alt="북스탁 회원가입 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 회원가입
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={bookSignImg} alt="북스탁 도서 등록 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 도서 역경매 등록
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={bidImg} alt="북스탁 입찰 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 도서 역경매 입찰 등록
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={searchImg} alt="북스탁 매물 검색 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 도서 매물 검색
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={loginImg} alt="북스탁 로그인 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 로그인
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={loginImg} alt="북스탁 로그인 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 로그인
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>
                        </Slider>
                    </Project1Container>
                </Project1Wrapper>



            </ProjectSection>



            <div style={{ height: "200px" }}></div>  {/* 나중에 지울것 */}
        </>
    );
}

