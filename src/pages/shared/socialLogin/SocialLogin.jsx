import { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const saveUser = {
        name: loggedInUser.displayName,
        email: loggedInUser.email,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };

  return (
    <div>
      <div className="divider"></div>
      <div className="flex justify-between">
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline text-red-600"
        >
          <FaGoogle></FaGoogle>
        </button>

        <button className="btn btn-circle btn-outline">
          <FaFacebook></FaFacebook>
        </button>

        <button className="btn btn-circle btn-outline text-red-600">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
