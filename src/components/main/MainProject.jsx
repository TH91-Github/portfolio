import { useState } from "react";
import { useSelector } from "react-redux";
import MainProjectSwiper from "./MainProjectSwiper";
import ProjectPopup from "./ProjectPopup";
import TypingTag from "components/common/element/TypingTag";
import Popup from "components/common/element/Popup";
import styled from "styled-components";
import * as S from "./Styled";

// Data 정보 통합 예정
const projectTit = ["Project"];
const projectListData = [
  {
    title:"현대카드 회사소개 (구축)",
    desc:"TEST TEST",
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
    review:[],
  },
  {
    title:"신세계 DF (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_2.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"- : 리뉴얼",
    people:"3",
    participation:"27%",
    date:"2016.11 ~ 2017.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["신세계DF 사이트 전체 모니터링 및 검수","UI, 버튼 확인 및 오류 및 결제 테스트 - 오류(개발 전달)","프로모션 페이지 제작 및 Jquery로 간단한 게임 제작"],
    review:[],
  },
  {
    title:"현대자동차 그룹 (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_3.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"- : 리뉴얼",
    people:"3",
    participation:"35%",
    date:"2017.03 ~ 2018.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["국문, 영문 등 여러 사이트를 운영","차량 이벤트, 소개 페이지 건 별로 하드코딩 및 기능 구현"],
    review:[],
  },
  {
    title:"SK브로드밴드 (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_4.png'),
    },
    company:"아이파트너즈",
    link:"- : 리뉴얼",
    people:"3",
    participation:"60%",
    date:"2018.03 ~ 2021.05",
    skills:["HTML","CSS","Jquery","JavaScript","SVN","Canvas","SVG"],
    contents:["사이트 운영 및 리뉴얼, 매달 프로모션 이벤트 진행","Canvas, animation, transition, transform 효과"],
    review:[],
  },
  {
    title:"소니스토어 (리뉴얼)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_5.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://store.sony.co.kr/?utm_source=na_search_pc&utm_medium=search&utm_campaign=wh1000xm5&utm_content=1",
    people:"3",
    participation:"43%",
    date:"2021.06 ~ 2021.11",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["기존 사이트 새롭게 리뉴얼 : 파견","리뉴얼 진행 시 vue 또는 React로 리뉴얼 하기로 하였으나 하드코딩으로 변경","하드코딩으로 작업으로 작업을 진행하여 큰 경험을 쌓지는 못하였지만 팀원들과 디자인 가이드 구축 후 가이드를 바탕으로 기획, 디자인과 커뮤니케이션을 하였고 작업 시 가이드 라인의 중요성을 느끼게 된 프로젝트였습니다."],
    review:[],
  },
  {
    title:"제네시스 (운영)",
    desc:"TEST TEST",
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
    contents:["첫 AEM, 컴포넌트화 프로젝트로 가이드에 맞게 완성된 컴포넌트를 통해 AEM으로 재활용하여 보다 편리하게 운영을 하였고, 재활용에 최적화할 수 있게 컴포넌트 구상 및 가독성 좋은 컴포넌트의 중요성을 배우게 되었습니다.","반응형, 웹 접근성, 기능별 모듈화","AEM 및 컴포넌트 개발에 맞게 코딩 진행"],
    review:[],
  },
  {
    title:"현대자동차 (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_7.png'),
    },
    company:"아이파트너즈",
    link:"https://www.hyundai.com/kr/ko/e/",
    people:"3",
    participation:"30%",
    date:"2023.07 ~ 진행 중",
    skills:["HTML","CSS","JavaScript","Vue2","SCSS","AEM","Jenkins","GitLab"],
    contents:["AEM 사이트와 Vue 사이트 운영 업무","Vue로 진행하는 첫 프로젝트로 현재 프로젝트를 바탕으로 구조 파악 및 경험 쌓기에 도움이 되고 있습니다."],
    review:[],
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
      width:30px;
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