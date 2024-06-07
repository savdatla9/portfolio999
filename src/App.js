import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { PrimeReactProvider } from 'primereact/api';

import './App.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './mainfolder/home';
import Auth from './mainfolder/login';
import VideoCall from './videocallfolder/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: '/login',
    element: <Auth />,
  }, {
    path: '/videocall',
    element: <VideoCall />
  },
]);


function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;