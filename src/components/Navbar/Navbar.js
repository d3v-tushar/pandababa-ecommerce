import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { cartData } from "../../layouts/Main/Main";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import MegaMenuItems from "../DropdownItems/MegaMenuItems/MegaMenuItems";
import UserAccount from "../DropdownItems/MegaMenuItems/UserAccount";

const Navbar = () => {
  const { open, setOpen } = useContext(cartData);
  return (
    <div className="z-10 sticky top-0 bg-white pt-5 pb-3 shadow-sm">
      <nav className="w-full lg:w-11/12 grid grid-cols-5 justify-between mx-auto align-middle items-center">
        <div className="col-span-1">
          <img src={logo} alt="" />
        </div>
        <div className="relative col-span-3">
          <label className="flex overflow-hidden">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <span className="text-2xl fill-slate-300 text-gray-500 px-2">
                <BiSearchAlt />
              </span>
            </span>
            <input
              className="placeholder:text-slate-400 block focus:outline-none bg-white w-full border border-gray-400 rounded-full py-3 pl-12 pr-3 shadow-sm text-2xl font-semibold sm:text-sm"
              placeholder="Search for anything..."
              type="text"
              name="search"
            />
            <button className="absolute bg-gray-100 inset-y-0 right-0 border border-gray-400 flex items-center rounded-r-full px-6">
              All Categories <IoIosArrowDown />
            </button>
          </label>
        </div>
        <div className="col-span-1 flex justify-end text-gray-500">
          <button className="text-2xl p-2 mx-1.5 bg-gray-100 rounded-full">
            <CgProfile />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl p-2 mx-1.5 bg-gray-100 rounded-full"
          >
            <HiOutlineShoppingBag />
          </button>
        </div>
      </nav>

      {/* {Navbar 2nd Row} */}
      <div className="flex mt-6 justify-between w-full lg:w-11/12 mx-auto">
        <div>
          <CategoryDropDown />
        </div>

        <div>
          <ul className="flex gap-4 justify-evenly text-gray-800">
            <li>
              <button className="flex gap-1 items-center px-2 hover:text-red-700">
                <span>Home</span>
              </button>
            </li>

            <li className="relative group/megamenu">
              <button className="flex gap-1 items-center px-2 group-hover/megamenu:text-red-700">
                <span>Mega Menu</span>
                <svg
                  className="h-5 w-5 mt-1 group-hover/megamenu:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <MegaMenuItems />
            </li>

            <li className="group/electronics">
              <button className="flex gap-1 items-center px-2 hover:text-red-700">
                <span>Electronics</span>
                <svg
                  className="h-5 w-5 mt-1 group-hover/electronics:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>

            <li className="group/grocery">
              <button className="flex gap-1 items-center px-2 hover:text-red-700">
                <span>Grocery</span>
                <svg
                  className="h-5 w-5 mt-1 group-hover/grocery:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </li>

            <li className="relative group/user">
              <button className="flex gap-1 items-center px-2 group-hover/user:text-red-700">
                <span>User Account</span>
                <svg
                  className="h-5 w-5 mt-1 group-hover/user:rotate-180 transition duration-300 ease-in-out"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <UserAccount />
            </li>

            <li>
              <button className="flex gap-1 items-center px-2 hover:text-red-700">
                <span>Dashboard</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
