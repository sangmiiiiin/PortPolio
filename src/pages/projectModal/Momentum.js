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
                    <StyledText>외부 API</StyledText>를 이용하여<br /><br />

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
                <StyledText>VanilaJS</StyledText>를 사용하여
                    JS가 제공하는 기능을
                    사용하고자 노력 하였습니다<br/>

                    내장함수와 메서드가 훌륭하여 여러가지 기능을 따라 구현해보며
                    프로그래밍 언어로써 JS의 위대함을 다시한번 깨닫게 되는 계기가 되었습니다.<br/><br/>



                    Date 객체를 아용해 시계를 구현하였는데 시간, 분, 초를 각각 변수에 담아주고 문자열로 변환, padStart 내장 함수를 이용하여
                    한 자리수 숫자는 앞에 반드시 0을 붙여서 출력되도록 표시하여 사용자 경험을 높였고 QuarySelector와 innerText를 사용하여
                    사용자에게 현재 시각을 표시 받을수 있도록 하였습니다. setInterval을 이용하여 1초마다 함수를 재실행 하여 시간이 흐르는것 처럼
                    보이게 하였으며 어플리케이션 실행시 바로 현재 시간을 알수 있도록 setInterval 전에 최초 1회 함수를 실행하도록 로직을 작성했습니다
                    추후에 어플리케이션을 만들때 이와 같은 로직을 활용하여 시계를 구현해 낼수 있겠다는 자신감을 얻을 수 있었습니다.
                    <br/><br/>

                    HTML 요소를 JS로 조작하는 개념을 확실하게 정립할 수 있었습니다.<br/>
                    먼저 CSS로 미리 임의의 class에 display: none 속성을 부여하고 QuarySelector와 classList, 조건문을 사용하여
                    동적으로 class를 부여하여 조건에 따라 사용자에게 보여주는 요소를 달리 하게 하였습니다.<br/>
                    이 과정에서 localStorage를 이용하여 클라이언트가 입력한 아이디를 저장하고 그 안에 데이터가 있다면 사용자 이름에 맞는 인사말을,
                    없다면 로그인 화면을 보여주도록 하는 과정에서 데이터베이스의 역할을 localStorage로 대체하며 간단한 기능구현을 해보았고
                    추후에는 실제 데이터베이스와 쿼리문을 통해 백엔드 통신이 가능하게끔 구현해보고자 하는 동기부여를 얻을 수 있었습니다.<br/><br/>

                    배열안에 객체를 사용하여 명언과 작가를 각각 다른 키 프로퍼티에 담아 배열의 길이만큼 Math 객체의 random, floor 메서드를 사용하여 랜덤한 명언을
                    출력하게 하였고 이와 같은 원리로 배경화면 또한 어플리케이션이 재시작 되거나 새로고침시 다른 배경화면을 보여주게끔 구현하였습니다.
                    객체와 배열을 다루고 Math 객체를 이런식으로 활용할 수 있다고 알게되어 조금 더 컴퓨팅 사고력을 높일 수 있는 경험이였다고 생각됩니다.<br/><br/>

                    할일 목록을 SPA 처럼 구현해 보았는데 이 부분의 로직이 생각보다 어렵게 느껴졌습니다.
                    document.createElement와 appendChild를 이용하여 JS를 이용하여 HTML 요소를 추가할 수 있었고 사용자에게 입력받은 데이터를
                    저장하기 위해 localStorage를 사용하였는데 이때 사용가능한 배열로 만들기위해 JSON객체의 stringify와 parse를 처음 사용해 보았습니다.
                    데이터 타입을 사용가능하게 바꾸는 과정에서 어려움을 느꼈지만 콘솔과 typeof를 이용하여 데이터 타입을 확인하며 문제를 해결해 나갔습니다
                    Delete를 구현할때 filter 메소드를 사용하면서 true로 반환되는것을 배열에서 남기고 false를 제외하여 새로운 배열에 담는다는 사실을 알게되어
                    엄격한 부등 연산자를 통해 클릭한 요소의 id와 li의 id와 비교하여 같지 않으면 true를 반환하게 하고 같으면 false를 반환하게 하여 
                    이 배열을 실제 localStorage의 배열로 업데이트 함으로써 CRD 구현에 성공 하였습니다. 


                    마지막으로 위치 정보와<StyledText>외부 API</StyledText>를 이용하여 내가 있는 위치의 날씨와 온도를 브라우저에 문자열로 출력 했습니다
                    JSON형태로 데이터를 받아오는것을 인지하였고 위도와 경도, APIKEY를 URL에 담아 fetch를 이용하여 통신했으며 .then 메서드를 이용하여
                    비동기 처리를 함으로써 JS의 다른 코드들이 동작을 할수 있도록 구현하였으며 위치정보를 통신할수 없다면 에러처리로 경고창을 띄워 알려주는 형식으로
                    진행하였습니다 navigator와 geolocation, getCurrentPosition을 사용해 보며 JS의 내장되어 있는 객체와 메서드가 다양하다는것을 알수 있었고
                    추후에 어플리케이션을 제작할시에 이를 검색하고 사용하는 방법을 터득할 수 있었습니다.
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
