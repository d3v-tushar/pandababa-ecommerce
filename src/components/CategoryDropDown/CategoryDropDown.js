import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiChevronDown } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";

const CategoryDropDown = () => {
  const [collapse, setCollapse] = useState(false);
    return (
    
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
          <div onClick={() => setCollapse(!collapse)} className="bg-gray-100 pb-1 rounded-md">
            <div className="flex text-lg justify-between items-baseline align-middle">
              <p className="flex items-center">
              <span className="mx-1"><BiCategory/></span>
              <span className="mx-1">Categories</span>
              </p>
              <span className="ml-8 mr-1 mt-2">{ collapse ? <FiChevronDown/> : <FiChevronRight/>}</span>
            </div>
        </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
              {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                  >Option 1</button>
              )}
              </Menu.Item>
              </div>

              <div className="px-1 py-1 ">
              <Menu.Item>
              {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                  >Option 2</button>
              )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                  >Option 3</button>
              )}
              </Menu.Item>
              </div>

              <div className="px-1 py-1 ">
              <Menu.Item>
              {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                  >Option 4</button>
              )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
              {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'bg-gray-100 text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-md`}
                  >Option 5</button>
              )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
};

export default CategoryDropDown;