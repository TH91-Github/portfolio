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
export const targetScroll = (target, addNum) => { // 타겟 scroll
  const targetTop = window.scrollY + target.getBoundingClientRect().top;
  const correction = addNum ?? 0;
  console.log(correction)
  window.scrollTo({top: targetTop - 60 + correction, behavior: 'smooth'});
}

export function TextBr (text) {  // br 태그 삽입 삭제 예정 textChk로 이동
  if(!text) return;
  const brTag ="<br />";
  // 변경 값을 \n 으로 하고 css : white-spase: pre-wrap; 사용 가능
  const brChange = text.replaceAll(/(<br>|<br\/>|<br \/>|<\/br>|\r|\n)/gi, brTag).split(brTag);
  const newBr = brChange.filter(item => item.length > 0); // 공백 배열 요소 제거
  return newBr.reduce((prevText, currentText) => {
    return <>{prevText} <br />{currentText.trim()}</>
  })
}