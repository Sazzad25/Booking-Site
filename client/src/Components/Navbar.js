import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import PrimaryButton from "../Components/Button/PrimaryButton";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="text-gray-900 body-font shadow-sm bg-amber-200">
      <div className=" mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center">
        <p
          className="ps-2 text-green-500 transition duration-200 hover:text-red-500 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
          href="#"
        >
          <span className="[&>svg]:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              id="car"
            >
              <path d="m93.6 49.1-17.2-5.8-8.5-15.6c-2.3-4.2-6.7-6.8-11.4-6.8h-31c-4.8 0-9.1 2.6-11.4 6.8L5.2 44v.1c-.1.1-.1.2-.1.3v24.5c0 1.1.9 2 2 2h8.2c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8h30.4c.9 4.6 5 8 9.8 8s8.9-3.4 9.8-8H93c1.1 0 2-.9 2-2V51c0-.9-.5-1.6-1.4-1.9zM38 25h18.5c3.3 0 6.3 1.8 7.9 4.7L71.6 43H38V25zm-20.4 4.7c1.6-2.9 4.6-4.7 7.9-4.7H34v18H10.4l7.2-13.3zM15.2 67H9v-4h8c-.9 1.2-1.5 2.5-1.8 4zm9.8 8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm50 0c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm16-8h-6.2c-.9-4.6-5-8-9.8-8s-8.9 3.4-9.8 8H34.8c-.9-4.6-5-8-9.8-8H9V47h65.7L91 52.4V67z"></path>
            </svg>
          </span>
        </p>
        <Link
          to="/"
          className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-bold ">
            Welcome To Cars & Pricing Field
          </span>
        </Link>
        <Link
          to="/message"
          className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r text-fuchsia-500 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-bold ">Message</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {user?.email ? (
            <>
              <div className="relative inline-block ">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40  focus:ring-blue-300  focus:ring  focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl ">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span className="mx-1">Dashboard</span>
                    </Link>

                    <hr className="border-gray-200" />
                    <div
                      onClick={() => {
                        setIsDropdownOpen(false);
                        logout();
                      }}
                      className="flex items-center cursor-pointer p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform  hover:bg-gray-100 "
                    >
                      <svg
                        className="w-5 h-5 mx-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <span className="mx-1">Sign Out</span>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-5 hover:text-green-600">
                Login
              </Link>
              <Link to="/signup" className="mr-5">
                <PrimaryButton classes="rounded-full px-2 py-1">
                  Signup
                </PrimaryButton>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
