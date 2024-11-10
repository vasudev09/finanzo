import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Formpage from './pages/Form';
import Mainpage from './pages/Main';

const router = createBrowserRouter([
  {
    path: "/finanzo-web",
    element: <App />,
  },
  {
    path: "/form",
    element: <Formpage />,
  },
  {
    path: "/main",
    element: <Mainpage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

