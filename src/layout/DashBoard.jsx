import {
  FaBookmark,
  FaCalendarAlt,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/UseCart";
import useAdmin from "../hooks/UseAdmin";

const DashBoard = () => {
  const [cart]=useCart()

  // TODO LOAD DATA TO THE SERVER TO HAVE DYNAMIC ISADMIN BASED ON DATA
// const idAdmin = true
const [idAdmin]= useAdmin()

  return (
    <div className="drawer drawer-mobile ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        
        <ul className="menu p-4 w-80  text-base-content bg-[#D1A054]">
       <div className="px-3 font-bold mb-5">
       <h1 className="text-3xl">BISTRO<span className="text-orange-600">BOSS</span> </h1>
        <h3>R E S T A U R A N T </h3>
       </div>
       {
        idAdmin ? <>
        <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItem">
            <FaUtensils></FaUtensils> Add An Items
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/manageItems">
              <FaUtensils></FaUtensils>Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBookmark></FaBookmark> Manage Bookings
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/allUsers"><FaUsers></FaUsers>All Users</NavLink>
          </li>

        </> : <>
        <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaCalendarAlt /> Reservations
            </NavLink>
          </li>

          <li>
            <NavLink to="/">
              <FaWallet></FaWallet> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaShoppingCart /> My Cart  <span className="badge badge-secondary">+{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">⭐ Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaBookmark></FaBookmark> My Booking
            </NavLink>
          </li>
        </>
       }
          
          <div className="divider"></div>
          <li>
            <NavLink to="/">

              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/orderFood/salad">Order Food</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
