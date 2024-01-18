import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from '@/router/Home';
import Projects from '@/router/Projects'
import Skills from '@/router/Skills'

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
    element: <Skills/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
