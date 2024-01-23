import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors, media, transitions } from "assets/styles/Variable";
import * as SC from "assets/styles/StyledCm";
import { SvgCode } from "assets/styles/SvgPath";

function Header ({headeList}) {
  const [scrollZero, setScrollZero] = useState(false);
  let scrollY = useRef(0);
  // scroll
  const eventScroll = useCallback(() => {
    scrollY.current = window.pageYOffset
    scrollY.current > 0 ? setScrollZero(true) : setScrollZero(false)
  },[]);
  useEffect(()=>{
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  },[eventScroll])
  const logoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
  const navClick = (selectName) =>{
    const selectBox = document.getElementById(selectName);
    let selectTop = window.pageYOffset + selectBox.getBoundingClientRect().top;

    if(headeList[1].title === selectName){ // About - sticky 
      const VisualBox = document.getElementById(headeList[0].title);
      const VisualTop = window.pageYOffset + VisualBox.getBoundingClientRect().top;
      const VisualH = VisualBox.offsetHeight;
      selectTop = VisualTop + VisualH;
    }
    window.scrollTo({ top: selectTop, behavior: 'smooth' }); 
  }
  return (
    <HeaderWrap className={`header ${scrollZero ? 'header-fixed' : ''}`}>
      <HeaderInner className="header__inner">
        <MainBtn onClick={()=> logoClick()}>
          <TitIcon><SvgCode $fillColor={scrollZero ? colors.bgBlack : "#fff"}/></TitIcon>
          <Tit>TEST</Tit>
        </MainBtn>
        <NavWrap>
          {
            headeList.map((item,idx) => 
              idx > 0 && <NavBtn
                $scrollZero={scrollZero}
                onClick={() => navClick(item.title)}
                key={idx}>
                {item.title}
              </NavBtn>
            )
          }
        </NavWrap>
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
  transition:${transitions.base};
  color:#fff;
  &.header-fixed {
    height:50px;
    background: #fff;
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
    box-shadow:0px 0px 10px rgba(0, 0, 0, 0.25);
    color:${colors.bgBlack};
  }
  ${media.mo} {
    height:60px;
  }
`;
const HeaderInner = styled(SC.InnerStyle)`
  display:flex;
  justify-content:space-between;
  align-items:center;
  height:100%;
`;
const MainBtn = styled(SC.Button)`
  display:flex;
  align-items:center;
`;
const TitIcon = styled.i`
  display:inline-block;
  width:30px;
  height:30px;
`;
const Tit = styled.h1`
  display:inline-block;
  font-size:24px;
  font-weight:700;
  letter-spacing:-0.25px;
  ${media.mo}{
    font-size: 21px;
  }
`;
const NavWrap = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
  ${media.onlyMo}{
    gap:0;
  }
`;
const NavBtn = styled(SC.Button)`
  padding:5px 10px;
  font-size: 18px;
  border-radius:5px;
  transition:${transitions.base};
  &:hover, &:focus{
    background:${props => props.$scrollZero ? colors.bgBlack : '#fff'};
    color:${props => props.$scrollZero ? '#fff' : colors.bgBlack};
  }
  ${media.mo}{
    font-size: 14px;
  }
`;