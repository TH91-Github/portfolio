import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import * as SC from 'assets/styles/StyledCm';
import { colors, media, transitions } from 'assets/styles/Variable';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function MainProjectSwiper ({swiperData, swiperClick}){
  const [isFocus, setIsFocus] = useState('');
  const SwiperWrap = useRef(null);
  useEffect(()=>{
    const swiper = SwiperWrap.current.swiper;
    swiper.update();
    swiper.slideTo(0);
  },[swiperData])
  const focusIn = (focusNum) => {
    setIsFocus(focusNum);
  }
  const focusOut = (e) => {
    setIsFocus('')
  }
  const onesPlace = (number) => {
    return number >= 10 ? number : `0${number}`
  }
  return (
    <ProjectSwiper
        ref={SwiperWrap}
        slidesPerView={'auto'}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, A11y]}
      >
      {
        swiperData 
          ? swiperData.map((item, idx)=>(
            <SlideItem key={idx} className="item">
              <Number className="number">
                <AniNum 
                  className={`${isFocus === idx ?'isFocus':''}`} 
                  $aniNum={onesPlace(idx+1)}>
                  {onesPlace(idx+1)}
                </AniNum>
              </Number>
              <p className="tit">{item.title}</p>
              <p className="date">{item.date}</p>
              <ThumbnailImg className="thumbnail" $imgBg={item.img.bg && item.img.bg}>
                {
                  item.img 
                  ? <img src={item.img.src} alt={item.title} />
                  : <div className="substitution"><span>{item.title}</span></div>
                }
                
              </ThumbnailImg>
              <div className="btn-wrap">
                <PopupBtn 
                  type="button"
                  onFocus={(e) => focusIn(idx)}
                  onBlur={(e)=> focusOut(idx)}
                  onClick={()=>swiperClick(item,idx)}
                  className={`${isFocus === idx?'isFocus':''}`}>
                  <span>자세히 보기</span>
                </PopupBtn>
              </div>
            </SlideItem>
          ))
        : <SwiperSlide>Slide 1</SwiperSlide>
      }
    </ProjectSwiper>
  )
}
export default MainProjectSwiper;

const ProjectSwiper = styled(Swiper)`
  overflow:unset;
  padding:0 0 30px;
  .tit{
    margin-top:30px;
    font-weight:600;
  }
  .date{
    margin-top:8px;
    font-size:14px;
    color:${colors.subTextColor};
  }
  .btn-wrap{
    margin-top:30px;
  }
  .swiper-pagination {
    display:inline-block;
    width:auto;
    bottom:0;
    left:auto;
    right:0px;
    .swiper-pagination-bullet{
      margin:0;
      border-radius:0;
      width:40px;
      background:${colors.gray};
      transition:${transitions.base};
      &.swiper-pagination-bullet-active{
        background:${colors.yellow};
      }
    }
  }
  ${media.mo}{
    .tit{
      margin-top:20px;
      font-size:18px;
    }
  }
`;
const SlideItem = styled(SwiperSlide)`
  width:calc(100% / 4);
  max-width:320px;
  padding: 20px;
  border-radius:20px;
  box-shadow:0px 5px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    .number > span {
      &::before, &::after{
        transform:translateY(0);
      }
    }
  }
  ${media.mo}{
    width:80%;
  }
`;
const Number = styled.span`
  display:inline-block;
  position:relative;
  padding-bottom:10px;
  font-size:42px;
  font-weight:900;
  transition:${transitions.base};
  line-height:1;
  &::after{
    position:absolute;
    bottom:0;
    left:0;
    width:50%;
    height:4px;
    background:${colors.yellow};
    content:"";
  }
  ${media.mo}{
    font-size:32px;
  }
`;
const AniNum = styled.span`
  display:block;
  overflow:hidden;
  position:relative;
  text-align:center;
  color:${colors.gray};
  &::before, &::after{
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;
    width:50%;
    transition:${transitions.base};
    transform:translateY(-101%);
    color:${colors.blue};
    content:'${props => props.$aniNum || '00'}';
  }
  &::after{
    transform:translateY(101%);
    left:auto;
    right:0;
    direction:rtl;
  }
  &:first-child{
    &::before{
      width:55%;
    }
    &::after{
      width:45%;
    }
  }
  &.isFocus {
    &::before, &::after{
      transform:translateY(0);
    }
  }
`;
const ThumbnailImg = styled.div`
  overflow:hidden;
  position:relative;
  width: 100%;
  margin-top:10px;
  padding-bottom:100%;
  border-radius:10px;
  ${props => props.$imgBg && `background:${props.$imgBg === 'dark' ? '#000': '#fff'};`}
  & > img {
    width:auto;
    max-width:100%;
  }
  & > img, .substitution {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
  }
  .substitution {
    display:flex;
    width:100%;
    height:100%;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    background:${colors.bgBlack};
    &>span{
      font-size:32px;
      color:#fff;
    }
  }
`;
const PopupBtn = styled(SC.Button)`
  display:inline-block;
  overflow:hidden;
  position:relative;
  padding:10px 15px;
  border-radius:5px;
  box-shadow:1px 5px 8px rgba(0, 0, 0, 0.2);
  &>span{
    font-size:14px;
    font-weight:550;
    color:${colors.gray};
    transition:${transitions.base};
  }
  &::after{ 
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
    width:100%;
    height:100%;
    background:${colors.blue};
    transition:${transitions.base};
    transform:translateX(-105%);
    content:"";
  }
  &:hover, &:focus, &.isFocus {
    &>span{
      color:#fff;
    }
    &::after{
      transform:translateX(0);
    }
  }
`;