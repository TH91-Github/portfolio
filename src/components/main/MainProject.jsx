import { useState } from "react";
import { useSelector } from "react-redux";
import MainProjectSwiper from "./MainProjectSwiper";
import ProjectPopup from "./ProjectPopup";
import TypingTag from "components/common/element/TypingTag";
import Popup from "components/common/element/Popup";
import styled from "styled-components";
import * as S from "./Styled";

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
    review:"",
  },
  {
    title:"신세계 DF (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_2.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"새롭게 리뉴얼 되어 남아있지 않습니다.",
    people:"3",
    participation:"27%",
    date:"2016.11 ~ 2017.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["신세계DF 사이트 전체 모니터링 및 검수","UI, 버튼 확인 및 오류 및 결제 테스트 - 오류(개발 전달)","프로모션 페이지 제작 및 Jquery로 간단한 게임 제작"],
    review:"",
  },
  {
    title:"현대자동차 그룹 (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_3.png'),
      bg:'dark'
    },
    company:"아이파트너즈",
    link:"https://about.hyundaicard.com/ckh/ho/ckhho0101_01.hc",
    people:"3",
    participation:"35%",
    date:"2017.03 ~ 2018.02",
    skills:["HTML","CSS","Jquery","JavaScript"],
    contents:["국문, 영문 등 여러 사이트를 운영","차량 이벤트, 소개 페이지 건 별로 하드코딩 및 기능 구현"],
    review:"",
  },
  {
    title:"SK브로드밴드 (운영)",
    desc:"TEST TEST",
    img:{
      src:require('assets/images/project_4.png'),
    },
    company:"아이파트너즈",
    link:"https://about.hyundaicard.com/ckh/ho/ckhho0101_01.hc",
    people:"3",
    participation:"60%",
    date:"2018.03 ~ 2021.05",
    skills:["HTML","CSS","Jquery","JavaScript","SVN","Canvas","SVG"],
    contents:["사이트 운영 및 리뉴얼, 매달 프로모션 이벤트 진행","Canvas, animation, transition, transform 효과"],
    review:"",
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
    contents:"",
    review:"",
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
    contents:"",
    review:"",
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
    contents:"",
    review:"",
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
            />
          </ProjectList>
          {
            isPopup && 
            <Popup popupOn={setPopup}> 
              <ProjectPopup popupData={selectProject} PopupNum={selectNum}/>
            </Popup>
            // isPopup && <ProjectPopup popupData={selectProject} popupOn={setPopup}/>
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