import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Page from './component/Pages/Page';
import Profile from './component/Profile/Profile';
import Code from './component/Code/Code';
import Addnew from './component/Addnew/Addnew';
import Showcode from './component/ShowCode/Showcode';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router= createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
  },
  {
    path :"signup",
    element: <Signup/>
  },
  {
    path: "page",
    element:<Page/>
  },
  {
    path:"profile",
    element:<Profile/>
  },
  {
    path:"yourcode",
    element:<Code/>
  },
  {
    path:"addnew",
    element:<Addnew/>
  },
  {
    path:"showcode",
    element:<Showcode/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
