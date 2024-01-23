import { breakPoints } from "assets/styles/Variable";

export const isMobileChk = () => { // 모바일 사이즈 체크
  const wininnW = window.innerWidth;
  const scrollbarW = parseInt(wininnW - document.body.clientWidth);
  const winW = parseInt(wininnW - scrollbarW);
  let moChk = false;
  breakPoints.mo <= winW ? moChk = false
  : moChk = true;
  return moChk;
}