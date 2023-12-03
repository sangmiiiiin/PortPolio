import { Modal, Button } from 'react-bootstrap';
import { ExplainContainer,  SkillImg, SkillImgContainer, StyledText, SubTitle} from '../../components/Project/ModalComponent';
import htmlcssjsImg from '../../image/HTMLCSSJS.png';


export const ProjectModal4 = ({ isOpen, isClose }) => {
    return (
        <Modal
            size='lg'
            show={isOpen}
            onHide={isClose}
            dialogClassName="modal-100w"
        >
            <Modal.Header style={{ backgroundColor: "#333", color: "white" }} closeButton>
                <Modal.Title>Momentum APP</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <SubTitle>📌 Summary</SubTitle>
                <hr />
                <ExplainContainer>
                    <strong>브라우저 첫 화면을 장식하는 Momentum APP을 클론코딩 하였습니다.</strong> <br /><br />
                    <StyledText>VanilaJS</StyledText>를 사용하여<br />
                    JS가 제공하는 기능을<br />
                    사용하고자 노력 하였습니다<br /><br />

                    배경이미지와 명언을 <br />
                    랜덤하게 보여주거나<br /><br />

                    Date 객체를 아용해<br />
                    시계를 구현하고<br /><br />

                    한 자리수는 앞에 0을<br />
                    표시 하게 끔 처리 했습니다<br /><br />

                    QuarySelector와 classList을<br />
                    이용하여 스타일이 적용된 class를<br /><br />

                    HTML 요소에 동적으로 부여하였고<br />
                    이 과정에서 localStorage를 <br /><br />

                    이용하여 사용자의 입력값을 저장해<br />
                    이 값이 있다면 보여줄 요소를 다르게 구현했고<br /><br />

                    todolist를 구현하였습니다.<br />
                    이 부분의 로직을 이해하는게 어려웠는데<br />

                    JSON 객체를 이용하여 데이터 타입을<br />
                    사용 가능하게 파싱 하고 <br /><br />

                    데이터를 배열에서 객체로 변경해<br />
                    고유 id값을 넣어 어떤 요소가 선택 됐는지<br />
                    식별이 가능하게 하는 등<br /><br />

                    복잡한 로직이 필요하여<br />
                    천천히 JS의 내장함수나 메서드들을<br />
                    정리하며 코딩하였습니다.<br /><br />

                    마지막으로 위치 정보와<br />
                    외부 API를 이용하여<br /><br />

                    내가 있는 위치의 날씨와 온도를<br />
                    브라우저에 문자열로 출력 했습니다<br /><br />

                    이 과정에서 fetch를 이용하였고<br />
                    백엔드 통신에 대하여 에러 처리와 <br /><br />

                    비동기 처리하기 위해 then을 사용하여<br />
                    JS의 위대함을 다시한번 느낄 수 있었습니다.<br />
                    <br />
                    <ul>
                        <h4 style={{ marginTop: "5vh" }}>주요기능</h4>
                        <li> ☑️ 랜덤한 배경, 명언 출력</li>
                        <li> ☑️ 시계</li>
                        <li> ☑️ 할일 목록 토글</li>
                        <li> ☑️ 반응형 웹</li>
                        <li> ☑️ 날씨 정보 조회</li>
                        <li> ☑️ 사용자 이름 저장 및 예외처리</li>
                    </ul>
                </ExplainContainer>
                <SubTitle>🔨 SKILLS</SubTitle>
                <hr />
                <SkillImgContainer>
                    <SkillImg src={htmlcssjsImg} style={{ width: "50vw" }} />
                </SkillImgContainer>

                <SubTitle>🔍 Meaning</SubTitle>
                <hr />
                <ExplainContainer>

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
