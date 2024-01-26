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
    title:"현대카드 회사소개 (구축)",
    desc:"현대카드 회사소개 하드코딩 및 서브 페이지 작업 진행",
    img:{
      src:require('assets/images/project_1.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://about.hyundaicard.com/ckh/ho/ckhho0101_01.hc",
    people:"2",
    participation:"30%",
    date:"2016.08 ~ 2016.10",
    skills:["HTML","CSS","Jquery"],
    contents:["사이트 구축 보조 역할","디자인 시안 및 가이드라인 따라 페이지 코딩","전체 사이트 수정 진행 및 마무리 작업을 진행하였습니다."],
    review:["개인 프로젝트가 아닌 회사에서 진행해보는 처음 프로젝트로 작업 시 유의점을 경험했습니다.","웹표준에 맞는 마크업, 클래스, 변수 등 이름과 선택자에 대해 배우고 경험할 수 있었던 프로젝트였습니다."],
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
    participation:"27%",
    date:"2016.11 ~ 2017.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["회사 인력 부족으로 초기 사이트 검수 담당으로 파견","신세계DF 사이트 전체 모니터링 및 검수","UI, 버튼 확인 및 오류 및 결제 테스트 - 오류(개발 전달)","프로모션 페이지 제작 및 Jquery로 간단한 게임 제작"],
    review:["사이트 전체 검수를 통해 담당 사이트에 대해 이해도가 높아졌고 불필요 기능, 잘못된 화면 등 오류 발생할 상황을 어느정도 미리 파악할 수 있게 되었습니다.","짧은 기간 내에 완성해야하는 이벤트 페이지도 작업하면서 기간 내 작업 및 자주 사용하는 슬라이드, 탭, 스크롤 등 모듈이 필요하다고 느끼게 되어 샘플 파일을 정리 및 수집하게 된 좋은 경험이었습니다."],
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
    participation:"35%",
    date:"2017.03 ~ 2018.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["차량 소개, 현대 기아 자동차 그룹 운영","국,영문 사이트와 레터 작업"],
    review:["현대 자동차 그룹 내 여러 사이트 중 하나를 담당하게 되어 다른 파트와 직접적으로 커뮤니케이션을 하게 된 경험이었고 다른 파트에 내가 하고 있는 직무에 관한 설명 등을 이해할 수 있도록 설명하기도 하며 스스로 그만큼 이론도 알고 있어야 효과적을 전달할 수 있다는 것을 알게 되었습니다.","레터를 진행하면서 각 메일에 따라 class, css 적용 범위을 알게 되었고 아웃룩 기준 테이블 코딩을"],
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
    contents:["사이트 운영 및 부분 리뉴얼, 매달 프로모션 이벤트 진행","Canvas, animation, transition, transform 효과"],
    review:[],
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
    participation:"43%",
    date:"2021.06 ~ 2021.11",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["리뉴얼 작업으로 파견 진행","기존 옛 사이트에서 반응형으로 된 디자인 중심 리뉴얼 작업"],
    review:["외부 작업 공간에서 다른 파트의 담당자 분들과 함께 있으며 효과적으로 완성도를 높일 수 있었습니다.","제품의 옵션, 수량 등을 체크하며 할인율, 가격 등 경우에 따라 나오는 값을 생각하고 경험하게 된 작업이었습니다.","프리로 온 두 분은 정해진 기간만 채우고 퇴사하게 되었고 이후 남은 기간 추가 인력 없이 진행하면서 남은 작업 및 추가 수정, 전체적인 인수인계를 맡게 되어 책임감이 생긴 프로젝트였습니다."],
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
    participation:"48%",
    date:"2021.11 ~ 2023.06",
    skills:["HTML","CSS","SCSS","JavaScript","Jquery","AEM","Gulp.js","GitLab"],
    contents:["국내외 6개 사이트 운영","반응형, 웹 접근성, 기능별 컴포넌트 작업","견적 페이지만 Vue 페이지 작업"],
    review:["컴포넌트화 된 기능, 큰 분류로 페이지를 AEM을 통해 재사용이 편리하게 작업하여 효과적으로 운영을 할 수 있음을 경험하게 되었습니다.","재활용이 가능한 컴포넌트이기에 좀 더 경우의 수를 고민을 하게 되었습니다.","처음 구축하는 곳에서 API도 재해석하여 적용하였고, 잘 짜여 놓은 스크립트였지만 운영을 하며 추가로 기능을 추가하면서 좀 더 복잡하고 오류가 발생하였고 이런 어려움을 통해 조금 더 독립적으로 나눠서 하나를 수정해도 영향이 덜 가도록 스크립트를 작성해야겠다고 느끼게 되었습니다."],
  },
  {
    title:"현대자동차 (운영)",
    desc:"현대닷컴, 임직원 운영 및 개선 작업 진행",
    img:{
      src:require('assets/images/project_7.png'),
    },
    company:"아이파트너즈",
    link:"https://www.hyundai.com/kr/ko/e/",
    people:"3",
    participation:"30%",
    date:"2023.07 ~ 진행 중",
    skills:["HTML","CSS","JavaScript","Vue","SCSS","AEM","Jenkins","GitLab"],
    contents:["Vue로 진행되는 프로젝트 입니다.","Vue를 활용하여 데이터 등 전체 다루지는 않고 마크업, 부분 기능에 대해 작업을 진행하고 데이터 관련은 개발팀에서 진행하고 있는 프로젝트입니다."],
    review:["Vue로 진행하는 첫 프로젝트","완전히 프론트엔드에 대한 일의 영역을 맡고 있지 않고 있다보니 일정 범위까지만 수정하고 있어서 경험을 하기에 부족한 느낌이 있습니다.","Vue에 대한 지식이 없는 상태에서 진행하여 많은 아쉬움이 있습니다."],
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