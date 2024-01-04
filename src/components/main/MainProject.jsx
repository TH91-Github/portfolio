import styled from "styled-components";
import TypingTag from "components/common/element/TypingTag";
import * as S from "./Styled";

const VisualText = ["TEST P"];
const typingOpt = {
  fontSize:'48px',
  fontWeight: 600,
  speed: 150,
}
function MainProject ({view}){
  return (
    <ProjectWrap>
      <S.MainInner>
        <S.TitleBox>
          <TypingTag 
            titData={VisualText}
            view={view} 
            typingOpt={typingOpt}
          />
        </S.TitleBox>
      </S.MainInner>
    </ProjectWrap>
  )
}
export default MainProject;

const ProjectWrap = styled.div`
  position:relative;
  height:100svh;
  border:1px solid green;
  background:#fff;
`;