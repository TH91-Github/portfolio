import styled from "styled-components";


function ProjectPopup ({popupData}){
  console.log(popupData)
  return(
    <PopupWrap className="popup">
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
      </PopupInner>
    </PopupWrap>
  )
}
export default ProjectPopup;

const PopupWrap = styled.div`
  position:fixed;
  z-index:10;
  width:100%;
  height:100%;
`;
const PopupInner = styled.div`
  position:absoute;
  top:50%;
  left:50%;
  width:80%;
  height:80%;
  background:#fff;
  border:1px solid red;
  transform: translate(-50%, -50%);
`;