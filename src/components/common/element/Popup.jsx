import { Children, cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Button } from "assets/styles/StyledCm";
import { colors, media, transitions } from "assets/styles/Variable";

function Popup ({ children, popupOn, ...props }){
  const popupClosed = () => { // 닫기
    popupOn(false)
  }
  const childrenProps = Children.map(children, (child) => {
    if(isValidElement(child)){
      return cloneElement(child, { popupClosed, ...props});
    }
    return child
  })
  return (
    <PopupLayer>
      <PopupInner className="popup__inner">
        {childrenProps}
        <CloseBtn onClick={()=> popupClosed()}>
          <span>닫기</span>
        </CloseBtn>
      </PopupInner>
      <Dimmed onClick={()=>popupClosed()}/>
    </PopupLayer>
  )
}
export default Popup;

const PopupLayer = styled.div`
  position:fixed;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  height:100%;
  opacity:0;
  animation:PopupOn .8s both;
  @keyframes PopupOn {
    0%{
      opacity:0;
    }
    100% {
      opacity:1;
    }
  }
`;
const PopupInner = styled.div`
  position:absolute;
  z-index:10;
  top:50%;
  left:50%;
  width:80%;
  min-width:500px;
  height:80%;
  min-height:500px;
  padding:30px;
  border-radius:10px;
  background:#fff;
  transform: translate(-50%, -50%);
  ${media.mo}{
    width:calc(100% - 30px);
    min-width:auto;
    height:calc(100% - 30px);
    padding:15px;
  }
`;

const CloseBtn = styled(Button)`
  position:absolute;
  top:30px;
  right:30px;
  width:30px;
  height:30px;
  &:hover, &:focus { 
    &>span{
      transform: rotate(-180deg);
      &::before,&::after{
        background:${colors.blue};
      }
    }
  }
  &>span{
    display:block;
    position:relative;
    width:100%;
    height:100%;
    text-indent:-9999px;
    transition:${transitions.base};
    &::before, &::after{
      position:absolute;
      top:50%;
      left:0;
      width:100%;
      height:2px;
      border-radius:50%;
      background:${colors.bgBlack};
      transition:${transitions.base};
      transform: translateY(-50%) rotate(45deg);
      content:'';
    }
    &::after{
      transform: translateY(-50%) rotate(-45deg) ;
    }
  }
  ${media.mo}{
    top:15px;
    right:15px;
  }
`;

const Dimmed = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.7);
`;