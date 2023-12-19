import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StartPage } from './pages/StartPage.tsx';
import { LoginPage } from './pages/LoginPage.tsx';
import { Cars } from './components/Cars.tsx';
import { CatFact } from './components/CatFact.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/useStateExample",
    element: <Cars />
  },
  {
    path: "/fetchDataExample",
    element: <CatFact />
  },
  {
    path: "/catFacts",
    element: <CatFact />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
