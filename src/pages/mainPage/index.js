import React, { useState } from "react";
import { AboutContainer, AboutSection, Introduce, ProfileImg, SubIntroduce } from "../../components/About/AboutSection";
import { ReactJs, Bootstrap, Express, MySQL, ProjectContainer, ProjectDetail, ProjectImg, ProjectMemo, ProjectName, ProjectSection, ProjectTitle, StyledButton, StyledButton2, HTML, CSS, JavaScript } from "../../components/Project/ProjectSection";
import { ProjectModal1 } from "../projectModal/Bookstock";

import { useScroll } from "../../hooks/useScroll";

import { Carousel, CarouselItem, Fade } from "react-bootstrap";

import ProfileImage from "../../image/IMG_8109.jpg";
import ProjectImage from "../../image/projectImage.jpg";
import ProjectImage2 from "../../image/projectImage2.jpg";
import ProjectImage3 from "../../image/projectImage3.jpg";
import { Project1Container, Project1ContentContainer, Project1Contents, Project1Img, Project1Subtitle, Project1Title, ProjectWrapper } from "../../components/Project/Project1";
import { Project2Container } from "../../components/Project/project2";
import { Project3Container } from "../../components/Project/project3";

import mainImg from "../../image/bookStockMain.gif";
import loginImg from "../../image/bookStockLogin.gif";
import signUpImg from "../../image/bookStockSignUp.gif";
import bookSignImg from "../../image/bookStockBookSearch.gif";
import bidImg from "../../image/bookStockBid.gif";
import searchImg from "../../image/bookStockSearch.gif";
import pointImg from "../../image/Point.gif";
import TradingImg from "../../image/myPage.gif";
import TradingImg2 from "../../image/myPage2.gif";
import GithubLogo from "../../image/githubLogo.jpg";
import VelogIo from "../../image/VelogTitle.png";
import MomentumImg from "../../image/Momentum.jpg";

import portPolioMainImg from '../../image/portpolioMain.gif';

import MbtiMainImg from '../../image/MBTImainImg.gif';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-scroll";
import { ProjectModal2 } from "../projectModal/MBTI";
import { ProjectModal3 } from "../projectModal/PortPolio";
import { ContactButton, ContactContainer, ContactContents, ContactTitle, Email } from "../../components/contact/contactSection";
import { ArchiveContainer, ArchiveGithub, ArchiveTitle, ArchiveVelog, ArchiveWrapper, GithubLi, GithubTitle, GithubUl, GoToGithub, GoToVelog, VelogLi, VelogTitle, VelogUl } from "../../components/Archive/Archive";
import { ProjectModal4 } from "../projectModal/Momentum";



