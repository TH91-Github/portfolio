import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import * as S from "./Styled";
import TypingTag from "components/common/element/TypingTag";
import { colors, transitions } from "assets/styles/Variable";
import { useState } from "react";
import TabListBtn from "components/common/element/TabListBtn";

const skillsTit = ["TEST SS"];
const skillsData = [
  {
    title:"skils-1",
    desc:["TEST"]
  },
  {
    title:"skils-2",
    desc:["TEXT, TEXT"]
  },
  {
    title:"skils-3",
    desc:["TESTSETSET SE"]
  },
  {
    title:"skils-4",
    desc:["TESXT"]
  },
  {
    title:"skils-5",
    desc:["STEST"]
  },
]
const typingOpt = {
  fontSize:'48px',
  fontWeight: 600,
  speed: 150,
  dark:true
}
function MainSkills({view}) {
  const [activeNum, setActiveNum] = useState(0);

  const activeIndex = (el,idx) => {
    setActiveNum(idx)
  }
  return (
    <SkillsWrap className="skills on">
      <S.MainInner className="skills__inner">
        <SkillsZone className="skills__zone">
          <S.TitleBox className="skills__header">
            <TypingTag 
              titData={skillsTit}
              view={view} 
              typingOpt={typingOpt}
            />
          </S.TitleBox>
          <SkillsCont className="skills__cont">
            {/* 텍스트 반복 ani 구간 */}
            <SkilsList className="skills__list">
              --------------------------------
            </SkilsList>
            {/* 해당 텍스트 탭 info 구간 */}
     
            <TabWrap className="tab">
              <TabListBtn tabData={skillsData} clickEvent={activeIndex}/>
              <TabCont className="tab__cont">
                {
                  skillsData.map((item, idx) =>(
                    <div 
                      className={'tab__item '+(idx === activeNum ? 'active':'')} 
                      key={idx}>
                      <div className="tab__item__header">
                        <p className="tab__item__header-tit">{item.title}</p>
                      </div>
                      <div className="tab__item__info">
                        {
                          item.desc.map((sItem, idx) => (
                            <p className="txt" key={idx}>{sItem}</p>
                          ))
                        }
                      </div>
                    </div>
                  ))
                }
              </TabCont>
            </TabWrap>
          </SkillsCont>
        </SkillsZone>
      </S.MainInner>
    </SkillsWrap>
  )
}
export default MainSkills;

const SkillsWrap = styled.div`
  position:relative;
  height:100svh;
  border:1px solid blue;
  background:#fff;
  .skills__inner {
    padding-left:0;
    padding-right:0;
    transition:all 2s;
  }
  &.observerOn, &.on {
    .skills__inner{
      padding:100px 30px;
    }
    .skills__zone{
      padding:30px 0;
      border-radius:20px;
      background:${colors.bgBlack};
    }
  }
`;

const SkillsZone = styled.div`
  transition:all 2s;
`;

const SkillsCont = styled.div`
  margin-top:30px;
  color:#fff;
`;
const SkilsList = styled.div`
  padding:30px;
  border-radius:5px;
  background:#fff;
`;

const TabWrap = styled.div`
  margin-top:30px;
  padding:0 20px;
`;
const TabCont = styled.div`
  margin-top:30px;
  .tab__item {
    display:none;
    &.active {
      display:block;
    }
    &__header {
      &-tit{
        font-size:21px;
      }
    }
    &__info {
      margin-top:30px;
    }
  }
`;
