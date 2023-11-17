import { Modal, Button } from 'react-bootstrap';
import { BackEndContainer, ExplainContainer, FrontEndContainer, SkillImg, SkillImgContainer, StyledText, SubTitle, WbsImg } from '../../components/Project/ModalComponent';
import reactImg from '../../image/reactImg.png';
import nodeImg from '../../image/nodejsImg.png';
import bootstrapImg from '../../image/bootstrapImg.png';
import mysqlImg from '../../image/mySqlImg.png';
import notionImg from '../../image/notionImg.png';
import googleDriveImg from '../../image/googleDriveImg.png';
import awsImg from '../../image/awsImg.png';
import githubImg from '../../image/githubImg.png';
import wbsImg from '../../image/wbsImg.jpg';
import htmlcssjsImg from '../../image/HTMLCSSJS.png';
import expressImg from '../../image/expressImg.png';

export const ProjectModal1 = ({ isOpen, isClose }) => {
    return (
        <Modal
            size='lg'
            show={isOpen}
            onHide={isClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header style={{ backgroundColor: "#333", color: "white" }} closeButton>
                <Modal.Title>BookStock 프로젝트</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubTitle>📌 Summary</SubTitle>
                <hr />
                <ExplainContainer>
                    <strong>역경매 기반 도서 구매 사이트 입니다. <br />
                        당근마켓이 아이디어의 원천이 되었고, 좀 더 소비자 중심인 서비스를 구현하고자 개발하게 되었습니다.</strong> <br /><br />

                    <StyledText>React</StyledText>, <StyledText>Express</StyledText>를 이용하여 전체 서비스를 구현하였으며 <StyledText>Component를 제작</StyledText>하는 것으로 시작, <StyledText>Bootstrap</StyledText>을 이용하여 <StyledText>UI/UX</StyledText>를 만들고, <StyledText>JavaScript</StyledText>를 이용해
                    유효성 검사 실시, 숫자 단위 식별(콤마 자동 생성) 등 로직 작성 <StyledText>Axios 통신 (post)</StyledText>을 이용하여 <StyledText>포인트충전(post)</StyledText>, <StyledText>잔액조회(get)</StyledText> 기능구현, 백엔드에서 <StyledText>multer</StyledText> 라이브러리를 이용해 브라우저에서 사용자에게 입력받은 이미지 파일 저장 후 출력 기능을 구현.
                    <StyledText>React-responsive</StyledText> 라이브러리를 이용하여 반응형 웹을 구현하여 모바일 환경에서 볼수 있도록 하였습니다.<br /><br />
                    <StyledText>SPA</StyledText>를 제작하며 하나의 서비스를 만들어 나감에 있어서 프레임워크와 라이브러리의 사용을 익히고 응용하여 기능을 만드는 보람찬 시간이였습니다. 팀원들과 소통하며 협업과 원활한 의사소통의 중요성을 깨달을 수 있었습니다.
                    <br />
                    <ul>
                        <h4 style={{ marginTop: "5vh" }}>주요기능</h4>
                        <li> ☑️ 도서 역경매 등록</li>
                        <li> ☑️ 도서 역경매 입찰</li>
                        <li> ☑️ 도서 역경매 매물 검색</li>
                        <li> ☑️ 반응형 웹</li>
                        <li> ☑️ 포인트 충전 기능</li>
                        <li> ☑️ 회원가입, 로그인</li>
                    </ul>
                </ExplainContainer>
                <SubTitle>🔨 SKILLS</SubTitle>
                <hr />
                <SkillImgContainer>
                    <FrontEndContainer style={{
                        backgroundColor: "#FAFAFA",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 25px 1px rgba(0, 0, 0, 0.5)",
                        margin: "10px",
                        padding: "20px"
                    }}>
                        <FrontEndContainer>FrontEnd</FrontEndContainer>
                        <FrontEndContainer>
                            <SkillImg src={htmlcssjsImg} style={{ width: "23vw" }} />
                        </FrontEndContainer>
                        <SkillImg src={reactImg} />
                        <SkillImg src={bootstrapImg} />

                    </FrontEndContainer>



                    <BackEndContainer
                        style={{
                            backgroundColor: "#FAFAFA",
                            borderRadius: "10px",
                            boxShadow: "0px 0px 25px 1px rgba(0, 0, 0, 0.5)",
                            margin: "10px",
                            padding: "20px"
                        }}>
                        <BackEndContainer>BackEnd</BackEndContainer>
                        <SkillImg src={nodeImg} />
                        <SkillImg src={mysqlImg} />
                        <BackEndContainer>
                            <SkillImg src={expressImg} />
                        </BackEndContainer>
                    </BackEndContainer>
                </SkillImgContainer>

                <SubTitle>🙌🏻 Corabolation Tool</SubTitle>
                <hr />
                <SkillImgContainer
                    style={{
                        backgroundColor: "#FAFAFA",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 25px 1px rgba(0, 0, 0, 0.5)",
                        padding: "20px"
                    }}>
                    <SkillImg src={notionImg} />
                    <SkillImg src={googleDriveImg} />
                    <SkillImg src={awsImg} />
                    <SkillImg src={githubImg} />
                </SkillImgContainer>

                <SubTitle>📜 WBS</SubTitle>
                <hr />
                <WbsImg src={wbsImg} />

                <SubTitle>🔍 Meaning</SubTitle>
                <hr />
                <ExplainContainer>
                    역경매 기반 도서 구매 사이트 입니다.<br />
                    당근마켓이 아이디어의 원천이 되었고, 좀 더 소비자 중심인 서비스를 구현하고자 개발하게 되었습니다.<br /><br />
                    하나의 서비스를 만들기 위해 기획, 개발, 배포를 모두 체험해 볼수 있는 귀중한 프로젝트 경험이였습니다.
                    <StyledText>React</StyledText>를 배우고 <StyledText>Express</StyledText>를 이용하여 전체 서비스를 구현하였으며 <StyledText>Component를 제작</StyledText>하는 것으로 시작, <StyledText>Bootstrap</StyledText>을 이용하여 <StyledText>UI/UX</StyledText>를 만들고, <StyledText>JavaScript</StyledText>를 이용해
                    숫자 3자리마다 콤마 붙이기, 포인트 충전기능을 위해 금액을 입력받고 유효성 검사를 프론트단에서 실시하는 로직을 만들어보기도 하고 최대한 사용자 경험이 좋게 만들려고 노력하였습니다.
                    또한 포인트 충전 금액을 데이터베이스에 전달하기 위해 <StyledText>Axios 통신 (post)</StyledText>을 이용하여 서버단에 입력받은 금액을 전달 하였고, <StyledText>잔액조회(get)</StyledText>를 구현하였으며 잔액이 없는데 출금을 하려고 한다거나 유효하지 않은 값을 입력하였을때 에러처리도 구현해보았습니다.
                    <StyledText>React-responsive</StyledText> 라이브러리를 이용하여 반응형 웹을 구현하여 모바일 환경에서 볼수 있도록 하였습니다.<br />
                    브라우저에서 사용자에게 이미지를 입력받아 제출 후 <StyledText>Axios</StyledText> 통신하여 백엔드에서 <StyledText>multer</StyledText> 라이브러리를 이용해 데이터베이스에 url을 저장, 그 url을 이용하여
                    다시 프론트에 이미지를 출력하는 기능을 만들며 백엔드와 통신하는 기초 로직을 알게 되는 좋은 기회가 되었습니다.
                    <br /><br />
                    첫 프로젝트인 만큼 모든게 서툴고 시간이 한정 되어있는 만큼 아쉬움이 남지만 비전공자 출신만 모여 하나의 구동되는 웹페이지를 만들어 냈다는 점에 큰 보람과 자부심을 느끼고 앞으로 공부해야하는 방향성을 설정하고 자신감을 심어주는 프로젝트 였습니다.
                    나아가 <StyledText>팀원들과의 협업과 원활한 의사소통 능력의 중요성</StyledText>도 깨닫는 시간이였습니다.
                    <br /><br />
                    아쉬웠던 점은 동적인 요소들을 웹페이지에 좀 더 웹페이지에 추가했으면 하는 아쉬움이 남습니다. 개인적으로 UI에 신경을 썼다고 생각했지만 배포한 후 아쉬움이 많이 남았고 덕분에 프로젝트를 마치고 CSS를 더 공부할 동기부여가 되었습니다.
                </ExplainContainer>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={isClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
