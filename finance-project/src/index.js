import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About  from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Sixteen from './Pages/Subpages/16u';
import EighteenTwenty from './Pages/Subpages/18-20';
import TwentyOver from './Pages/Subpages/20o';
import CardComp from './Pages/articles/CardComp';
import SixteenEighteen from './Pages/Subpages/16-18';
import SavingsCheckings from './Pages/articles/SavingsCheckings';
import HighYieldSavings from './Pages/articles/HighYieldSavings';
import RothIRA from './Pages/articles/RothIRA';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Services",
    element: <Services/>,
  },
  {
    path: "16u", 
    element: <Sixteen/>
  },
  {
    path: "16-18",
    element: <SixteenEighteen/>
  },
  {
    path: "18-20",
    element: <EighteenTwenty/>
  },
  {
    path: "20o",
    element: <TwentyOver/>
  },
  {
    path: "cardcomparison",
    element: <CardComp/>
  },
  {
    path: "savecheck",
    element: <SavingsCheckings/>
  },
  {
    path: "highyeild",
    element: <HighYieldSavings/>
  },
  {
    path: "rothIRA",
    element: <RothIRA/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
