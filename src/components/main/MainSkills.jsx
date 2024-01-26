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
    desc:["웹 표준에 맞게 구조 및 작성 가능하고 상황에 맞게 태그 활용할 수 있습니다.","컴포넌트 작성에 맞게 좀 더 재사용 가능하도록 마크업을 하기 위해 계속 고민하고 좀 더 나은 방향을 찾고 있습니다.","class 이름을 의미있게 작성하기 위해 노력하며 BEM(Block Element Modifier)방법론에 이해 및 작성 가능합니다."]
  },
  {
    title:"CSS",
    desc:["자신 있게 사용 가능하며 프로젝트 작업 시 문제없이 가능합니다.","flex, grid, animation, transform 이해 및 활용 가능합니다."]
  },
  {
    title:"SCSS",
    desc:["프로젝트 진행 중 scss를 경험하였습니다.","프로젝트, 스터디에서 React, Vue를 진행하며 꾸준히 사용하고 있습니다.","변수, Mixin, function, @content, :root 등 이해 및 사용 가능합니다."]
  },
  {
    title:"JavaScript",
    desc:["JavaScript 이해를 하고 경우에 맞게 사용을 하고 있습니다.", "100% 기억하고 있지 않지만 사용 방법, 키워드를 알고 구글링을 통해 문제 해결 및 개발 가능합니다.","부족한 부분 또는 새로운 메소드, 문법에 대해 메모하고 기록하면서 예제를 만들어 습득하고 있습니다."]
  },
  {
    title:"Jquery",
    desc:["업(業)에 진입 전 교육과정에서 JavaScript 보다 Jquery를 먼저 배우게 되었습니다.","Jquery로 많은 프로젝트를 진행하며 쌓은 경험으로 다양하게 업무를 해결할 수 있습니다.","현재는 Jquery를 지양하고 있고 순수 JavaScript만 사용을 하고 있습니다."]
  },
  {
    title:"VUE",
    desc:["Vue 문법을 통해 마크업 및 props, emit, 부모 자식간 관계, 렌더링 등 이해를 하고 있습니다.","생애주기를 이해하고 있고 component 활용 및 개발, computed, methods 등 운영 업무에 필요한 지식 및 활용할 수 있습니다.", "Vue2 프로젝트로 진행을 하고 있고 스터디를 통해 Vue3-Composition API로 컴포넌트 로직을 구성할 수 있습니다."]
  },
  {
    title:"React",
    desc:["React 프로젝트는 진행을 하지 못하였고 매주 스터디를 통해 계속 발전 및 습득중에 있습니다.","component, styled component, store, router, fetch, axios Hook 등 Velog를 통해 처음부터 정리하며 기록하고 있습니다.","포트폴리오, 개인 블로그 개발 등 다양하게 React로 여러번 복습을 하면서 나의 기술로 만들고 있습니다.","프로젝트 진행 시 컴포넌트 단위 개발 기능을 할 수 있지만 최적화 및 고도화에는 아직 어려움이 있습니다.","JavaScript와 React를 메인 기술로 생각을 하고 있기에 고도화 및 최적화, 부족한 기술을 계속 복습, 연구하여 발전 목표를 가지고 있습니다."]
  },
  {
    title:"Git",
    desc:["Git 커밋, 푸쉬, 브랜치, 머지, 수정 등 경험하고 이해하고 있습니다.","GitHhub: 개인 프로젝트, 스터디를 진행을 하며 접하였고 계속 진행 중입니다.","GitLab: 프로젝트 진행하면서 사용하게 되었고 협업을 하며 충돌 해결, 업무 진행 브랜치, 이슈등록, 머지 등 다양하게 경험하고 있습니다."]
  },
  {
    title:"웹접근성",
    desc:["진행한 프로젝트에서 대부분 웹접근성 인증 마크를 보유하고 있습니다.","웹접근성에 대해 이해하고 세미나 참여 경험이 있습니다.","웹접근성 심사 결과에 따라 잘못된 부분을 이해하고 해결할 수 있습니다."]
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