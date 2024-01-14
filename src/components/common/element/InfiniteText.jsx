import { media } from "assets/styles/Variable";
import styled from "styled-components";

// text size 및 반복 수가 적을 경우 예외 처리
function InfiniteText ({textData, view}) {
  const InfiniteText = textData ?? ["test","test","test","test","test","test","test","test"];
  return( 
    <>
      {
        view &&  
        <InfiniteWrap className="infinite__text">
          <TextBox className="infinite__text__box original">
            {
              InfiniteText.map((item,idx)=>{
                return <p key={idx}>
                  {item}
                </p>
              })
            }
          </TextBox>
          <TextBox className="infinite__text__box clone">
            {
              InfiniteText.map((item,idx)=>{
                return <p key={idx}>
                  {item}
                </p>
              })
            }
          </TextBox>
        </InfiniteWrap>
      }
    </>
  ) 
}
export default InfiniteText;

const InfiniteWrap = styled.div`
  overflow:hidden;
  position:relative;
  width:100%;
  height:100px;
  &::before, &::after {
    position:absolute;
    z-index:2;
    top:0;
    width:10%;
    height:100%;
    background: linear-gradient(to right,  rgba(36,36,36,1) 0%,rgba(36,36,36,0.99) 0%,rgba(36,36,36,0) 100%);
    content:"";
  }
  &::after{
    right:-2px;
    transform: scaleX(-1);
  }
  ${media.mo}{
    height:70px;
  }
`;
const TextBox = styled.div`
  display:flex;
  flex-wrap:nowrap;
  gap:10px;
  position:absolute;
  top:0;
  left:0;
  width: max-content;
  p{
    padding:0 10px;
    font-size:80px;
  }
  &.original {
    animation: textAni-1 15s linear infinite;
  }
  &.clone {
    transform: translateX(100%);
    animation: textAni-2 15s linear infinite;
  }
  @keyframes textAni-1 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes textAni-2 {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
  ${media.mo}{
    p{
      font-size:56px;
      line-height:70px;
    }
  }
`;