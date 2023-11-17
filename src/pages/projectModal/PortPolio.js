import { Modal, Button } from 'react-bootstrap';
import { DeploymentContainer, DeploymentURL, ExplainContainer, NetlifyText, SkillImg, SkillImgContainer, StyledText, SubTitle } from '../../components/Project/ModalComponent';
import HtmlCssJsImg from '../../image/HTMLCSSJS.png';
import NetlifyImg from '../../image/netlify.png';
import ReactImg from '../../image/reactImg.png';
import BootstrapImg from '../../image/bootstrapImg.png';
import StyledComponentImg from '../../image/styled-components.svg';
import { Link } from 'react-router-dom';
export const ProjectModal3 = ({ isOpen, isClose }) => {
    return (
        <Modal
            size='lg'
            show={isOpen}
            onHide={isClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header style={{backgroundColor: "#333", color: "white"}} closeButton>
                <Modal.Title> PortPolio 웹사이트 만들기 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubTitle>🔗 Deployment URL</SubTitle>
                <hr />
                <DeploymentURL>
                    <Link to="https://sm-portpolio.netlify.app/">https://sm-portpolio.netlify.app/ 👉🏻</Link>
                </DeploymentURL>
                
                <SubTitle>📌 Summary</SubTitle>
                <hr />
                <ExplainContainer>
                    <strong>포트폴리오 제작을 위해 만든 웹사이트 입니다! <br />
                        지금 보고 계시는 이 웹사이트 입니다.</strong> <br /><br />
                    <StyledText>React</StyledText>와 프로젝트때 사용하지 못한 <StyledText>StyledComponent</StyledText>
                    를 이용하여 CSS 문법을 그대로 사용하며 컴포넌트의 코드 가독성을 높이려 노력하였고, 
                    <StyledText>keyframes</StyledText>을 이용하여 애니메이션 등 시각적 효과를 사용해 볼 수 있었습니다.<br />
                    <StyledText>useEffect와 useState</StyledText>를 사용하여 특정 Scroll 위치에서 애니메이션이 동작하도록 구현하였으며 <StyledText>CustomHook</StyledText>을 사용하여 useEffect를 분리해 사용, hook의 재사용성을 높이고 코드 가독성을 높일수 있었습니다.<br />
                    StyledComponent를 사용하니 컴포넌트 파일들이 많아져 로딩이 느리다는 단점이 있다는 사실도 알수 있었습니다. 이후에는 협업에 특화되어있는 CSS 전처리기 <StyledText>SASS를</StyledText>
                    이용하여 코드 가독성을 높이며 성능또한 우수한 웹 애플리케이션을 제작해보자는 방향성도 갖게 하는 프로젝트 였습니다.
                    
                    <br /><br /><br />

                    부트 캠프에서 프로젝트를 진행할 당시 bootstrap을 인라인 스타일로 사용하여 다소 컴포넌트 코드 가독성이 아쉬웠지만
                    이번 포트폴리오 웹페이지를 만들면서 스타일드 컴포넌트를 이용해서 각 컴포넌트를 확실하게 분리하려고 노력했고 사용해보지 못한 CSS 요소들을 사용해보면서
                    더욱 동적인 웹페이지와 사용자가 보기에 이목을 끌수 있는 방법에 대해 생각해볼수 있었습니다.<br /><br />

                    <StyledText>GitMoji</StyledText>를 처음으로 사용해 버전관리에 좀 더 가독성 좋은 커밋을 하려고 노력하였으며 <br />
                    <StyledText>Netlify</StyledText>를 이용해 처음으로 나만의 프로젝트를 배포하게 되어 엄청난 성취감을 느낄수 있었습니다.
                    
                    <ul>
                        <h4 style={{marginTop:"5vh"}}>주요기능</h4>
                        <li> ☑️ 자기소개</li>
                        <li> ☑️ 인적 사항</li>
                        <li> ☑️ 기술 스택</li>
                        <li> ☑️ Github 및 SNS 링크</li>
                        <li> ☑️ 프로젝트</li>
                    </ul>
                </ExplainContainer>
                <SubTitle>🔨 SKILLS</SubTitle>
                <hr />
                <SkillImgContainer>
                        <SkillImg src={HtmlCssJsImg} style={{ width: "60%" }}/>
                </SkillImgContainer>
                <SkillImgContainer>
                        <SkillImg src={ReactImg} style={{ width: "23%"}}/>
                        <SkillImg src={BootstrapImg} style={{ width: "23%"}}/> 
                        <SkillImg src={StyledComponentImg} style={{ width: "23%"}}/>
                </SkillImgContainer>
                
                <SubTitle>🌐 Deployment</SubTitle>
                <hr />
                <DeploymentContainer>
                    <SkillImg src={NetlifyImg} style={{ width: "23%"}} />
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
