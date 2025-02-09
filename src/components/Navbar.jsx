import * as React from "react";

import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="flex items-center gap-14 justify-between p-8 px-24 ">
          <div className="flex items-center gap-40">
            <a
              href="/"
              className="flex items-center gap-5 text-[21px] font-medium text-[#6C5FBC] font-[poppins]"
            >
              <img src={Logo} alt="" />
              eatly
            </a>
            <ul className="flex align-middle-center gap-16">
              <Link className="text-[17px] text-[#606060] transition-all duration-200 hover:text-blue-500 hover:font-bold" to="/menu">
                Menu
              </Link>
              <Link className="text-[17px] text-[#606060] transition-all duration-200 hover:text-blue-500 hover:font-bold" to="/blog">
                Blog
              </Link>
              <Link className="text-[17px] text-[#606060] transition-all duration-200 hover:text-blue-500 hover:font-bold" to="/pricing">
                Pricing
              </Link>
              <Link className="text-[17px] text-[#606060] transition-all duration-200 hover:text-blue-500 hover:font-bold" to="/contact">
                Contact
              </Link>
            </ul>
          </div>

          <div className="flex items-center gap-15">
            <a className="text-[17px] text-[#606060] font-bold" href="#">
              Login
            </a>
            <button className="bg-[#6C5FBC] h-15 w-37 rounded-2xl text-cyan-50 text-lg font-medium">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#CBCBCB] w-[182vh] h-[1.5px] "></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
