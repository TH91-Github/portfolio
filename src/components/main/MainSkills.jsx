import styled from "styled-components";
import * as S from "./Styled";
import TypingTag from "components/common/element/TypingTag";
import { colors } from "assets/styles/Variable";
import { useState } from "react";
import TabListBtn from "components/common/element/TabListBtn";
import InfiniteText from "components/common/element/InfiniteText";
import TabCont from "components/common/element/TabCont";

const skillsTit = ["TEST SS"];
const skillsData = [
  {
    title:"test-1",
    desc:["TEST ESTSTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST","TESTTESTTESTTESTTESTTEST"]
  },
  {
    title:"test-2",
    desc:["TEXT, TEXT"]
  },
  {
    title:"test-3",
    desc:["TESTSETSET SE"]
  },
  {
    title:"test-4",
    desc:["TESXT"]
  },
  {
    title:"test-5",
    desc:["STEST"]
  },
];

function MainSkills({view}) {
  const [activeNum, setActiveNum] = useState(0);
  const typingOpt = {
    fontSize:'48px',
    fontWeight: 600,
    speed: 150,
    dark:true
  }
  const skillsTitleData = skillsData.map((item) => item.title);
  const activeIndex = (el,idx) => {
    setActiveNum(idx)
  }
  console.log(view)
  return (
    <SkillsWrap className={'skills ' + (view ? 'observerOn on':'')}>
      <S.MainInner className="skills__inner">
        <div className="skills__zone">
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
              <InfiniteText textData={skillsTitleData} view={view} />
            </SkilsList>
            {/* 해당 텍스트 탭 info 구간 */}
            <SkillsTabWrap className="tab">
              {
                view && 
                  <>
                    <TabListBtn
                      tabData={skillsData} 
                      clickEvent={activeIndex}
                      animation={"fadeIn"}
                      delay={1000}
                      className="tab__btn" />
                    <TabCont 
                      tabData={skillsData} 
                      active={activeNum}
                      animation={"fadeIn"}
                      delay={1000}/>
                  </>
              }
            </SkillsTabWrap>
          </SkillsCont>
        </div>
      </S.MainInner>
    </SkillsWrap>
  )
}
export default MainSkills;

const SkillsWrap = styled.div`
  display:flex;
  align-items:center;
  position:relative;
  min-height:100svh;
  background:${colors.bgBlack};
  &.observerOn {
    .skills__list{
      opacity:1;
    }
    .infinite__list-inner {
      &.original, &.clone{
        animation-play-state: running;
      }
    }
  }
`;
const SkillsCont = styled.div`
  margin-top:30px;
  color:#fff;
`;

const SkilsList = styled.div`
  padding:10px 0;
  border-radius:5px;
  opacity:0;
  transition: 1s all 1s;
`;

const SkillsTabWrap = styled.div`
  margin-top:30px;
  padding:0 20px;
  .tab__cont {
    margin-top:30px;
  }
`;