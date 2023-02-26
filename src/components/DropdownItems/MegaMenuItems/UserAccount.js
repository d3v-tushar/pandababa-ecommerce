import React from "react";

const UserAccount = () => {
  return (
    <div className="absolute top-0 z-20 group-hover/user:visible invisible group-hover/user:opacity-100 opacity-0 transition group-hover/user:transition group-hover/user:ease-in-out ease-in-out group-hover/user:translate-y-3 w-36 duration-300 pt-5">
      <div className="bg-gray-100 shadow-md">
        <ul className="text-md text-gray-700">
          <li className="px-3 py-1 border-b-2 hover:bg-black hover:text-white">
            <button>
              <span>Profile</span>
            </button>
          </li>
          <li className="px-3 py-1 border-b-2 hover:bg-black hover:text-white relative group/ordermenu">
            <button className="flex justify-evenly mx-auto gap-1 items-center">
              <span>Orders</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                lassName="h-5 w-5 mt-1 group-hover/megamenu:rotate-180 transition duration-300 ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="absolute hidden group-hover/ordermenu:block top-0 -right-[100%] w-36">
              <div className="bg-gray-100 rounded-md shadow-md">
                <ul className="text-gray-700">
                  <li className="px-3 py-1 hover:bg-black hover:text-white">
                    <button>
                      <span>Completed</span>
                    </button>
                  </li>
                  <li className="px-3 py-1 border-t-2 hover:bg-black hover:text-white">
                    <button>
                      <span>Pending</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="px-3 py-1 border-b-2 hover:bg-black hover:text-white">
            <button>
              <span>Address</span>
            </button>
          </li>
          <li className="px-3 py-1 hover:bg-black hover:text-white">
            <button>
              <span>Wishlist</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;
