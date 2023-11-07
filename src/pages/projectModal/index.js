import { Modal, Button } from 'react-bootstrap';
import { ExplainContainer, SkillImg, SkillImgContainer, SubTitle, WbsImg } from '../../components/Project/bookstock';
import reactImg from '../../image/reactImg.png';
import nodeImg from '../../image/nodejsImg.png';
import bootstrapImg from '../../image/bootstrapImg.png';
import mysqlImg from '../../image/mySqlImg.png';
import notionImg from '../../image/notionImg.png';
import googleDriveImg from '../../image/googleDriveImg.png';
import awsImg from '../../image/awsImg.png';
import githubImg from '../../image/githubImg.png';
import wbsImg from '../../image/wbsImg.jpg';
export const ProjectModal1 = ({ isOpen, isClose }) => {
    return (
        <Modal
            size='lg'
            show={isOpen}
            onHide={isClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header closeButton>
                <Modal.Title>BookStock 프로젝트</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubTitle>SKILLS</SubTitle>
                <hr />
                <SkillImgContainer>
                    <SkillImg src={reactImg} />
                    <SkillImg src={nodeImg} />
                    <SkillImg src={bootstrapImg} />
                    <SkillImg src={mysqlImg} />
                </SkillImgContainer>

                <SubTitle>2.Corabolation Tool</SubTitle>
                <hr />
                <SkillImgContainer>
                    <SkillImg src={notionImg} />
                    <SkillImg src={googleDriveImg} />
                    <SkillImg src={awsImg} />
                    <SkillImg src={githubImg} />
                </SkillImgContainer>
            </Modal.Body>
            <Modal.Body>
                <SubTitle>3.WBS</SubTitle>
                <hr />
                <WbsImg src={wbsImg} />

                <SubTitle>4.Project 설명</SubTitle>
                <hr />
                <ExplainContainer>
                    기간: 2023.09 ~ 10<br />
                    구성: 프론트엔드 2명, 백엔드 2명<br />
                    주요업무:UI/UX 및 자바스크립트를 이용한 간단한 기능구현<br />
                    목적:첫 팀 프로젝트로써 실제 기능구현과 협업, 배포<br />
                </ExplainContainer>

                <SubTitle>5.Project Model</SubTitle>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={isClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
