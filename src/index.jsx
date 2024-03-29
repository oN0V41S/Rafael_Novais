import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/style.scss'
import Home from '@/pages/Home';
import Projects from '@/pages/Projects'
import Tools from '@/pages/tools'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/skills",
    element: <Tools/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
