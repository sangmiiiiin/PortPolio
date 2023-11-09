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
                    인생 첫 프로젝트이자 <StyledText>React</StyledText>와 <StyledText>Express</StyledText>를 이용하여 전체 서비스를 구현하는 과정에서 컴포넌트를 만들고
                    <StyledText>Rest API</StyledText> 를 이용해 백엔드와 통신하며 협업의 포문을 열었고.
                    <StyledText>Bootstrap</StyledText> 템플릿이 아닌 한땀 한땀 직접 코드를 작성하였으며, <StyledText>flex와 grid 레이아웃</StyledText>에 대해 배울수 있었습니다.<br /><br />
                    브라우저에서 사용자에게 이미지를 입력받아 제출 후 <StyledText>Axios</StyledText> 통신하여 백엔드에서 <StyledText>multer</StyledText> 라이브러리를 이용해 데이터베이스에 url을 저장, 그 url을 이용하여
                    다시 프론트에 이미지를 출력하는 기능을 만들며 백엔드와 통신하는 기초 로직을 알게 되는 좋은 기회가 되었습니다.

                    <ul>
                        <h4 style={{ marginTop: "5vh" }}>주요기능</h4>
                        <li> ☑️ 도서 역경매 등록</li>
                        <li> ☑️ 도서 역경매 입찰</li>
                        <li> ☑️ 도서 역경매 매물 검색</li>
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
                    하나의 서비스를 만들기 위해 기획, 개발, 배포를 모두 체험해 볼수 있는 귀중한 프로젝트 경험이였습니다.
                    React를 배우고 Component를 제작하는 것으로 시작, Bootstrap을 이용하여 UI/UX를 만들고, 
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
