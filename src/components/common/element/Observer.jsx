import { React, Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState, useMemo } from "react";

function Observer ({children, onClass, maintenance, percentage}) { // lazyload El , className , 관찰여부
  const wrapEl = useRef(null);
  const [propsArr, setPropsArr] = useState(null);
  const [viewIdx, setViewIdx] = useState(null);

  console.log("랜더링 체크")
  const updateObserver = useCallback((entries, observer) => {
    const observerArr = [...entries[0].target.parentElement.children]
    entries.forEach((entry) => {
      entry.target.classList.toggle(onClass ? onClass : 'on', entry.isIntersecting);
      if (entry.isIntersecting) { // 교차 상태인지   
        const activeIdx = observerArr.indexOf(entry.target); // 활성화 상태 index
        setViewIdx(activeIdx);
        console.log(propsArr)
        // maintenance 👉 true 경우 반복
        !(maintenance ?? false) && observer.unobserve(entry.target)
      }
    });
  },[onClass, maintenance]);

  useEffect(() => {
    let observer;
    if (wrapEl.current) {
      const lazloadEl = [...wrapEl.current.children]; // lazyLoad 목록
      // setPropsArr(iniPropsArr(lazloadEl.length));
      observer = new IntersectionObserver((updateObserver),{ // 옵션 입력 
        threshold: percentage??0.1 // 기본 값 10% 보였을 경우 실행
      });
      lazloadEl.forEach(item => {
        observer.observe(item);
      });
    }
    return () => { // clean up function
      observer && observer.disconnect()
    }
  },[updateObserver])

  const iniPropsArr = (propsLength) => {
    const newProps = [];
    for(let num=0; num < propsLength;num++){
      newProps.push({
        active: false,
      })
    }
    return newProps;
  }

  const childrenWithProps = Children.map(children, (child, idx) => {
    if (isValidElement(child)) {
      console.log(child)
      /*
        on을 찾는다
      */
      if(idx === viewIdx){
       
        return cloneElement(child, { view: false });
      }
      return child
    }
  });

  return (
    <div ref={wrapEl}>
      {/* {Children.map(children, child =>
        cloneElement(child, { propsTest: view })
      )} */}
      {/* {childrenWithProps} */}
      {/* 각 다른 컴포넌트 들 : props 값을  */}
      {childrenWithProps} 
      
    </div>
  )
}

export default Observer;