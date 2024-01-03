import { colors } from "assets/styles/Variable";
import styled from "styled-components";
import Observer from "./common/element/Observer";
import MainVisual from "./main/MainVisual";
import MainAbout from "./main/MainAbout";
import MainSkills from "./main/MainSkills";
import MainEnd from "./main/MainEnd";


function MainTemplate() {
  return (
    <MainWrap>
      <Observer percentage={0.25}>
        <MainVisual />
        <MainAbout />
        <MainSkills />
        <MainEnd />
      </Observer>
    </MainWrap>
  )
}
export default MainTemplate;

const MainWrap = styled.div`
  width:100%;
  border:1px solid red;
  height:100vh;
  min-height:500px;
  background:${colors.bgBlack};
`;
