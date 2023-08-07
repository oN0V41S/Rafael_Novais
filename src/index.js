import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './router/Home/Home'
import Skills from './router/Skills/Skills'
import Projects from './router/Projects/Projects'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Skills",
    element: <Skills/>,
  },
  {
    path: "/Projects",
    element: <Projects/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
