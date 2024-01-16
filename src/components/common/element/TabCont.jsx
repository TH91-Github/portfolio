import * as SC from "assets/styles/StyledCm";
import { colors } from "assets/styles/Variable";
import styled from "styled-components";


function TabCont ({tabData, active, animation, delay}){ // ex: [{title, desc}]
  const aniOpt = animation 
    ? {
      name: animation ?? false,
      d : delay ? (delay*0.001) : 0, // 입력 후 삭제까지 시간
    }
    : false
  return (
    <>
      {
        tabData &&
          <TabContWrap $delay={aniOpt.d} className={'tab__cont '+(aniOpt ? aniOpt.name : '') }>
            {
              tabData.map((item, idx) =>(
                <TabItem 
                  className={'tab__item '+(idx === active ? 'active':'')} 
                  key={idx}>
                  <ItemHead className="tab__item__header">
                    <p className="tit">
                      <span>{item.title}</span>
                    </p>
                  </ItemHead>
                  <ItemInfo className="tab__item__info">
                    {
                      item.desc.map((sItem, idx) => (
                        <p className="txt" key={idx}>
                          <span>{sItem}</span>
                        </p>
                      ))
                    }
                  </ItemInfo>
                </TabItem>
              ))
            }
          </TabContWrap>
      }
    </>
    
  )
}

export default TabCont;

const TabContWrap = styled.div`
  &.fadeIn {
    color:;
    opacity:0;
    animation: ${SC.fadeIn} 1s ${props => props.$delay}s both;
  }
`;
const TabItem = styled.div`
  display:none;
  &.active {
    display:block;
  }
`;
const ItemHead = styled.div`
  .tit{
    display:inline-block;
    overflow:hidden;
    position:relative;
    padding-bottom:10px;
    font-size:24px;
    & > span {
      display:inline-block;
      opacity:0;
      animation: ${SC.fadeIn} 1s both;
    }
    &::after{
      position:absolute;
      bottom:0;
      left:0;
      width:70%;
      height:2px;
      background:${colors.blue};
      animation: ${SC.fadeIn('-x')} 1s both;
      content:"";
    }
  }
`;
const ItemInfo = styled.div`
  margin-top:30px;
  .txt{
    overflow:hidden;
    font-size:16px;
    font-weight:400;
    line-height:24px;
    &>span{
      display:inline-block;
      animation: ${SC.fadeIn} 1s both;
    }
  }
`;