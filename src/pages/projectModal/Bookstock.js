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
                    처음으로 진행한 프로젝트로서 하나의 동작하는<StyledText>SPA</StyledText>를 만들어 보았던 프로젝트 입니다. <br />
                    프론트엔드는 주로<StyledText>React</StyledText>와 <StyledText>Bootstrap</StyledText> 백엔드는 <StyledText>Node.js</StyledText>의 <StyledText>Express</StyledText> 프레임워크를 사용하여 제작하였습니다. <br />
                    처음 IT로 진로를 결정하고 프론트엔드 교육 과정만을 수료한 이후라 백엔드 구현에 부담이 있었지만 프로젝트를 통해 백엔드 로직 작성을 경험 해볼수 있어 귀중한 시간이였습니다. <br /><br />

                    제가 프로젝트를 진행 하면서 맡은 부분은 UI/UX를 제작하고 브라우저 상에서 클라이언트와 상호작용하는 기능들을 구현하였는데 먼저<StyledText>Bootstrap</StyledText>을 사용하여 웹페이지의 전반적인 UI를 제작하였습니다.
                    이때, <StyledText>Flex</StyledText>와 <StyledText>Grid</StyledText> 시스템에 대해 다시한번 개념을 확립할 수 있었습니다. 추가로 <StyledText>React-responsive</StyledText> 라이브러리를 사용해 클라이언트 화면 크기에 따라 다른
                    UI를 구현한 <StyledText>반응형 웹 사이트</StyledText>로 만들어 보며 'Mobile First'의 개념을 다시한번 깊게 되새겼습니다.<br /><br />

                    <StyledText>JavaScript</StyledText>를 통하여 책 가격의 3자리마다 콤마를 추가하고, 모달이 열렸을때 스크롤을 비활성화 하거나, 포인트 출금시 잔액보다 많은 금액을 출금할 경우 토글을 이용해 경고 메시지를 띄우고, 마이 페이지에서도 토글을 이용해 버튼
                    을 눌렀을때 해당 버튼에 맞는 섹션을 보여주는 등의 로직을 작성하였고 이를 통해 <StyledText>컴퓨팅 사고력을 높이고 사용자 경험이 어떻게 하면 더욱 향상</StyledText>될수 있는지 알게 되었습니다. 이 과정에서 로직을 작성하기가 생각보다 쉽지 않았는데 이후에
                    '모던 자바스크립트 DeepDive'를 통해 JavaScript를 더욱 깊게 공부할 좋은 동기부여가 되어 현재 진행중입니다.<br /><br />


                    <StyledText>Express</StyledText> 프레임워크의 app, router, middleWare 구조를 약간이나마 경험해볼수 있었는데, 우리 팀이 구현하고 싶은 기능중 하나였던 실제 매물 이미지 업로드 기능을 구현하였습니다.
                    간단하게 요약하자면 사용자에게 input을 이용하여 이미지 파일을 입력받아 Express/public 폴더에 jpg파일로 저장받아 이를 url 형태로 변환하여 <StyledText>MySQL</StyledText>에 경로를 저장 후 입찰 또는 매물 등록이
                    완료 될 경우 이미지를 다시 클라이언트 측에 보여주는 기능이였습니다. 이를 구현하기 위해 <StyledText>Axios 통신</StyledText>을 해야했고 <StyledText>Post</StyledText>방식으로 백엔드 서버에 데이터를 전송하고 이를
                    쿼리문을 사용하여 데이터베이스에 url 형태로 저장 하였습니다. 이 과정에서 <StyledText>Multer</StyledText> 라이브러리를 사용하였고 처음으로 백엔드와 프론트엔드가 서로 상호작용하는 기능을 구현해본 굉장히 소중한 경험이였습니다.<br/><br/>

                    나아가 포인트 충전로직을 구현해보았는데 실제 화폐를 이용한 충전은 아쉽게도 구현하지 못했지만 클라이언트가 가상계좌를 선택하고 금액을 입력하면 데이터베이스의 Point 칼럼에 입력한 금액이 저장되고(post), 이 데이터를 조회(get)하여 로그인된 userId의 point를 
                    다시 클라이언트측에 출력하는 기능까지 구현해 보았습니다.<br/><br/>

                    이후 Aws를 이용한 배포가 진행되는 과정을 지켜보았는데 env 파일을 수정하고 데이터 경로들을 수정했어야 했는데 추후 배포에 관한 지식을 얻기위해 노력 해야한다라고 느끼게 되었습니다. <br /><br />

                    첫 팀프로젝트를 진행하며 팀원들과 협업 및 의사소통 과정에서 서로의 의견을 정확하게 이해하기 위해 시각적인 도구를 이용하려고 노력하였으며 서로 다른 수준의 지식수준과 기술스택으로 최대 효율을 낼수 있게 하는것이 목표라고 생각하였고
                    크고 작게 서로 교육하고 교육 받으며 서비스를 구현해 나가는 과정에서 굉장히 큰 보람과 뿌듯함을 느꼈습니다.
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
