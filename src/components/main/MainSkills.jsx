import { useState } from "react";
import { useSelector } from "react-redux";
import TabListBtn from "components/common/element/TabListBtn";
import InfiniteText from "components/common/element/InfiniteText";
import TabCont from "components/common/element/TabCont";
import TypingTag from "components/common/element/TypingTag";

import styled from "styled-components";
import * as S from "./Styled";
import { colors, media } from "assets/styles/Variable";

// Data 정보 통합 예정
const skillsTit = ["SKILLS"];
const skillsData = [
  {
    title:"HTML",
    desc:["웹 표준에 맞게 구조 및 작성 가능하고 상황에 맞게 태그 활용할 수 있습니다.","컴포넌트 작성에 맞게 좀 더 재사용 가능하도록 마크업을 하기 위해 계속 고민하고 좀 더 나은 방향을 찾고 있습니다."]
  },
  {
    title:"CSS",
    desc:["자신 있게 사용 가능하며 프로젝트 작업 시 문제없이 가능합니다.","애니메이션, 트랜지션, 트랜스폼을 활용하여 보다 효과적인 기능을 구현할 수 있습니다."]
  },
  {
    title:"SCSS",
    desc:["프로젝트 진행 중 scss를 접하였고 현재 진행중인 프로젝트 및 개인 프로젝트에서 사용중에 있습니다.","변수, 함수형, Mixin, @content 등 사용"]
  },
  {
    title:"JavaScript",
    desc:["여러 프로젝트 진행 중 JavaScript 보다 Jquery를 중심으로 사용하여 Jquery 보다는 다소 기술력이 부족하지만 일반적인 사이트 구현에 있어 어려움 없이 활용 가능합니다."]
  },
  {
    title:"Jquery",
    desc:["현재 맡고 있는 프로젝트 전까지 Jquery만 사용을 하여 Jquery를 통한 기능 구현 및 이해는 자신이 있습니다.","Jquery를 사용이 줄어들고 있기에 현재는 Jquery 더 이상 사용을 하지 않고 바닐라 코딩을 하고 있습니다."]
  },
  {
    title:"VUE",
    desc:["현재 Vue2 프로젝트를 진행 중이며, Vue3는 개인 공부를 통해 경험을 했습니다.",]
  },
  {
    title:"React",
    desc:["React 프로젝트는 진행을 하지 못하였습니다.","component, styled component, store, router, fetch, axios Hook 등 Velog를 통해 처음부터 정리하며 기록하고 있습니다."]
  },
  {
    title:"Git",
    desc:["Github: 개인 프로젝트, 스터디를 진행을 하며 접하였고 계속 진행 중입니다.","Gitlab: 프로젝트 진행하면서 사용하게 되었고 협업을 하며 충돌 해결, 업무 진행 브랜치, 이슈등록, 머지 등 다양하게 경험하고 있습니다."]
  },
  {
    title:"웹표준&웹접근성",
    desc:["대기업 프로젝트를 진행하여 웹접근성 인증마크 작업 필수로 하기에 웹접근성, 웹표준에 맞게 작업을 하였습니다.","웹접근성 심사전 검수 및 기능 수정 가능합니다."]
  },
];

function MainSkills({sectionTitle, view}) {
  const [activeNum, setActiveNum] = useState(0);
  const isMobile = useSelector((state) => state.mobileChk);
  const typingOpt = {
    fontSize: isMobile? '32px': '48px',
    fontWeight: 600,
    speed: 150,
    dark:true
  }
  const skillsTitleData = skillsData.map((item) => item.title);
  const activeIndex = (el,idx) => {
    setActiveNum(idx)
  }
  return (
    <SkillsWrap id={sectionTitle.title} className={'skills ' + (view ? 'observerOn on':'')}>
      <S.MainInner>
        <S.TitleBox className="skills__header">
          <TypingTag 
            titData={skillsTit}
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