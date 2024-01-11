import { Button } from "assets/styles/StyledCm";
import styled from "styled-components";


function ProjectPopup ({popupData, popupClosed}){

  console.log(popupData)
  return(
    <PopupInner className="popup__inner">
      <p className="tit">Title</p>
      <div className="p">
        투입인원
        기간
        회사
      </div>
      <p>작업 설명</p>
      <p>작업 후기</p>
      <p>사용 기술</p>
      <div className="btn-wrap">
        <CloseBtn onClick={()=> popupClosed()}>닫기</CloseBtn>
      </div>
    </PopupInner>
  )
}
export default ProjectPopup;

const PopupInner = styled.div`
  position:absolute;
  z-index:10;
  top:50%;
  left:50%;
  width:80%;
  min-width:500px;
  height:80%;
  min-height:500px;
  background:#fff;
  border:1px solid red;
  transform: translate(-50%, -50%);
`;

const CloseBtn = styled(Button)`

`;