
import * as SC from "assets/styles/StyledCm";
import { colors } from "assets/styles/Variable";
import styled from "styled-components";


function ProjectPopup ({popupData}){

  console.log(popupData)
  return(
    <div>
      <PopupHead className="popup__head">
        <p className="tit">Title</p>
        <div className="desc">
          설명을 입력하는 곳
        </div>
        <div className="project-status">
          <span className="icon"></span>
          <p>🔗: </p> 
          {/* 리뉴얼 or 존재하지 않습니다. https://주소 */}
        </div>
      </PopupHead>
      <PopupCont className="popup__cont">
        <div className="popup__cont-item detail">
          <p className="tit">
            <span className="icon"></span>
            <span>Title</span>
          </p>
          <ul className="detail__lists">
            <li className="detail__lists-item"> {/* 주최 회사 */}
              <p className="tit-s">Tit</p>
              <p className="txt">Txt</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 기간 */}
              <p className="tit-s">Tit</p>
              <p className="txt">Txt</p>
            </li>
            <li className="detail__lists-item"> {/* 투입 인원 */}
            <p className="tit-s">Tit</p>
              <p className="txt">Txt</p>
            </li>
          </ul>
        </div>
        <div className="popup__cont-item skills">
          <p className="tit"><span>Skills</span></p>
          <ul className="skills__lists">
            <li className="skills__lists-item"><span>TEXT</span></li>
            <li className="skills__lists-item"><span>TEXT</span></li>
            <li className="skills__lists-item"><span>TEXT</span></li>
            <li className="skills__lists-item"><span>TEXT</span></li>
          </ul>
        </div>
        <div className="popup__cont-item review">
          <div className="review-box">
            <p className="tit"><span>Tit</span></p>
            <p className="txt">sdfsdfsdfsdfsdf</p>
          </div>
          <div className="review-box">
            <p className="tit"><span>Tit</span></p>
            <p className="txt">sdfsdfsdfsdfsdf</p>
          </div>
        </div>
      </PopupCont>
    </div>
  )
}
export default ProjectPopup;

// 부모 기준 임시 scss로 선 진행
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
  }
`;
const PopupCont = styled.div`
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
    position:relative;
    width:calc((100% - 20px) / 2);
    height:100%;
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
      font-size:21px;
      font-weight:800;
      line-height:35px;
      &-s {
        font-size:18px;
        font-weight:800;
      }
    }
    .detail {
      &__lists{
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
      }
    }
    .skills{
      &__lists {
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        &-item{
          padding:12px 30px;
          border-radius:30px;
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
      }
    }
  }
`;
