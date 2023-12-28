import styled from "styled-components";
import * as S from "./MainStyled";

function Visual(props){
  // console.log(props)
  return (
    <Test className={props.active? "on":"off"}>
      Visual
    </Test>
  )
}
export default Visual;

const Test = styled.div`
  width:100%;
  height:100vh;
  border:1px solid green;
`