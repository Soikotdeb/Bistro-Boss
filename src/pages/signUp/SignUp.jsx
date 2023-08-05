import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/socialLogin/SocialLogin";
import signUp from "../../assets/others/authentication2.png";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");

          const saveUser = { name: data.name, email: data.email };

          fetch("https://bistro-boss-server-orcin.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={signUp} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body  w-full bg-gray-200 p-4 rounded-lg"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="input input-bordered"
          />
          {errors.photoURL && (
            <span className="text-red-600">Photo URL is required</span>
          )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-600">Email is required</span>
          )}
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
              pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
            })}
            placeholder="Password"
            className="input input-bordered"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-red-600">
              Password must be less than 20 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have one uppercase, one lowercase, one number, and
              one special character.
            </p>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control ">
          <input
            className="btn btn-primary animate-pulse"
            type="submit"
            value="Sign Up"
          />
        </div>
        <p>
          <small>Already have an account? </small>
          <Link to="/login" className="text-orange-600 font-bold">
            Login Please
          </Link>
        </p>
      </form>

      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>

    </>
  );
};

export default SignUp;
