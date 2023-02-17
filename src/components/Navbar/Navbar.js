import React, { useContext } from "react";
import logo from "../../assets/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
// import { BiCategory } from "react-icons/bi";
import { cartData } from "../../layouts/Main/Main";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";

const Navbar = () => {
  const {open, setOpen} = useContext(cartData);
  return (
    <div className="sticky top-0 z-10 bg-white pt-5 pb-3 shadow-sm">
      <nav className="w-full lg:w-10/12 grid grid-cols-5 justify-between mx-auto align-middle items-center">
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
        <div className="col-span-1 flex justify-end">
          <button className="text-2xl p-2 m-1 bg-gray-100 rounded-full">
            <CgProfile />
          </button>
          <button onClick={() => setOpen(!open)} className="text-2xl p-2 m-1 bg-gray-100 rounded-full">
            <HiOutlineShoppingBag />
          </button>
        </div>
      </nav>

      {/* {Navbar 2nd Row} */}
      <div className="flex mt-6 justify-between w-full lg:w-10/12 mx-auto">
        {/* <div className="bg-gray-100 rounded-md">
            <div className="flex text-lg justify-between items-baseline">
              <p className="flex items-center">
              <span className="mx-1"><BiCategory/></span>
              <span className="mx-1">Categories</span>
              </p>
              <span className="ml-8 mr-1 mt-2"><IoIosArrowDown/></span>
            </div>
        </div> */}
       <div> <CategoryDropDown/></div>
        <div className="flex justify-evenly">
            <button className="mx-4">
              <p className="flex justify-center items-center">
                  <span>Home</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
            <button className="mx-4">
            <p className="flex justify-center items-center">
                  <span>Mega Menu</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
            <button className="mx-4">
            <p className="flex justify-center items-center">
                  <span>Full Screen View</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
            <button className="mx-4">
            <p className="flex justify-center items-center">
                  <span>Pages</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
            <button className="mx-4">
            <p className="flex justify-center items-center">
                  <span>User Account</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
            <button className="ml-4">
            <p className="flex justify-center items-center">
                  <span>Vendor Account</span>
                  <span className="mt-3 mb-2 ml-2 text-sm">
                    <IoIosArrowDown />
                  </span>
              </p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
