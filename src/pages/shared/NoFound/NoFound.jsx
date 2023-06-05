import { Link } from "react-router-dom";
import NoFoundImg from "../../../assets/404.gif";
import { FaHome } from "react-icons/fa";

const NoFound = () => {
  return (
    <div className="p-8 relative">
    <div className="justify-center flex">
      <img src={NoFoundImg} alt="" />
    </div>
    <div className="justify-center flex absolute bottom-12 left-0 right-0">
      <Link
        style={{
          background: "linear-gradient(0deg, #835D23 0%, #B58130 100%)",
        }}
        className="btn btn-active btn-secondary"
      >
        Back To Home <FaHome className="w-10 h-5"></FaHome>
      </Link>
    </div>
  </div>
  
  );
};

export default NoFound;
