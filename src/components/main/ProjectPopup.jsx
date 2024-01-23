
import * as SC from "assets/styles/StyledCm";
import { SvgRecord, SvgSkills, SvgTalk } from "assets/styles/SvgPath";
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
          {
            data.link.length > 1 && <a href={data.link} target="_balnk" title="새 창 열기" className="link"></a>
          }
        </div>
      </PopupHead>
      <PopupCont className="popup__cont">
        <div className="popup__cont-item detail">
          <p className="tit">
            <span className="icon"><SvgRecord /></span>
            <span>프로젝트</span>
          </p>
          <ul className="detail__lists">
            <li className="detail__lists-item"> {/* 주최 회사 */}
              <p className="tit-s">진행 회사</p>
              <p className="txt">{data.company}</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 기간 */}
              <p className="tit-s">투입 인원</p>
              <p className="txt">{data.people} 명</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 인원 */}
            <p className="tit-s">기간</p>
              <p className="txt">{data.date}</p>
            </li>
          </ul>
        </div>
        <div className="popup__cont-item skills">
          <p className="tit">
            <span className="icon"><SvgSkills /></span>
            <span>Skills</span>
          </p>
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
            <p className="tit">
              <span className="icon"><SvgTalk /></span>
              <span>프로젝트 업무</span>
            </p>
            <ul className="detail__lists">
              <li className="detail__lists-item">
                <p className="tit-s">프로젝트 업무</p>
                {
                  data.contents.map((item,idx)=>(
                    <p className="txt" key={idx}>{item}</p>
                  ))
                }
              </li>
              <li className="detail__lists-item">
                <p className="tit-s">프로젝트 소감</p>
                {
                  data.review.map((item,idx)=>(
                    <p className="txt" key={idx}>{item}</p>
                  ))
                }
              </li>
            </ul>
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
  gap:10px;
  position:relative;
  height:100%;
`;
const PopupHead = styled.div`
  padding:0 30px;
  text-align:center;
  .tit {
    font-size:28px;
    font-weight:800;
  }
  .desc{
    margin-top:10px;
    font-size:14px;
    color:${colors.subTextColor};
  }
  .project-status{
    margin-top:10px;
    .link {
      display:block;
      white-space: nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      font-size:14px;
      color:${colors.subTextColor};
      &::before{
        content:'🔗';
      }
    }
  }
  ${media.mo}{
    // max-height:120px;
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
      .icon {
        display:block;
        position:absolute;
        z-index:6;
        top:17px;
        left:17px;
        width:20px;
        height:20px;
        transform:translate(-50%, -50%);
        svg{
          position:absolute;
        }
      }
    }
    .tit-s {
      font-weight:800;
      &::before {
        position:absolute;
        left:16px;
        width:8px;
        height:12px;
        border-radius:5px 5px;
        transform:translateY(5px);
        background:${colors.bgBlack};
        content:'';
      }
    }
    .txt{
      margin-top:8px;
    }
    .detail {
      &__lists{
        &-item{
          margin-top:8px;
          &:first-child {
            margin-top:0px;
          }
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
        .icon {
          top:15px;
          left:15px;
          width:17px;
          height:17px;
        }
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
