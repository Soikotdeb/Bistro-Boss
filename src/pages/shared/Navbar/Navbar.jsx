
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navoptions = (
    <>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link>CONTACT US</Link>
      </li>
      <li>
        <Link>DASHBOARD</Link>
      </li>
      <li>
        <Link to="/menu">OUR MENU</Link>
      </li>
      <li>
        <Link>OUR SHOP</Link>
      </li>
      <li>
        <a><FaShoppingCart size={32} color="white" /> </a>
        
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-40 max-w-screen-xl font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>
          <div>
            <a className="btn btn-ghost normal-case ">
              BISTRO <span className="text-orange-600">BOSS</span>
            </a>
         
          <p className="pl-3">R E S T A U R A N T </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">SignIn</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;