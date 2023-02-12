import React from "react";
import logo from "../../assets/logo.svg";
import { BiSearchAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-white pt-5 pb-3 shadow-sm">
      <nav className="w-full lg:w-4/5 grid grid-cols-5 justify-between mx-auto align-middle items-center">
        <div className="col-span-1">
          <img src={logo} alt="" />
        </div>
        <div className="relative col-span-3">
          <label class="flex overflow-hidden">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <span class="text-2xl fill-slate-300 text-gray-500 px-2">
                <BiSearchAlt />
              </span>
            </span>
            <input
              class="placeholder:text-slate-400 block bg-white w-full border border-gray-400 rounded-full py-3 pl-12 pr-3 shadow-sm sm:text-sm"
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

      {/* {Navbar 2nd Row} */}
      <div className="flex mt-6 justify-between w-full lg:w-4/5 mx-auto">
        <div className="mx-2 bg-gray-100">
            {/* <div><button className="pr-12"><div className="flex items-baseline"><p className="flex"><span className="text-2xl"><BiCategory/></span> Categories</p><p><IoIosArrowDown/></p></div></button></div> */}
            <div className="w-full"><div className="flex items-baseline"><p className="flex"><span className="text-2xl"><BiCategory/></span> Categories</p><p><IoIosArrowDown/></p></div></div>
        </div>
        <div className="col-span-4 flex justify-evenly">
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
            <button className="mx-4">
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
