import styled, {css, keyframes} from 'styled-components';
import { breakPoints, media} from './Variable';

// css
export const notice = css`
  display:inline-block;
  position:relative;
  padding-left:1em;
  &::before {
    position:absolute;
    top:0;
    left:0;
    content:'※';
  }
`;
export const insetShadow = css`
  box-shadow:inset 5px 5px 10px -3px rgba(0,0,0,.5), inset -5px -5px 10px 2px rgba(255,255,255,.9);
`;
// keyframes
export const fadeIn = (xy, num) => keyframes`
  0%{
    transform: ${
      xy === '-x'
      ? `translateX(${num ? num*-1 : -50}px)`
      : xy === 'x'
      ? `translateX(${num ? num : 50}px)`
      : xy === '-y'
      ? `translateY(${num ? num*-1 : -50}px)`
      : `translateY(${num ? num : 50}px)`
    };
    opacity:0;
  }
  100%{
    transform: translate(0,0);
    opacity:1;
  }
`;
// animation
export const animation =(aniName, t,ttf,d,fm) => css`
  animation: ${aniName} ${t ? t : '1'}s ${ttf ? ttf :'ease'} ${d ? d : 0}s ${fm ? fm : 'both'};
`;
export const Button = styled.button.attrs({
  type:'button',
})`
  display:inline-block;
  ${props => `
    ${props.$width && `width:${props.$width}`};
    ${props.$height && `height:${props.$height}`};
  `}
  cursor:pointer;
`;

export const BtnArticle = styled.div`
  display:flex;
  justify-content : ${props => props.$justifyConent || 'flex-start'};
  ${props => props.$gap && `gap: ${props.$gap}`};
  margin-top:${props => props.$marginTop || 30 }px;
  ${media.mo}{
    margin-top:${props => props.$marginTop || 20 }px;
  }
`;  

export const InnerStyle = styled.div`
  width:100%;
  max-width:${breakPoints.pc}px;
  margin:0 auto;
  padding:0 30px;
  ${media.mo} {
    padding: 0 15px;
  }
`;

// ♣ ICON
export const Icon = styled.i`
  display:inline-block;
  position:relative;
  width: ${props => props.width || "20px"};
  height: ${props => props.width || "20px"};
  border-radius: ${props => props.$borderRadius || 0};
  ${props => props.$bg 
    && 
    `
      background: ${props.$bg};
      border:1px solid ${props.$bg};
    `
  };
`;
