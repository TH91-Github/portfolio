import { useState } from "react";
import styled from "styled-components";
import { fadeInY } from "assets/styles/StyledCm";
import TypingTag from "components/common/element/TypingTag";

const VisualText = ["TAG를 입력중","TEXT","TEST"];
const typingOpt = {
  fontSize:'96px',
  fontWeight: 600,
  speed: 150,
  dark: true
}
function MainVisual({view}){
  const [nextStage, setNextStage] = useState(false);
  
  const tagAniEnd = () => {
    setNextStage(true);
  }
  return (
    <VisualWrap>
      <VisualTextBox> 
        <TypingTag 
          titData={VisualText}
          view={view} 
          typingOpt={typingOpt}
          endTag={false} 
          endFunc={tagAniEnd}
        />
      </VisualTextBox>
      {nextStage && <TextScroll>아래로 </TextScroll>}
    </VisualWrap>
  )
}
export default MainVisual;

const VisualWrap = styled.div`
  position:relative;
  width:100%;
  height:100vh;
  border:1px solid red;
`;
const VisualTextBox = styled.div`
  position:absolute;
  top:50%;
  width:100%;
  transform: translateY(-50%);
  text-align:center;
`;

const TextScroll = styled.div`
  position:absolute;
  bottom:20px;
  left:50%;
  transform: translateX(-50%);
  color:#fff;
  ${fadeInY(1)}
`;