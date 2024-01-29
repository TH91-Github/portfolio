import { useState } from "react";
import { useSelector } from "react-redux";
import MainProjectSwiper from "./MainProjectSwiper";
import ProjectPopup from "./ProjectPopup";
import TypingTag from "components/common/element/TypingTag";
import Popup from "components/common/element/Popup";
import styled from "styled-components";
import * as S from "./Styled";
import { media } from "assets/styles/Variable";

// Data 정보 통합 예정
const projectTit = ["Project"];
const projectListData = [
  {
    title:"현대자동차 (운영)",
    desc:"현대닷컴, 임직원 운영 및 개선 작업 진행",
    img:{
      src:require('assets/images/project_7.png'),
    },
    company:"아이파트너즈",
    link:"https://www.hyundai.com/kr/ko/e/",
    people:"3",
    participation:"45%",
    date:"2023.07 ~ 진행 중",
    skills:["HTML","CSS","JavaScript","Vue","SCSS","AEM","Jenkins","GitLab"],
    contents:["데이터를 활용하여 차량 카테고리별 상세페이지, 쇼룸 개편 작업을 하면서 사용자들이 편리하게 필요한 정보를 얻을 수 있도록 사용자 친화적인 인터페이스를 구현하였고, 사이트 유지 보수 및 운영하며 고객에게 편리한 정보 제공."],
    role:["Vue 프레임워크를 사용하여 프로젝트 운영을 하였고, 컴포넌트 개발을 하면서 현대 닷컴과 임직원 사이트 내 차량 런칭, 개편 등 운영 업무를 HTML, scss, javascript를 사용하여 마크업, 기능 개발 및 수정을 진행했습니다."],
  },
  {
    title:"제네시스 (운영)",
    desc:"제네시스 운영, 디자인 개편, 해외 사이트 운영 진행",
    img:{
      src:require('assets/images/project_6.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://www.genesis.com/kr/ko/main.html",
    people:"2",
    participation:"50%",
    date:"2021.11 ~ 2023.06",
    skills:["HTML","CSS","SCSS","JavaScript","Jquery","AEM","Gulp.js","GitLab"],
    contents:["국내외 6개 사이트 운영하며 컴포넌트 가이드 및 컴포넌트 개발 및 수정하여 고객이 신뢰할 수 있는 사이트 구현."],
    role:["HTML 기반, BTO( Build To Order) 페이지에서 Vue 프레임 워크를 사용하여 운영하였고, 컴포넌트 개발과 반응형 웹 개발 작업을 수행하면서 컴포넌트 개발 및 UI/UX 개선하였습니다."],
  },
  {
    title:"소니스토어 (리뉴얼)",
    desc:"소니스토어 사이트 리뉴얼 작업",
    img:{
      src:require('assets/images/project_5.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://store.sony.co.kr/",
    people:"3",
    participation:"45%",
    date:"2021.06 ~ 2021.11",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["기술적 측면과 디자인 측면을 모두 고려하여 사용자에게 높은 만족을 제공하기 위한 사이트 리뉴얼 작업을 진행"],
    role:["초기 가이드(네이밍 규칙, breakpoint, module) 작성.","HTML, CSS, JavaScript 등의 웹 기술을 사용하여 디자인을 웹 페이지로 구현하고, 각 브라우저의 차이를 파악하여 크로스 브라우징 대응을 위한 코드 개선을 담당하였습니다."],
  },
  {
    title:"SK브로드밴드 (운영)",
    desc:"SK브로듭밴드, B 다이렉트 샵, 이벤트 전체 운영 업무 진행",
    img:{
      src:require('assets/images/project_4.png'),
    },
    company:"아이파트너즈",
    link:"-",
    people:"3",
    participation:"60%",
    date:"2018.03 ~ 2021.05",
    skills:["HTML","CSS","Jquery","JavaScript","SVN","Canvas"],
    contents:["사이트 운영 및 유지 보수를 하면서 다양한 효과와 인터랙티브한 요소를 구현하여 사용자가 사이트를 탐색하는 과정에서 흥미를 유발할 수 있도록 작업."],
    role:["담당 사이트 리뉴얼 작업 참여 및 사이트 내 작은 규모 재사용 가능한 모듈화 작업.","매월 프로모션 작업 중 Canvas, Animation, Transform 등의 기술을 활용하여 시안 제안.","사용자에게 시각적 흥미를 제공하여, 사용자 클릭 유도 GA를 통해 전월 비교 분석 효과 개선 작업.","창의적이고 독창적인 웹 경험을 구현하는 능력이 향상되었습니다."],
  },
  {
    title:"현대자동차 그룹 (운영)",
    desc:"현대 기아 자동차 3개 사이트 관련 이벤트, 레터, 운영 업무 진행",
    img:{
      src:require('assets/images/project_3.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"-",
    people:"3",
    participation:"30%",
    date:"2017.03 ~ 2018.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["차량 소개, 현대 기아 자동차 그룹 운영","국,영문 사이트와 레터 작업"],
    role:["웹표준, 웹접근성을 준수하며 인증 마크를 획득하기 위해 마크업 및 수정 진행하였습니다.","각 지원하는 메일 스타일에 맞는 메일폼 작성"],
  },
  {
    title:"신세계 DF (운영)",
    desc:"신세계 면세점 사이트 운영, 이벤트 및 전체 검수 진행",
    img:{
      src:require('assets/images/project_2.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"-",
    people:"3",
    participation:"30%",
    date:"2016.11 ~ 2017.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["사이트 유지 보수 작업을 하면서 스크립트를 활용하여 사용자에게 흥미를 줄 수 있는 게임 프로모션 작업."],
    role:["사이트 내 불필요한 코드 개선 작업을 진행하여 코드 최적화.","페이지 로딩 속도를 저하 시키는 불필요한 소스들을 제거하면서 오류를 개선해 나아갔습니다.","JavaScript와 jQuery를 사용하여 사용자 상호작용에 따라 동적으로 요소를 추가하고 제거하는 기능을 구현하였습니다."],
  },
  {
    title:"현대카드 회사소개 (구축)",
    desc:"현대카드 회사소개 하드코딩 및 서브 페이지 작업 진행",
    img:{
      src:require('assets/images/project_1.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://about.hyundaicard.com/ckh/ho/ckhho0101_01.hc",
    people:"2",
    participation:"25%",
    date:"2016.08 ~ 2016.10",
    skills:["HTML","CSS","Jquery"],
    contents:["HTML, CSS, JavaScript 등의 웹 기술을 사용하여 웹 표준을 준수하는데 중점 두며 현대카드 회사소개 페이지 구축."],
    role:["웹 표준에 맞는 태그 활용을 하면서 정형화된 가이드 설계 및 규칙을 지키며 구현", "크로스 브라우징 및 시맨틱 마크업을 작업에 적용."],
  },
]
function MainProject ({sectionTitle, view}){
  const [isPopup, setPopup] = useState(false);
  const [selectNum, setSelectNum] = useState('');
  const [selectProject, setSelectProject] = useState('');
  const isMobile = useSelector((state) => state.mobileChk);
  const typingOpt = {
    fontSize: isMobile? '32px': '48px',
    fontWeight: 600,
    speed: 150,
  }
  const projectClick = (itemD, itemI) => {
    setSelectProject(itemD);
    setSelectNum(itemI);
    setPopup(true);
  }
  return (
    <ProjectWrap id={sectionTitle.title} className="project">
      <S.MainInner className="project__inner">
        <S.TitleBox className="project__header">
          <TypingTag 
            titData={projectTit}
            view={view} 
            typingOpt={typingOpt}
          />
        </S.TitleBox>
        <ProjectCont className="project__cont">
          <ProjectList>
            <MainProjectSwiper
              swiperData={projectListData}
              swiperClick={projectClick}
              swiperStart={view}
            />
          </ProjectList>
          {
            isPopup && 
            <Popup popupOn={setPopup}> 
              <ProjectPopup popupData={selectProject} PopupNum={selectNum}/>
            </Popup>
          }
        </ProjectCont>
      </S.MainInner>
    </ProjectWrap>
  )
}
export default MainProject;

const ProjectWrap = styled.div`
  position:relative;
  background:#fff;
  .project__inner{
    overflow:hidden;
    position:relative;
    &::before, &::after {
      position:absolute;
      z-index:2;
      top:0;
      left:-2px;
      width:20px;
      height:100%;
      background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
      content:"";
    }
    &::after{
      left:auto;
      right:-2px;
      transform: scaleX(-1);
    }
  }
  ${media.mo}{
    .project__inner{
      &::before, &::after{
        width:10px;
        background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,1) 10%,rgba(255,255,255,0) 100%);
      }
    }
  }
`;

const ProjectCont = styled.div`
  margin-top:30px;  
`;

const ProjectList = styled.div`
  position:relative;
  &::after{
    position:absolute;
    top:0;
    right:0;
    width:10%;
    height:100%;
    background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,1) 100%);
    content:'';
  }
`;