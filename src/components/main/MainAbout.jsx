import styled from "styled-components";
import * as S from "./Styled";
import { media } from "assets/styles/Variable";
import * as SC from "assets/styles/StyledCm";
import Typing from "components/common/element/Typing";
import TypingTag from "components/common/element/TypingTag";
import sample from 'assets/images/sample.png'

const aboutTit = ["TEST"];
const profileJob = ["jobasdgb", "zzz"];
const profileText = ["TEXT, TEXT , TEXT, TEXT", "sss? dd?? GG? ZZ?? XX?", "zzzzzz"]
const typingOpt = {
  fontSize: '48px',
  fontWeight: 600,
  speed: 150,
}
function MainAbout({ view }) {
  return (
    <AboutWrap className="about">
      <S.MainInner>
        <S.TitleBox className="about__header">
          <TypingTag
            titData={aboutTit}
            view={view}
            typingOpt={typingOpt}
          />
        </S.TitleBox>
        <AboutCont className={'about__cont ' + (view ? "on":'') }>
          <AboutProfile className="about__profile">
            <ProfileImg className="about__profile-img">
              <ImgBox className="img">
                <img src={sample} alt="" />
              </ImgBox>
            </ProfileImg>
          </AboutProfile>
          <AboutInfo className="about__info">
            <TextUp className="text"><span>TEXT, TEXT, TEXT</span></TextUp>
            <TextJob className="text-job">
              { 
                view &&
                <p className="job">
                  <Typing typingData={profileJob} delay={2500} pauseTime={1000} infinite={true} />
                </p> 
              }
            </TextJob>
            {
              profileText.map((item, idx) => (
                <TextUp 
                  className="text"
                  $delay={((idx+1)*0.2)+1}
                  key={idx}>
                  <span>{item}</span>
                </TextUp>
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
  position:sticky;
  top:0;
  min-height:100svh;
`;
const AboutCont = styled.div`
  display:flex;
  position:relative;
  margin-top:50px;
  opacity:0;
  &.on {
    ${SC.animation(SC.fadeIn, 1.5, 'ease', .5)}
    .img::after, .img img, .text span,
    .text-job::before, .text-job::after {
      animation-play-state: running;
    }
  }
  &>div{
    padding:50px;
  }
  ${media.tab}{
    &>div{
      padding:30px;
    }
  }
`;
const AboutProfile = styled.div`
  display:flex;
  justify-content:center;
  position:relative;
  width:50%;
`;
const ProfileImg = styled.div`
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
  }
  &::before {
    top:15px;
    animation: imgCube 4s ease infinite;
  }
  &::after{
    bottom:15px;
    animation: imgCube 4s 1s ease infinite;
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
const ImgBox = styled.span`
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
  width:50%;
`;

const TextJob = styled.div`
  display:inline-block;
  overflow:hidden;
  position:relative;
  min-width:100px;
  height:80px;
  padding:0 30px;
  &::before, &::after {
    position:absolute;
    top:0;
    left:0;
    font-size:56px;
    font-wieght:900;
    line-height:80px;
    content:"[";
    animation:upAni 1.2s 1.1s both;
    animation-play-state: paused;
  }
  &::after{
    left: auto;
    right:0;
    content:"]";
  }
  .job {
    font-size:56px;
    font-weight:550;
    line-height:80px;
  }
  @keyframes upAni {
    0% {transform:translateY(100px); opacity:0;}
    100%{transform:translateY(0); opacity:1;}
  }
`;
const TextUp = styled.p`
  overflow:hidden;
  font-size:18px;
  line-height:24px;
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

