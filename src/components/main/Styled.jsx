import * as SC from "assets/styles/StyledCm";
import styled from "styled-components";

export const MainInner = styled(SC.InnerStyle)`
  padding:100px 30px;
`;

export const TitleBox = styled.div`
  text-align:${props => props.$align || 'center'};
`;