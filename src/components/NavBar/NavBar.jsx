import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../../Provider/AuthProvider";

const NavBar = () => {
    const {user,signOutUser} = useContext(AuthContex)
    const handleSignOut = () => {
      signOutUser()
      .then(()=>{
        console.log('sign out sucessfully')
      })
      .catch(error => console.log('Error', error.message))
    }
    const links =
    <div className="flex gap-10">
    <NavLink to='/'><li>Home</li></NavLink>
    <NavLink to='/login'><li>Login</li></NavLink>
    <NavLink to='/register'><li>Register</li></NavLink>
    {
      user && <>
       <NavLink to='/orders'><li>Orders</li></NavLink>
       <NavLink to='/profile'><li>Profile</li></NavLink>
      </>
    }
    </div>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        
         {links}
        </ul>
      </div>
      <div className="navbar-end">
       {
        user ? 
        <>
        <span>{user.email}</span>
        <a onClick={handleSignOut} className="btn ms-3">Sign Out</a>
        </>
        :
        <Link className="btn ms-3" to='/login'>Log In</Link>
       }
      </div>
    </div>
  );
};

export default NavBar;
