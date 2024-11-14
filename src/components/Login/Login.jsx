import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const {signInUser,signInWithGoogle} = useContext(AuthContex);
  
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(signInUser)
    signInUser(email,password)
    .then(result => {
      console.log(result)
      e.target.reset()
      navigate('/')
    })
    .then(error => {
      console.log("ERROR", error)
    })

  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user)
      navigate('/')
    })
    .catch(error=> console.log('ERROR',error.message))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-96">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="px-5 py-3">
            New to this website? please{" "}
            <Link to="/register">
              <span className="text-cyan-700 font-medium">Register</span>
            </Link>
            <p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
