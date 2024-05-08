import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetToggleHandler, toggleHandler } from "../store/product-slice";

const Navigation = () => {
  const navigationRef = useRef(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);

  const toggleMenu = () => {
    dispatch(toggleHandler());
  };
  console.log(data);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navigationRef.current &&
        !navigationRef.current.contains(event.target)
      ) {
        dispatch(resetToggleHandler(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  return (
    <nav
      ref={navigationRef}
      className="bg-black border-gray-200 dark:bg-gray-900"
    >
      <div className="max-w-screen-xl flex items-center justify-between p-4 text-white">
        <button
          className="md:hidden menu-toggle left-0"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {data.toggleNavBar ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <Link to="/">
          <div className="logo text-2xl font-bold mr-4">Product Store </div>
        </Link>
        <div className="hidden md:flex flex-grow justify-between items-center ml-10">
          <Link to="/" className="px-4 hover:text-sky-400">
            Home
          </Link>
          <Link to="/Products" className="px-4 hover:text-sky-400 ">
            Products
          </Link>
          <Link to="/About" className="px-4 hover:text-sky-400 ">
            About
          </Link>
          <Link to="/Contact" className="px-4 hover:text-sky-400 ">
            Contact
          </Link>
          <Link to="/Services" className="px-4 hover:text-sky-400 ">
            Services
          </Link>
        </div>
      </div>
      {data.toggleNavBar && (
        <div
          className="md:hidden menu-items bg-black text-white py-4"
          onClick={toggleMenu}
        >
          <Link to="/" className="block px-4 py-2">
            Home
          </Link>
          <Link to="/Products" className="block px-4 py-2 ">
            Products
          </Link>
          <Link to="/About" className="block px-4 py-2">
            About
          </Link>
          <Link to="/Contact" className="block px-4 py-2">
            Contact
          </Link>
          <Link to="/Services" className="block px-4 py-2">
            Services
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
