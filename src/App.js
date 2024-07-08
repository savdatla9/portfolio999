import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { PrimeReactProvider } from 'primereact/api';

import { ToastContainer } from 'react-toastify';

import './App.css';

import Header from './header';
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
    path: '/signup',
    element: <Auth />,
  }, {
    path: '/videocall',
    element: <VideoCall />
  },
]);


function App() {
  return (
    <div className="App">
      <Header />
      <PrimeReactProvider>
        <RouterProvider router={router} />
        <ToastContainer autoClose={5000} theme={'colored'} />
      </PrimeReactProvider>
    </div>
  );
}

export default App;