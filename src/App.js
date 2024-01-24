import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom';
import { sSetMobileChk } from "store/store";
import { isMobileChk } from "utils/common";
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import Header from 'components/common/layout/Header';
import 'assets/scss/common.scss';

const MainList = [
  {
    id:1,
    title:"Visual"
  },
  {
    id:2,
    title:"About"
  },
  {
    id:3,
    title:"Skills"
  },
  {
    id:4,
    title:"Project"
  },
]
function App() {
  const dispatch = useDispatch();
  // Resize
  const reSizesEvent = useCallback(()=> {
    let moState = isMobileChk();
    dispatch(sSetMobileChk(moState))
  },[dispatch])
  useEffect(() => {
    reSizesEvent();
    window.addEventListener("resize", reSizesEvent);
    return () => {
      window.removeEventListener("resize", reSizesEvent);
    };
  }, [reSizesEvent]);
  return (
    <div className="App">
      <GlobalStyles />
      <Header headeList={MainList}/>
      <Outlet context={{MainList}}/>
    </div>
  );
}

export default App;
