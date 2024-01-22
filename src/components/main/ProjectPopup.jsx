
import * as SC from "assets/styles/StyledCm";
import { colors, media } from "assets/styles/Variable";
import styled from "styled-components";

// 기본 데이터 값
const projectDefalut = {title:"Title", desc:"TEST TEST", img:"없음",company:"회사 입력", link:"URL", people:"투입 인원", participation:"참여도",  date:"기간", skills:["TEST","기술"], contents:["작업내용"], review:["TEST"],};
function ProjectPopup ({popupData}){
  const data = popupData ?? projectDefalut
  return(
    <PopupWrap>
      <PopupHead className="popup__head">
        <p className="tit">{data.title}</p>
        <div className="desc">
          {data.desc}
        </div>
        <div className="project-status">
          <p classname="link">
            {
              data.link.length > 1 && <a href={data.link}>{data.link}</a>
            }
          </p> 
        </div>
      </PopupHead>
      <PopupCont className="popup__cont">
        <div className="popup__cont-item detail">
          <p className="tit">
            <span>프로젝트</span>
          </p>
          <ul className="detail__lists">
            <li className="detail__lists-item"> {/* 주최 회사 */}
              <p className="tit-s">진행 회사</p>
              <p className="txt">{data.company}</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 기간 */}
              <p className="tit-s">투입 인원</p>
              <p className="txt">{data.people}</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 인원 */}
            <p className="tit-s">기간</p>
              <p className="txt">{data.date}</p>
            </li>
          </ul>
        </div>
        <div className="popup__cont-item skills">
          <p className="tit"><span>Skills</span></p>
          <ul className="skills__lists">
            {
              data.skills.map((item, idx)=>(
                <li className="skills__lists-item" key={idx}>
                  <span>{item}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="popup__cont-item review">
          <div className="review-box">
            <p className="tit"><span>프로젝트 업무</span></p>
            {/* 배열 */}
            {
              data.contents.map((item,idx)=>(
                <p className="txt" key={idx}>{item}</p>
              ))
            }
          </div>
          <div className="review-box">
            <p className="tit"><span>프로젝트 소감</span></p>
            {
              data.review.map((item,idx)=>(
                <p className="txt" key={idx}>{item}</p>
              ))
            }
          </div>
        </div>
      </PopupCont>
    </PopupWrap>
  )
}
export default ProjectPopup;
const PopupWrap = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  height:100%;
`;
const PopupHead = styled.div`
  padding:0 30px;
  text-align:center;
  .tit {
    font-size:36px;
    font-weight:800;
  }
  .desc{
    margin-top:10px;
    font-size:14px;
    color:${colors.subTextColor};
  }
  .project-status{
    margin-top:10px;
    a {
      display:block;
      white-space: nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      &::before{
        display:block;
        content:'🔗';
      }
    }
  }
  ${media.mo}{
    max-height:100px;
    .tit {
      font-size:18px;
    }
  }
`;
const PopupCont = styled.div`
  overflow-y:auto;
  flex-grow:1;
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  position:relative;
  margin-top:30px;
  padding:30px 20px;
  border-radius:10px;
  background:${colors.bgWhite};
  ${SC.insetShadow}
  .popup__cont-item {
    align-self : flex-start;
    position:relative;
    width:calc((100% - 20px) / 2);
    padding-left:50px;
    &::before {
      position:absolute;
      top:0;
      left:15px;
      width:10px;
      height:100%;
      border-bottom-left-radius:10px;
      border-bottom-right-radius:10px;
      box-shadow:inset 4px 0px 4px -3px rgba(0,0,0,.6), inset -4px 0px 4px -3px rgba(255,255,255,.8);
      content:'';
    }
    &::after{
      position:absolute;
      z-index:5;
      top:0;
      left:0;
      width:35px;
      height:35px;
      border-radius:50%;
      background:${colors.bgWhite};
      box-shadow:-2px -2px 1px rgba(255,255,255,.9), 1px 1px 5px rgba(0,0,0,.3);
      content:'';
    }
    .tit{ 
      margin-bottom:10px;
      font-size:18px;
      font-weight:800;
      line-height:35px;
      &-s {
        font-weight:800;
      }
    }
    .detail {
      &__lists{
        &-item{
          margin-top:8px;
          &:first-child {
            margin-top:0px;
          }
        }
        .tit-s {
          &::before {
            position:absolute;
            left:16px;
            width:8px;
            height:12px;
            border-radius:5px 5px;
            transform:translateY(5px);
            background:${colors.blue};
            content:'';
          }
        }
        .txt{
          margin-top:8px;
        }
      }
    }
    .skills{
      &__lists {
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        &-item{
          padding:12px 25px;
          border-radius:25px;
          text-align:center;
          ${SC.insetShadow};
          & > span { 
            font-weight:700;
          }
        }
      }
    }
    &.review{
      width:100%;
    }
    .review {
      &-box {
        margin-top:10px;
        &:first-child {
          margin-top:0;
        }
        .txt {
          margin-top:8px;
          &:first-child{
            margin-top:0px;
          }
        }
      }
    }
  }
  ${media.mo}{
    margin-top:20px;
    .popup__cont-item {
      width:100%;
      height:auto;
      padding-left:45px;
      &::before{
        left:12px;
        width:8px;
      }
      &::after{
        width:30px;
        height:30px;
      }
      .tit{
        margin-bottom:8px;
        font-size:18px;
        line-height:24px;
      }
      .detail {
        &__lists{
          &-item {
            margin-top:8px;
            &:first-child{
              margin-top:0;
            }
          }
          .tit-s {
            &::before {
              left:12px;
              width:6px;
              height:9px;
            }
          }
        }
      }
      .skills{
        &__lists {
          gap:15px;
          &-item{
            padding:10px 20px;
            border-radius:20px;
            &>span{
              font-size:14px;
            }
          }
        }
      }
      .review {
        &-box {
          .txt{
            font-size:14px;
          }
        }
      }
    }
  }
`;
