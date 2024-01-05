import * as SC from "assets/styles/StyledCm";
import { colors, transitions } from "assets/styles/Variable";
import styled from "styled-components";

function TabListBtn ({tabData, clickEvent}) {
  const tabClick = (e,i) => {
    clickEvent(e,i);
  }
  return (
    <div className="tab">
      <TabUl>
        {
          tabData?.map((item,idx) => (
            <li key={idx}>
              <TabBtn onClick={()=>tabClick(item,idx)}>{item.title}</TabBtn>
            </li>
          )) 
        }
      </TabUl>
    </div>
  )
}
export default TabListBtn;

const TabUl = styled.ul`
  display:flex;
  justify-content:center;
  gap: ${props => props.$gap || '10px'};
`;
const TabBtn = styled(SC.Button)`
  padding:10px 15px;
  border-radius:5px;
  border:1px solid ${colors.bgWhite};
  transition: ${transitions.base};
  &:hover {
    border-color:${colors.bgBlack};
    background:${colors.bgWhite};
    color:${colors.bgBlack};
  }
`;