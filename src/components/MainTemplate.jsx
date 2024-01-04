import styled from "styled-components";
import Observer from "./common/element/Observer";
import MainVisual from "./main/MainVisual";
import MainAbout from "./main/MainAbout";
import MainSkills from "./main/MainSkills";
import MainEnd from "./main/MainEnd";
import MainProject from "./main/MainProject";


function MainTemplate() {
  return (
    <MainWrap>
      <Observer percentage={0.25}>
        <MainVisual />
        <MainAbout />
        <MainSkills />
        <MainProject />
        <MainEnd />
      </Observer>
    </MainWrap>
  )
}
export default MainTemplate;

const MainWrap = styled.div`
 
`;
