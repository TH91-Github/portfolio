import { useEffect, useState } from "react";
import styled from "styled-components";
import { media, transitions } from "assets/styles/Variable";
import { InnerStyle } from "assets/styles/StyledCm";

let scrollY = 0;
function Header () {
  const [scrollZero, setScrollZero] = useState(false);
  // scroll
  const eventScroll = () => {
    scrollY = window.pageYOffset
    scrollY > 0 ? setScrollZero(true) : setScrollZero(false)
  };

  useEffect(()=>{
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  },[])

  return (
    <HeaderWrap className={`header ${scrollZero ? 'header-fixed' : ''}`}>
      <HeaderInner className="header__inner">
        dd
      </HeaderInner>
    </HeaderWrap>
  )
}
export default Header;

const HeaderWrap = styled.div`
  position:fixed;
  z-index:10;
  top:0;
  left:0;
  width:100%;
  height:80px;
  background: #fff;
  transition:${transitions.base};
  &.header-fixed {
    height:50px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    box-shadow:0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  ${media.mo} {
    height:70px;
  }
`;
const HeaderInner = styled(InnerStyle)`
  display:flex;
  align-items:center;
  height:100%;
  border:1px solid red;
`;
