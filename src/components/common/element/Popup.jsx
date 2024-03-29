import { Children, cloneElement, isValidElement, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "assets/styles/StyledCm";
import { colors, media, transitions } from "assets/styles/Variable";

function Popup ({ children, popupOn, ...props }){
  const [beforeY, setBeforeY] = useState(0);
  const popupClosed = () => { // 닫기
    mobileScrollOff(false);
    popupOn(false)
  }
  const childrenProps = Children.map(children, (child) => {
    if(isValidElement(child)){
      return cloneElement(child, { popupClosed, ...props});
    }
    return child
  })

  const mobileScrollOff = useCallback((chkOnOff)=>{
    const body = document.body;
    if(chkOnOff){
      setBeforeY(window.pageYOffset);
      body.style.overflow = 'hidden';
      body.style.height = '100%';
    }else{
      body.removeAttribute('style');
      window.scrollTo({top:beforeY, behavior: 'instant'});
      // setTimeout(() => { // 팝업 닫은 후 이동이 안되었을 경우
      //   if(window.pageYOffset < 10){
      //     window.scrollTo({top:beforeY, behavior: 'instant'});
      //   }
      // },100)
    }
  },[beforeY])
  useEffect(()=>{
    mobileScrollOff(true);
  },[mobileScrollOff])

  
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
    height:calc(80% - 30px);
    min-height:450px;
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
    width:15px;
    height:15px;
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