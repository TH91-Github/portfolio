import { Children, cloneElement, isValidElement } from "react";
import styled from "styled-components";

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
    <PopupWrap>
      {childrenProps}
      <Dimmed onClick={()=>popupClosed()}/>
    </PopupWrap>
  )
}
export default Popup;

const PopupWrap = styled.div`
  position:fixed;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  height:100%;
`;

const Dimmed = styled.div`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,.5);
`;