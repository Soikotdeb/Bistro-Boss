import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "./../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../shared/socialLogin/SocialLogin";
import login from '../../assets/others/authentication.gif'

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User LgIn successful..",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
       <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={login} alt="" />
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body py-7  w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  placeholder="type the captcha above"
                  name="captcha"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                // TODO CAPTCHA
                
                  disabled={disable}
                  className="btn btn-primary animate-pulse"
                  type="submit"
                  value="Login"
                />
              </div>
              <div>
                <p>
                  New User?{" "}
                  <Link className="text-orange-600 font-bold" to="/signUp">
                    {" "}
                    Create an Account
                  </Link>{" "}
                </p>
              </div>
            </form>
              <div className="p-5"><SocialLogin></SocialLogin></div>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Login;
