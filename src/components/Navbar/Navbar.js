import React from "react";
import logo from "../../assets/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-white py-5">
      <nav className="w-full lg:w-4/5 grid grid-cols-5 justify-between mx-auto align-middle items-center">
        <div className="col-span-1">
          <img src={logo} alt="" />
        </div>
        <div className="relative col-span-3">
          <label class="flex overflow-hidden">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <span class="text-2xl fill-slate-300 text-gray-500">
                <BiSearchAlt />
              </span>
            </span>
            <input
              class="placeholder:text-slate-400 block bg-white w-full border border-gray-400 rounded-full py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <button className="absolute bg-gray-100 inset-y-0 right-0 border border-gray-400 flex items-center rounded-r-full px-6">
              All Categories <IoIosArrowDown />
            </button>
          </label>
        </div>
        <div className="col-span-1 flex justify-end">
          <button className="text-2xl p-2 m-1 bg-gray-100 rounded-full">
            <CgProfile />
          </button>
          <button className="text-2xl p-2 m-1 bg-gray-100 rounded-full">
            <HiOutlineShoppingBag />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
