import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, media, transitions } from "assets/styles/Variable";
import * as SC from "assets/styles/StyledCm";
import { useNavigate } from "react-router-dom";
import { SvgCode } from "assets/styles/SvgPath";

const categoryList = ["About","Project","Test"]
let scrollY = 0;
function Header () {
  const navigate = useNavigate();
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

  const NavClick = () =>{
    console.log("Click");
  }
  return (
    <HeaderWrap className={`header ${scrollZero ? 'header-fixed' : ''}`}>
      <HeaderInner className="header__inner">
        <MainBtn onClick={()=> navigate("/")}>
          <TitIcon><SvgCode $fillColor={scrollZero ? colors.bgBlack : "#fff"}/></TitIcon>
          <Tit>TEST</Tit>
        </MainBtn>
        <NavWrap>
          {
            categoryList.map((item,idx) => 
              <NavBtn
                $scrollZero={scrollZero}
                onClick={() => NavClick()}
                key={idx}>
                {item}
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
    height:70px;
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
`;
const NavWrap = styled.div`
  display:flex;
  align-items:center;
  gap:10px;
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
`;