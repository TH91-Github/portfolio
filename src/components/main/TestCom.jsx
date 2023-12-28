import { Children, cloneElement, isValidElement } from "react";


const Layout = ({ children }) => {
  // const childrenWithProps = Children.map(children, (child) => {
  //   if (isValidElement(child)) {
  //     return cloneElement(child, { propsTest: 'PROPS_값' });
  //   }
  //   return child;
  // });

  return <div className={"d"}>
    {Children.map(children, child =>
      cloneElement(child, { propsTest: 'PROPS_값' })
    )}
  </div>;
};

export default Layout;
