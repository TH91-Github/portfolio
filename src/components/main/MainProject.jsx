import { useState } from "react";

import styled from "styled-components";
import TypingTag from "components/common/element/TypingTag";
import * as S from "./Styled";
import MainProjectSwiper from "./MainProjectSwiper";
import ProjectPopup from "./ProjectPopup";
import Popup from "components/common/element/Popup";

const projectTit = ["TEST P"];
const projectListData = [
  {
    title:"Title1",
    desc:"TEST TEST",
    img:"./ㅇㅇ",
    date:"2024-01-01"
  },
  {
    title:"Title2",
    desc:"TEST TEST",
    img:"",
    date:"2024-01-01"
  },
  {
    title:"Title3",
    desc:"TEST TEST",
    img:"",
    date:"2024-01-01"
  },
  {
    title:"Title4",
    desc:"TEST TEST",
    img:"",
    date:"2024-01-01"
  },
  {
    title:"Title5",
    desc:"TEST TEST",
    img:"",
    date:"2024-01-01"
  },
]
function MainProject ({sectionTitle, view}){
  const [isPopup, setPopup] = useState(false);
  const [selectNum, setSelectNum] = useState('');
  const [selectProject, setSelectProject] = useState('');
  const typingOpt = {
    fontSize:'48px',
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
              <ProjectPopup popupData={selectProject}/>
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