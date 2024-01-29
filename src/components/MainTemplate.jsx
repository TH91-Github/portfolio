import styled from "styled-components";
import Observer from "./common/element/Observer";
import MainVisual from "./main/MainVisual";
import MainAbout from "./main/MainAbout";
import MainSkills from "./main/MainSkills";
import MainEnd from "./main/MainEnd";
import MainProject from "./main/MainProject";
import { breakPoints } from "assets/styles/Variable";
import { useOutletContext } from "react-router-dom";


const percentage = 0.25;
function MainTemplate() {
  const {MainList} = useOutletContext();
  console.log(MainList)
  return (
    <MainWrap className="main">
      <Observer percentage={percentage}>
        <MainVisual/>
      </Observer>
      <Observer percentage={percentage}>
        <MainAbout sectionTitle={MainList[1]} />
      </Observer>
      <Observer percentage={percentage}>
        <MainSkills sectionTitle={MainList[2]} />
      </Observer>
      <Observer percentage={percentage}>
        <MainProject sectionTitle={MainList[3]} />
      </Observer>
      <Observer percentage={percentage}>
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
