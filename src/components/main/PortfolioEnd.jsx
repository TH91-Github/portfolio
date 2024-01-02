import Typing from "components/common/element/Typing";
import styled from "styled-components";


const endText = ["감사합니다.", "TEXT/"]
function PortfolioEnd() {
  return (
    <EndWrap>
      <p>&lt;<Typing typingData={endText} />&gt;</p>
    </EndWrap>
  )
}
export default PortfolioEnd;

const EndWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  & > p {
    font-size:96px;
    font-weight:600;
    line-height:1.5;
  }
`;