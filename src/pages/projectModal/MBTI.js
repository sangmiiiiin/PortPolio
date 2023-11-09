import { Modal, Button } from 'react-bootstrap';
import { DeploymentContainer, DeploymentURL, ExplainContainer, NetlifyText, SkillImg, SkillImgContainer, StyledText, SubTitle } from '../../components/Project/ModalComponent';
import HtmlCssJsImg from '../../image/HTMLCSSJS.png';
import NetlifyImg from '../../image/netlify.png';
import { Link } from 'react-router-dom';
export const ProjectModal2 = ({ isOpen, isClose }) => {
    return (
        <Modal
            size='lg'
            show={isOpen}
            onHide={isClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header style={{backgroundColor: "#333", color: "white"}} closeButton>
                <Modal.Title>MBTI 성향 조합 테스트</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubTitle>🔗 Deployment URL</SubTitle>
                <hr />
                <DeploymentURL>
                    <Link to="https://sangmin-mbti.netlify.app">https://sangmin-mbti.netlify.app 👉🏻</Link>
                </DeploymentURL>
                
                <SubTitle>📌 Summary</SubTitle>
                <hr />
                <ExplainContainer>
                    <strong>요즘 가장 핫한 MBTI ! <br />
                        요즘 지인들을 만나면 MBTI 얘기는 필수가 되었습니다. 간단한 조합 궁합을 알아보기 위해 제작하였습니다.</strong> <br /><br />
                    첫번째 개인프로젝트 입니다. 의도적으로 <StyledText>VANILLA.js</StyledText> 를 이용하여 <StyledText>컴퓨팅 사고</StyledText>를 높이기 위함에 목적을 두고 진행하였습니다.
                    <StyledText>addEventListener</StyledText>와 <StyledText>onClick</StyledText> 이벤트, <StyledText>조건문과 반복문을</StyledText> 이용해 사용자에게 보여지는 화면에 변화를 주었으며, 특히 <StyledText>for in문</StyledText>
                    을 이용해서 <StyledText>객체 리터럴</StyledText>안에 데이터를 불러와 사용하는 등, 함수를 짤 때 로직의 흐름을 구성하고 예측 가능한 결과가 보여지게끔 하는 등의 경험할 수 있는 아주 즐거운 프로젝트 였습니다.


                    <ul>
                        <h4 style={{marginTop:"5vh"}}>주요기능</h4>
                        <li> ☑️ MBTI 조합 결과 조회</li>
                    </ul>
                </ExplainContainer>
                <SubTitle>🔨 SKILLS</SubTitle>
                <hr />
                <SkillImgContainer>
                    <SkillImg src={HtmlCssJsImg} style={{width: "30vw"}}/>
                </SkillImgContainer>
                <SubTitle>🌐 Deployment</SubTitle>
                <hr />
                <DeploymentContainer>
                    <SkillImg src={NetlifyImg} />
                </DeploymentContainer>
                <NetlifyText>Netlify</NetlifyText>
                
                

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={isClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
