import { useState } from "react";
import { useSelector } from "react-redux";
import MainProjectSwiper from "./MainProjectSwiper";
import ProjectPopup from "./ProjectPopup";
import TypingTag from "components/common/element/TypingTag";
import Popup from "components/common/element/Popup";
import styled from "styled-components";
import * as S from "./Styled";
import { media } from "assets/styles/Variable";

function MainProject ({sectionTitle, view}){
  const portfolioData = useSelector((state) => state.allData);
  const isMobile = useSelector((state) => state.mobileChk);
  const [isPopup, setPopup] = useState(false);
  const [selectNum, setSelectNum] = useState('');
  const [selectProject, setSelectProject] = useState('');
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
            titData={portfolioData.project.title}
            view={view} 
            typingOpt={typingOpt}
          />
        </S.TitleBox>
        <ProjectCont className="project__cont">
          <ProjectList>
            <MainProjectSwiper
              swiperData={portfolioData.project.lists}
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