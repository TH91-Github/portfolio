import * as SC from "assets/styles/StyledCm";
import { colors, transitions } from "assets/styles/Variable";
import styled from "styled-components";

function TabListBtn ({tabData, clickEvent, animation, delay}) { // animation, delay: 
  const tabClick = (e,i) => {
    clickEvent(e,i);
  }
  // animation 값 있을 때만 animation option
  const aniOpt = animation 
    ? {
      name: animation ?? false,
      d : delay ? (delay*0.001) : 0, // 입력 후 삭제까지 시간
    }
    : false

  return (
    <TabBtnList $delay={aniOpt.d} className={'tab '+(aniOpt ? aniOpt.name : '') }>
      <TabUl>
        {
          tabData?.map((item,idx) => (
            <li key={idx}>
              <TabBtn onClick={()=>tabClick(item,idx)}>
                <span>
                  {item.title}
                </span>
              </TabBtn>
            </li>
          )) 
        }
      </TabUl>
    </TabBtnList>
  )
}
export default TabListBtn;

const TabBtnList = styled.div`
  &.fadeIn {
    color:;
    opacity:0;
    animation: ${SC.fadeIn} 1s ${props => props.$delay}s both;
  }
`;
const TabUl = styled.ul`
  display:flex;
  justify-content:center;
  gap: ${props => props.$gap || '10px'};
`;
const TabBtn = styled(SC.Button)`
  position:relative;
  padding:10px 15px;
  border-radius:5px;
  border:1px solid ${colors.bgWhite};
  transition: ${transitions.base};
  &:hover, &:focus {
    border-color:${colors.blue};
    background:${colors.bgWhite};
    color:${colors.blue};
  }
`;