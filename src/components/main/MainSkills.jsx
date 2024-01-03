import styled from "styled-components";
import * as S from "./Styled";
import TypingTag from "components/common/element/TypingTag";

const VisualText = ["TEST"];
const typingOpt = {
  fontSize:'48px',
  fontWeight: 600,
  speed: 150,
}
function MainSkills({view}) {
  return (
    <SkillsWrap>
      <S.MainInner>
        <S.TitleBox>
          <TypingTag 
            titData={VisualText}
            view={view} 
            typingOpt={typingOpt}
          />
        </S.TitleBox>
      </S.MainInner>
    </SkillsWrap>
  )
}
export default MainSkills;

const SkillsWrap = styled.div`
  height:100vh;
  border:1px solid blue;
`;