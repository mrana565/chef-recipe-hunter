/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/blog/Blog";
import Login from "../Pages/Login&Logout/Login/Login";
import Register from "../Pages/Login&Logout/Register/Register";
import Home from "../Pages/Home/Home/Home";
import Chefs from "../Pages/Home/Chefs/Chefs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Chefs />,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
