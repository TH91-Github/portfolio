import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from 'App';
import { routerData } from './RouterData';
import Error from 'components/common/layout/Error';

function RouterTemplate(){
  const router = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      children:[
        ...routerData,
      ]
    },
    {
      path:"/*",
      element:<Error />
    }
  ])
  return <RouterProvider router={router} />;
  // fallbackElement={<div>Loading...TEST</div>} 
}
export default RouterTemplate;
