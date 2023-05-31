import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu";
import OrderFood from './../pages/OrderFood/OrderFood';
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/secreate/Secret";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/allUsers/AllUsers";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'orderFood/:category',
          element:<OrderFood/>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret> </PrivateRoute>
        }
    ],

    },
    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'myCart',
          element:<MyCart></MyCart>
        },
        {
          path:'allUsers',
          element:<AllUsers></AllUsers>
        }
      ]
    }
  ]);

  