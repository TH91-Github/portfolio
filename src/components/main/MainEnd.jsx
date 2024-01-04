import TypingTag from "components/common/element/TypingTag";
import styled from "styled-components";


const endText = ["감사합니다.", "TEXT"];
const typingOpt = {
  fontSize:'96px',
  fontWeight: 600,
  speed: 150,
}
function MainEnd({view}) {
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