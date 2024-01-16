import * as SC from "assets/styles/StyledCm";
import { colors, media, transitions } from "assets/styles/Variable";
import { useState } from "react";
import styled from "styled-components";

function TabListBtn ({tabData, clickEvent, animation, delay}) { // animation, delay
  const [activeIdx, setActiveIdx] = useState(0);
  const tabClick = (e,i) => {
    setActiveIdx(i);
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
              <TabBtn className={activeIdx ===idx ?'active':''}onClick={()=>tabClick(item,idx)}>
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
  overflow-x:auto;
  padding:10px 0;
  &.fadeIn {
    opacity:0;
    animation: ${SC.fadeIn} 1s ${props => props.$delay}s both;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.yellow};
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${colors.bgWhite};
  }
`;
const TabUl = styled.ul`
  display:flex;
  &>li{
    padding:0 5px;
    &:first-child{
      padding-left:0;
    }
    &:last-child{
      padding-right:0;
    }
  }
  ${media.pc}{
    justify-content:center;
  }
`;

const TabBtn = styled(SC.Button)`
  position:relative;
  height:40px;
  padding:1px 15px;
  border-radius:5px;
  border:1px solid ${colors.bgWhite};
  line-height:38px;
  transition: ${transitions.base};
  white-space: nowrap;
  &:hover, &:focus {
    border-color:${colors.blue};
    background:${colors.bgWhite};
    color:${colors.blue};
  }
`;