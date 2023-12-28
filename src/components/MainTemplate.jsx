import { colors } from "assets/styles/Variable";
import styled from "styled-components";
import Visual from "./main/Visual";
import Observer from "./common/element/Observer";

function MainTemplate() {
  return (
    <MainWrap>

      <Observer>
        <Visual number={1} />
        <Visual number={2} />
        <Visual number={3} />
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