import styled from "styled-components";
import * as SC from "assets/styles/StyledCm";
import { media } from "assets/styles/Variable";

export const MainInner = styled(SC.InnerStyle)`
  padding:80px 30px;
  ${media.mo}{
    padding:50px 15px;
  }
`;

export const TitleBox = styled.div`
  text-align:${props => props.$align || 'center'};
`;