import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "./Loading";
import { signOut } from "firebase/auth";
import CustomLink from "./CustomLink/CustomLink";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    signOut(auth);
  };
  const navbarItems = (
    <>
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/contactUs">Contact Us</CustomLink>
      </li>
      <li>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </li>
      <li>
        <CustomLink to="/myPortfolio">My Portfolio</CustomLink>
      </li>
      {user && (
        <li>
          <CustomLink to="/dashboard/myProfile">Dashboard</CustomLink>
        </li>
      )}
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            className="btn rounded-sm border-0 bg-[#EE5A24] text-gray-200 mt-2 lg:mt-0"
          >
          <span className="pr-1 ">({user.displayName})</span>
            Sign Out
          </button>
        </>
      ) : (
        <li>
          <CustomLink to="/login">Log in</CustomLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#1B1464] py-3 text-white sticky top-0 z-50 px-4 lg:px-12">
      <label
        htmlFor="dashboard-sidebar"
        className="btn  mr-2 lg:hidden"
      >
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
      <div className="navbar-start">
        <Link to="/" className="">
         <span className="font-bold text-3xl uppercase text-[#fff]">AUTO PARTS STORES</span>
        </Link>
      </div>
      <div className="navbar-env ml-auto">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal  gap-2">{navbarItems}</ul>
        </div>
        <div className="dropdown dropdown-left">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navbarItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
