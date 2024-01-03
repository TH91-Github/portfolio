import { useState } from "react";
import styled from "styled-components";
import TypingTag from "components/common/element/TypingTag";
import { colors } from "assets/styles/Variable";

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
      {
        nextStage && 
          <TextScroll>
            <span>Scroll</span>
          </TextScroll>
      }
      
    </VisualWrap>
  )
}
export default MainVisual;

const VisualWrap = styled.div`
  position:relative;
  width:100%;
  height:100svh;
  min-height:600px;
  background:${colors.bgBlack};
`;
const VisualTextBox = styled.div`
  position:absolute;
  top:50%;
  width:100%;
  transform: translateY(-50%);
  text-align:center;
`;
const TextScroll = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  bottom:30px;
  left:50%;
  transform: translateX(-50%);
  animation: textFadeIn 1s;
  @keyframes textFadeIn {
    0% {
      opacity:0;
      transform: translate(-50%, 100%);
    }
    100%{
      opacity:1;
      transform: translate(-50%, 0);
    }
  }
  &::before, &::after{
    position:absolute;
    left:50%;
    width:12px;
    height:2px;
    border-radius:3px;
    background:#fff;
    content:"";
  }
  &::before{
    bottom:-5px;
    transform: translateX(calc(-50% - 4px)) rotate(-140deg);
    animation: arrowDownL 2s .1s infinite;
  }
  &::after{
    bottom:-5px;
    transform: translateX(calc(-50% + 4px)) rotate(-40deg);
    animation: arrowDownR 2s .1s infinite;
  }
  & > span {
    padding-bottom:2px;
    font-size:14px;
    color:#fff;
    &::before, &::after{
      position:absolute;
      left:50%;
      width:12px;
      height:2px;
      border-radius:3px;
      background:#fff;
      opacity:0;
      content:"";
    }
    &::before{
      bottom:-15px;
      transform: translateX(calc(-50% - 4px)) rotate(-140deg);
      animation: arrowDownL 2s infinite;
    }
    &::after{
      bottom:-15px;
      transform: translateX(calc(-50% + 4px)) rotate(-40deg);
      animation: arrowDownR 2s infinite;
    }
  }
  @keyframes arrowDownL {
    0%, 100%{
      opacity:.3;
      transform: translate(calc(-50% - 4px), 0) rotate(-140deg);
    }
    50%{
      opacity:.7;
      transform: translate(calc(-50% - 4px), 5px) rotate(-140deg);
    }
  }
  @keyframes arrowDownR {
    0%, 100%{
      opacity:.3;
      transform: translate(calc(-50% + 4px), 0) rotate(-40deg);
    }
    50%{
      opacity:.7;
      transform: translate(calc(-50% + 4px), 5px) rotate(-40deg);
    }
  }
`;
