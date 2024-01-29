import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';
import { sSetDataAll, sSetMobileChk } from "store/store";
import { isMobileChk } from "utils/common";
import { loadAxios } from "utils/api";
import Header from 'components/common/layout/Header';
import Error from "components/common/layout/Error";
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import 'assets/scss/common.scss';

function App() {
  const [loadError, setLoadError] = useState(null);
  const portfolioData = useSelector((state) => state.allData);
  const dispatch = useDispatch();
  const MainList = portfolioData && Object.entries(portfolioData).map( item => {
    return item[1].title ? item[1].title : 'Visual'
  })
  
  // 초기 데이터 변수 저장 및 store 저장
  const loadData = useCallback(async () => {
    try{ 
      const res = await loadAxios("https://raw.githubusercontent.com/TH91-Github/Data_Storage/main/th/data.json");
      dispatch(sSetDataAll(res.data.Profile));
    }catch(error) {
      setLoadError(error)
    }
  }, [dispatch]);

  useEffect(() => {
    loadData();
  }, [loadData]);

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

  if(!portfolioData) return null
  if(loadError) return <Error>Error</Error>
  return (
    <div className="App">
      <GlobalStyles />
      <Header headeList={MainList}/>
      <Outlet context={{MainList}}/>
    </div>
  );
}

export default App;
