import styled from "styled-components";
import TypingTag from "components/common/element/TypingTag";

const VisualText = ["TAG를 입력중","TEXT","TEST"];
const typingOpt = {
  fontSize:'96px',
  fontWeight: 600,
  speed: 150,
}
function MainAbout ({view}){
  return (
    <AboutWrap>
      <TypingTag 
        titData={VisualText}
        view={view} 
        typingOpt={typingOpt}
        endTag={false} 
      />
    </AboutWrap>
  )
}
export default MainAbout;

const AboutWrap = styled.div`
  height:100vh;
  border:1px solid green;
`;