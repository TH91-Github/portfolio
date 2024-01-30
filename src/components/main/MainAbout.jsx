import { useSelector } from "react-redux";
import { TextBr } from "utils/textChk";
import Typing from "components/common/element/Typing";
import TypingTag from "components/common/element/TypingTag";
import styled from "styled-components";
import * as S from "./Styled";
import * as SC from "assets/styles/StyledCm";
import { colors, media } from "assets/styles/Variable";
import profileImg from 'assets/images/profile.jpg'
import profileImg2 from 'assets/images/profile2.jpg'

function MainAbout({ sectionTitle, view }) {
  const portfolioData = useSelector((state) => state.allData);
  const isMobile = useSelector((state) => state.mobileChk);
  const typingOpt = {
    fontSize: isMobile? '32px': '48px',
    fontWeight: 600,
    speed: 150,
  }
  return (
    <AboutWrap id={sectionTitle} className="about">
      <S.MainInner>
        <S.TitleBox className="about__header">
          <TypingTag
            titData={[portfolioData.about.title]}
            view={view}
            typingOpt={typingOpt}
          />
        </S.TitleBox>
        <AboutCont className={'about__cont ' + (view ? "on":'') }>
          <AboutProfile className="about__profile">
            <AboutProfileImg className="about__profile-img">
              <AboutImgBox className="img">
                <img src={profileImg} alt="" />
                <img src={profileImg2} className="subImg" alt=""/>
              </AboutImgBox>
            </AboutProfileImg>
          </AboutProfile>
          <AboutInfo className="about__info">
            <AboutTextUp className="text"><span>{TextBr(portfolioData.about.desc[0])}</span></AboutTextUp>
            <AboutTextPoint className="text-point">
              { 
                view &&
                <p className="text">
                  <span>
                    <Typing typingData={portfolioData.about.pointText} delay={2500} pauseTime={1000} infinite={true} />
                  </span>
                </p> 
              }
            </AboutTextPoint>
            {
              portfolioData.about.desc.map((item, idx) => (
                idx > 0 &&
                <AboutTextUp 
                  className="text"
                  $delay={((idx+1)*0.2)+1}
                  key={idx}>
                  <span>{TextBr(item)}</span>
                </AboutTextUp>
              ))
            }
          </AboutInfo>
        </AboutCont>
      </S.MainInner>
    </AboutWrap>
  )
}
export default MainAbout;

const AboutWrap = styled.div`
  ${media.pc}{
    position:sticky;
    top:0;
    min-height:100svh;
  }
`;
const AboutCont = styled.div`
  display:flex;
  position:relative;
  margin-top:50px;
  opacity:0;
  &.on {
    ${SC.animation(SC.fadeIn, 1.5, 'ease', .5)}
    .img::after, .img img, .text span,
    .text-point {
      animation-play-state: running;
    }
    .subImg{
      display:block;
    }
  }
  &>div{
    width:50%;
    padding:50px;
  }
  ${media.tab}{
    &>div{
      padding:30px;
    }
  }
  ${media.mo}{
    display:block;
    margin-top:30px;
    &>div{
      width:100%;
      padding:0;
    }
  }
`;
const AboutProfile = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
`;
const AboutProfileImg = styled.div`
  position:relative;
  width:250px;
  height:100%;
  padding:6px;
  border-radius:5px;
  background:#000;
  &::before, &::after {
    position:absolute;
    left:50%;
    width:8px;
    height:8px;
    background:#242424;
    opacity:0;
    content:"";
    pointer-events:none;
  }
  &::before {
    top:15px;
    animation: imgCube 4s ease infinite;
    background:${colors.blue}
  }
  &::after{
    bottom:15px;
    animation: imgCube 4s 1s ease infinite;
    background:${colors.yellow}
  }
  @keyframes imgCube {
    0%{
      z-index:2;
      opacity:1;
      transform:translate(calc(-125px - 15px),0) rotate(45deg);
    }
    50%{
      z-index:2;
      border-radius:50%;
      transform:translate(calc(125px + 10px),0) rotate(180deg);
    }
    51%{
      z-index:-1;
    }
    100%{
      z-index:-1;
      opacity:1;
      transform:translate(calc(-125px - 15px),0) rotate(45deg);
    }
  }
`;
const AboutImgBox = styled.span`
  display:block;
  position:relative;
  width:100%;
  height:100%;
  &::after{
    position:absolute;
    z-index:2;
    top:0;
    right:0;
    width:100%;
    height:100%;
    background:#242424;
    animation: imgCover 1s 1s both;
    animation-play-state: paused;
    content:"";
  }
  @keyframes imgCover {
    0%{
      width:100%;
    }
    100%{
      width:0%;
    }
  }
  img {
    display:block;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:top;
    animation: imgAni 1s 1s both;
    animation-play-state: paused;
  }
  .subImg {
    display:none;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#000;
    opacity:0;
    animation: fadeImg 8s 2s infinite both;
    @keyframes fadeImg{
      0%, 37.5%, 100%{
        opacity:0;
      }
      50%, 87.5%{
        opacity:1;
      }
    }
  }
  @keyframes imgAni {
    0%{
      opacity:0;
    }
    100%{
      opacity:1;
    }
  }
`;
const AboutInfo = styled.div`
  ${media.mo}{
    margin-top:30px;
    text-align:center;
  }
`;
const AboutTextPoint = styled.div`
  display:inline-block;
  overflow:hidden;
  position:relative;
  min-width:100px;
  min-height:80px;
  padding:0 30px;
  animation:upAni 1.2s 1.1s both;
  animation-play-state: paused;
  &::before, &::after {
    position:absolute;
    top:0;
    left:0;
    font-size:56px;
    font-weight:550;
    line-height:80px;
    color:${colors.blue};
    content:"[";
  }
  &::after{
    left: auto;
    right:0;
    content:"]";
  }
  .text {
    font-size:40px;
    font-weight:550;
    line-height:80px;
  }
  @keyframes upAni {
    0% {transform:translateY(100px); opacity:0;}
    100%{transform:translateY(0); opacity:1;}
  }
  ${media.tab}{
    min-height:48px;
    &::before, &::after{
      font-size:48px;
      line-height:48px;
    }
    .text {
      font-size:32px;
      line-height:48px;
    }
  }
  ${media.mo}{
    min-height:36px;
    padding:0 15px;
    &::before, &::after{
      font-size:36px;
      line-height:36px;
    }
    .text {
      font-size:24px;
      line-height:36px;
    }
  }
`;
const AboutTextUp = styled.p`
  overflow:hidden;
  font-family:'Chosunilbo_myungjo';
  line-height:26px;
  span {
    display:inline-block;
    opacity:0;
    animation:txt 1.2s both;
    animation-delay: ${props => props.$delay || '1.1'}s;
    animation-play-state: paused;
  }
  @keyframes txt {
    0% {transform:translateY(100px); opacity:0;}
    100%{transform:translateY(0); opacity:1;}
  }
`;

