import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-zinc-200 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap gap-1">
            <span className="text-slate-900">Zillow</span>
            <span className="text-slate-900">Group</span>
          </h1>
        </Link>
        <form className="bg-slate-300 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 placeholder:text-black"
          />
          <button>
            <FaSearch className="text-slate-900" />
          </button>
        </form>
        <ul className="flex gap-3">
          <Link to="/">
            <div className="hidden sm:inline text-white px-3 py-1.5 bg-black rounded-md">
              Home
            </div>
          </Link>

          <Link to="/about">
            <div className="hidden sm:inline text-white px-3 py-1.5 bg-black rounded-md">
              About
            </div>
          </Link>

          <Link to="sign-in">
            <div className="hidden sm:inline text-white px-3 py-1.5 bg-black rounded-md">
              Sign in
            </div>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
