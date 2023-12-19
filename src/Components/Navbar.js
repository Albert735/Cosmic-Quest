import React from "react";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <nav class="bg-[#1d1f45] text-white border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h1 className="font-semibold text-2xl  ">COSMIC QUEST</h1>
        <IoMenu size={30} className="md:hidden"/>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col md:flex-row mt-4 ">
                <li className="block py-2 px-3">About</li>
                <li className="block py-2 px-3">Forum</li>
                <li className="block py-2 px-3">Connect</li>
                <li className="block py-2 px-3">Gallactic Gallary</li>
            </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