export const Index = () => {
    const [introduce, setIntroduce] = useState(false);
    const [profile, setProfile] = useState(false);
    const [projectImg, setProjectImg] = useState(false);
    const [projectDetail, setProjectDetail] = useState(false);
    const [showMomentum, setShowMomentum] = useState(false);
    const [showBookStock, setShowBookStock] = useState(false);
    const [showMBTI, setShowMBTI] = useState(false);
    const [showPoPol, setShowPoPol] = useState(false);

    useScroll((scrollY) => {
        const threshold = 300;
        const threshold2 = 500;
        const threshold3 = 800;

        setProfile(scrollY > threshold);
        setIntroduce(scrollY > threshold2);
        setProjectImg(scrollY > threshold3);
        setProjectDetail(scrollY > threshold3);
    });

    const openBookStock = () => setShowBookStock(true);
    const closeBookStock = () => setShowBookStock(false);

    const openMBTI = () => setShowMBTI(true);
    const closeMBTI = () => setShowMBTI(false);

    const openPoPol = () => setShowPoPol(true);
    const closePoPol = () => setShowPoPol(false);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const email = "kwk680037@gmail.com";

    const handleEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };


    return (
        <>
            <div id="about"></div>
            <AboutSection>
                <AboutContainer>
                    <ProfileImg $fade={profile} src={ProfileImage} />
                </AboutContainer>

                <Fade in={introduce}>
                    <div>
                        <Introduce>Hi, I'm Sangmin !</Introduce>
                        <SubIntroduce>Junior FrontEnd Web Developer</SubIntroduce>
                    </div>
                </Fade>
            </AboutSection>

            <ArchiveWrapper>
                <ArchiveTitle>
                    A r c h i v e
                </ArchiveTitle>
                <ArchiveContainer>
                    <div></div>
                    <GoToGithub href="https://github.com/sangmiiiiin">
                        <ArchiveGithub>
                            <GithubTitle src={GithubLogo}></GithubTitle>
                            <GithubUl>

                                <GithubLi style={{
                                                textDecoration: "underline",
                                                color: "blue"
                                                }}>
                                    https://github.com/sangmiiiiin
                                </GithubLi>
                                <GithubLi>소스 코드 저장소 입니다.</GithubLi>
                                <GithubLi>포트폴리오를 구축하기 위함 입니다.</GithubLi>
                                <GithubLi>그동안 해왔던 프로젝트와 코드를 업로드 합니다.</GithubLi>
                            </GithubUl>
                        </ArchiveGithub>
                    </GoToGithub>
                    <GoToVelog href="https://velog.io/@sangmiiiiin">
                        <ArchiveVelog>
                            <VelogTitle src={VelogIo}></VelogTitle>
                            <VelogUl>
                                <VelogLi style={{
                                                textDecoration: "underline",
                                                color: "blue"
                                                }}>
                                    https://velog.io/@sangmiiiiin
                                </VelogLi>
                                <VelogLi>지식을 진짜 내것으로 만들기 위해.</VelogLi>
                                <VelogLi>문제 해결책을 찾기 쉽게 하기 위해.</VelogLi>
                                <VelogLi>개발 과정에서 얻은 지식을 공유하기 위해.</VelogLi>
                            </VelogUl>
                        </ArchiveVelog>
                    </GoToVelog>
                </ArchiveContainer>
            </ArchiveWrapper>


            <div id="project"></div>
            <ProjectSection>
                <ProjectTitle>P r o j e c t</ProjectTitle>
                <Carousel
                    interval={30000}
                    indicators={true}
                >
                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg $fadeLeft={projectImg} src={MomentumImg} />
                            <ProjectDetail $fadeRight={projectDetail}>
                                <ProjectName>
                                    Momentum 클론코딩
                                </ProjectName>

                                <ProjectMemo>
                                    VanilaJS를 이용한 Momentum APP 클론코딩<br/>
                                    친절한 JS의 내장함수를 사용해보고<br />
                                    컴퓨팅 적 사고력을 향상 시키기 위해<br />
                                    JS와 친해지기 위해 진행!
                                </ProjectMemo>

                                <HTML>
                                    HTML
                                </HTML>

                                <CSS>
                                    CSS
                                </CSS>

                                <JavaScript>
                                    JavaScript
                                </JavaScript><br/>

                                <StyledButton onClick={() => setShowMomentum(true)}>
                                    자세히보기 →
                                </StyledButton>

                                <StyledButton2>
                                    <Link to='bookstock'>
                                        시연이미지 →
                                    </Link>
                                </StyledButton2>
                                <ProjectModal4 isOpen={showMomentum} isClose={() => setShowMomentum(false)} />
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>

                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg $fadeLeft={projectImg} src={ProjectImage} />
                            <ProjectDetail $fadeRight={projectDetail}>
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

                                <StyledButton onClick={openBookStock}>
                                    자세히보기 →
                                </StyledButton>

                                <StyledButton2>
                                    <Link to='bookstock'>
                                        시연이미지 →
                                    </Link>
                                </StyledButton2>
                                <ProjectModal1 isOpen={showBookStock} isClose={closeBookStock} />
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>

                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg $fadeLeft={projectImg} src={ProjectImage2} />
                            <ProjectDetail $fadeRight={projectDetail}>
                                <ProjectName>
                                    포트폴리오 웹사이트
                                </ProjectName>

                                <ProjectMemo>
                                    직접 만든 포트폴리오 웹사이트를 통해<br />
                                    경험치 상승! 여러가지 라이브러리 사용!<br />
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
                                </Express> <br />

                                <StyledButton onClick={openPoPol}>
                                    자세히보기 →
                                </StyledButton>
                                <StyledButton2>
                                    <Link to='portpolio'>
                                        시연이미지 →
                                    </Link>
                                </StyledButton2>
                                <ProjectModal3 isOpen={showPoPol} isClose={closePoPol} />
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>

                    <CarouselItem>
                        <ProjectContainer>
                            <ProjectImg $fadeLeft={projectImg} src={ProjectImage3} />
                            <ProjectDetail $fadeRight={projectDetail}>
                                <ProjectName>
                                    MBTI 성향 조합 테스트
                                </ProjectName>

                                <ProjectMemo>
                                    요즘 가장 핫한 MBTI !<br />
                                    나와 상대방의 MBTI 궁합은 어떨까?<br />
                                    간단하게 알아보자<br />
                                    MBTI 성향 조합 테스트 !<br />
                                </ProjectMemo>

                                <HTML>
                                    HTML
                                </HTML>

                                <CSS>
                                    CSS
                                </CSS>

                                <JavaScript>
                                    JavaScript
                                </JavaScript> <br />

                                <StyledButton onClick={openMBTI}>
                                    자세히보기 →
                                </StyledButton>

                                <StyledButton2>
                                    <Link to='MBTI'>
                                        시연이미지 →
                                    </Link>
                                </StyledButton2>
                                <ProjectModal2 isOpen={showMBTI} isClose={closeMBTI} />
                            </ProjectDetail>
                        </ProjectContainer>
                    </CarouselItem>

                </Carousel>

                <ProjectWrapper id='bookstock'>
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
                                <Project1Img src={pointImg} alt="북스탁 포인트 충전 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 포인트 충전
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={TradingImg} alt="북스탁 마이페이지 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 등록한 역경매 목록, 입찰 목록(마이페이지)
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>

                            <div>
                                <Project1Img src={TradingImg2} alt="북스탁 실물거래 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 등록한 택배 거래(주소입력, 운송장번호 입력, 구매확정)
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>
                        </Slider>
                    </Project1Container>
                    <div id="portpolio"></div>
                    <Project2Container>
                        <Project1Title>포트폴리오 웹사이트</Project1Title>
                        <Project1Subtitle>2023.11 (개인 프로젝트)</Project1Subtitle>
                        <Slider {...settings}>
                            <div>
                                <Project1Img src={portPolioMainImg} alt="포트폴리오 메인 이미지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 메인페이지
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>
                        </Slider>
                    </Project2Container>
                    <div id="MBTI"></div>
                    <Project3Container>
                        <Project1Title>MBTI 조합 분석 사이트</Project1Title>
                        <Project1Subtitle>2023.11 (개인 프로젝트)</Project1Subtitle>
                        <Slider {...settings}>
                            <div>
                                <Project1Img src={MbtiMainImg} alt="MBTI 테스트 페이지" />
                                <Project1ContentContainer>
                                    <Project1Contents>
                                        ✔️ 메인페이지
                                    </Project1Contents>
                                </Project1ContentContainer>
                            </div>
                        </Slider>
                    </Project3Container>
                </ProjectWrapper>
            </ProjectSection>

            {/* Start Contact Section */}
            <div id="contact"></div>
            <ContactContainer>
                <ContactTitle>
                    Contact Me
                </ContactTitle>

                <ContactContents>
                    궁금한 점이 있으시면 언제든지 문의해 주세요 !
                </ContactContents>

                <ContactButton onClick={handleEmailClick}>
                    이메일 보내기 <i className="bi bi-airplane-fill"></i>
                    <Email>{email}</Email>
                </ContactButton>
            </ContactContainer>

        </>
    );
}

