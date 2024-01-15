import styled from "styled-components";
import Observer from "./common/element/Observer";
import MainVisual from "./main/MainVisual";
import MainAbout from "./main/MainAbout";
import MainSkills from "./main/MainSkills";
import MainEnd from "./main/MainEnd";
import MainProject from "./main/MainProject";
import { breakPoints } from "assets/styles/Variable";
import { useOutletContext } from "react-router-dom";


function MainTemplate() {
  const {MainList} = useOutletContext();
  return (
    <MainWrap className="main">
      <Observer percentage={0.25}>
        <MainVisual />
        <MainAbout sectionTitle={MainList[1]} />
        <MainSkills sectionTitle={MainList[2]} />
        <MainProject sectionTitle={MainList[3]} />
        <MainEnd />
      </Observer>
    </MainWrap>
  )
}
export default MainTemplate;

const MainWrap = styled.div`
  position:relative;
  width:100%;
  max-width:${breakPoints.maxPc}px;
  min-width:${breakPoints.minMo}px;
  margin:0 auto;
`;
