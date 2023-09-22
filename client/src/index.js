import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Gastro from './pages/Gastro';
import Gaming from './pages/Gaming';
import './index.css';
import './App.css';
import { UserContextProvider } from './UserContext';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './commponents/Layout';
import Create from './pages/Create';
import Sport from './pages/Sport';
import Finance from './pages/Finance';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gastro",
        element: <Gastro />,
      },
      {
        path: "/gaming",
        element: <Gaming />,
      },
      {
        path: "/sport",
        element: <Sport />,
      },
      {
        path: "/finance",
        element: <Finance />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
      {
        path: "/edit/:id",
        element: <EditPost />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);


