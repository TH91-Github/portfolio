import { useState } from "react";
import { useSelector } from "react-redux";
import TabListBtn from "components/common/element/TabListBtn";
import InfiniteText from "components/common/element/InfiniteText";
import TabCont from "components/common/element/TabCont";
import TypingTag from "components/common/element/TypingTag";

import styled from "styled-components";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";

function MainSkills({sectionTitle, view}) {
  const portfolioData = useSelector((state) => state.allData);
  const isMobile = useSelector((state) => state.mobileChk);
  const [activeNum, setActiveNum] = useState(0);
  const typingOpt = {
    fontSize: isMobile? '32px': '48px',
    fontWeight: 600,
    speed: 150,
    dark:true
  }
  const skillsTitleData = portfolioData.skills.lists.map((item) => item.title);
  const activeIndex = (el,idx) => {
    setActiveNum(idx)
  }
  return (
    <SkillsWrap id={sectionTitle} className={'skills ' + (view ? 'observerOn on':'')}>
      <S.MainInner>
        <S.TitleBox className="skills__header">
          <TypingTag 
            titData={portfolioData.skills.title}
            view={view} 
            typingOpt={typingOpt}
          />
        </S.TitleBox>
        <SkillsCont className="skills__cont">
          <SkilsList className="skills__list">
            <InfiniteText textData={skillsTitleData} view={view} />
          </SkilsList>
          <SkillsTabWrap className="tab">
            {
              view && 
              <>
                <TabListBtn
                  tabData={portfolioData.skills.lists} 
                  clickEvent={activeIndex}
                  animation={"fadeIn"}
                  delay={1000}
                  className="tab__btn" />
                <TabCont 
                  tabData={portfolioData.skills.lists} 
                  active={activeNum}
                  animation={"fadeIn"}
                  delay={1000}/>
              </>
            }
          </SkillsTabWrap>
        </SkillsCont>
      </S.MainInner>
    </SkillsWrap>
  )
}
export default MainSkills;

const SkillsWrap = styled.div`
  display:flex;
  align-items:center;
  position:relative;
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
  ${media.pc}{
    min-height:100svh;
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
  ${media.mo}{
    padding:0;
  }
`;