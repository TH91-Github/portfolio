import styled from "styled-components";
import TypingTag from "components/common/element/TypingTag";

const VisualText = ["Skills"];
const typingOpt = {
  fontSize:'96px',
  fontWeight: 600,
  speed: 150,
}
function MainSkills({view}) {
  return (
    <SkillsWrap>
      <TypingTag 
        titData={VisualText}
        view={view} 
        typingOpt={typingOpt}
        endTag={false} 
      />
    </SkillsWrap>
  )
}
export default MainSkills;

const SkillsWrap = styled.div`
  height:100vh;
  border:1px solid blue;
`;