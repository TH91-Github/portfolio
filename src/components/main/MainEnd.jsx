import TypingTag from "components/common/element/TypingTag";
import { useSelector } from "react-redux";
import styled from "styled-components";

const endText = ["감사합니다.", "TEXT"];

function MainEnd({view}) {
  const isMobile = useSelector((state) => state.mobileChk);
  const typingOpt = {
    fontSize:isMobile? '42px':'96px',
    fontWeight: 600,
    speed: 150,
  }
  return (
    <EndWrap>
      <TypingTag 
        titData={endText}
        view={view} 
        typingOpt={typingOpt}
      />
    </EndWrap>
  )
}
export default MainEnd;

const EndWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  height:100svh;
  background:#fff;
`;