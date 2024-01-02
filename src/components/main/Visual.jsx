import { useEffect, useState } from "react";
import styled from "styled-components";
import Typing from "components/common/element/Typing";
import { fadeInY } from "assets/styles/StyledCm";

const VisualText = ["TAG를 입력중","TEXT","TEST"];
function Visual({view, duration}){
  console.log(duration)
  const [aniOn, setAniOn] = useState(false);
  const [nextStage, setNextStage] = useState(false);
  let textSpeed = 150;
  useEffect(()=>{
    if(view){
      setTimeout(()=>{
        setAniOn(true);
      },1500)
    } 
  },[view])
  const TagAniEnd = () => {
    setNextStage(true);
  }
  return (
    <VisualWrap>
      <VisualTextBox $align={aniOn} >
        <TextTag className={`tag ${view ? 'on' : '' }`}>
          &lt;
          {aniOn && <Typing typingData={VisualText} inputS={textSpeed} completion={TagAniEnd} />}
          {!aniOn && ` /`}
          &gt;
        </TextTag>
      </VisualTextBox>
      {nextStage && <TextScroll>아래로 </TextScroll>}
    </VisualWrap>
  )
}
export default Visual;

const VisualWrap = styled.div`
  position:relative;
  width:100%;
  height:100vh;
  border:1px solid red;
`;
const VisualTextBox = styled.div`
  display:flex;
  flex-direction: ${props => props.$align ? 'column': 'row' };
  justify-content:center;
  align-items:center;
  position:absolute;
  top:50%;
  width:100%;
  transform: translateY(-50%);
  text-align:center;
`;
const TextTag = styled.span`
  display:inline-block;
  font-size:96px;
  font-weight:600;
  line-height:1.5;
  color:#fff;
  opacity:0;
  &.on{
    ${fadeInY(1.5)}
  }
`;

const TextScroll = styled.div`
  position:absolute;
  bottom:20px;
  left:50%;
  transform: translateX(-50%);
  color:#fff;
  ${fadeInY(1)}
`;