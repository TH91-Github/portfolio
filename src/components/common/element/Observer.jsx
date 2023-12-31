import { React, Children, cloneElement, isValidElement, useCallback, useEffect, useRef, useState } from "react";

const classOn = "observerOn";
function Observer ({children, onClass, maintenance, percentage}) { // lazyload El , className , 관찰여부
  const wrapEl = useRef(null);
  const [viewIdx, setViewIdx] = useState(null);
  
  // 개선책 👉 순서를 배열로 담고 활성화된 번호가 없으면 추가 있으면 unobserve 

  // DOM 조작 관련 & 테스트 & 리펙토링 필요 
  const updateObserver = useCallback((entries, observer) => {
    const observerArr = [...entries[0].target.parentElement.children]
    entries.forEach((entry) => {
      entry.target.classList.toggle(onClass ? onClass : classOn, entry.isIntersecting);
      if (entry.isIntersecting) { // 교차 상태인지   
        const activeIdx = observerArr.indexOf(entry.target); // 활성화 상태 index
        setViewIdx(activeIdx);
        // maintenance 👉 true 경우 반복
        !(maintenance ?? false) && observer.unobserve(entry.target)
      }
    });
  },[onClass, maintenance]);

  useEffect(() => {
    let observer;
    if (wrapEl.current) {
      const lazloadEl = [...wrapEl.current.children]; // lazyLoad 목록
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
  },[updateObserver,percentage]);

  const childrenWithProps = Children.map(children, (child, idx) => { // children on props 전달
    if (isValidElement(child)) {
      const observerlist = wrapEl.current && wrapEl.current.children;
      if(observerlist){
        const thisObserver = observerlist[idx];
        if(thisObserver.classList.contains(classOn)){
          return cloneElement(child, { view: true });
        }
      }
      return child
    }
  });
  
  return (
    <div ref={wrapEl} className="observerWrap">
      {childrenWithProps} 
    </div>
  )
}

export default Observer;