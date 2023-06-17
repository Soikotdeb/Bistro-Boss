import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu";
import OrderFood from "./../pages/OrderFood/OrderFood";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/shared/secreate/Secret";
import DashBoard from "../layout/DashBoard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import AllUsers from "../pages/DashBoard/allUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/manageItems/ManageItems";
import Payment from "../pages/DashBoard/payment/Payment";
import UserHome from "../pages/DashBoard/userHome/UserHome";
import AdminHome from "../pages/DashBoard/adminHome/AdminHome";
import NoFound from "../pages/shared/NoFound/NoFound";
import UserReview from "../pages/DashBoard/review/UserReview";
import Reservations from "../pages/DashBoard/reservation/Reservations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<NoFound></NoFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "orderFood/:category",
        element: <OrderFood />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },

      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path:'/dashboard/review',
        element:<UserReview></UserReview>
      },
      {
        path:'/dashboard/reservation',
        element:<Reservations></Reservations>
      },

      //all admin route
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },

      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>

      }
    ],
  },
]);
