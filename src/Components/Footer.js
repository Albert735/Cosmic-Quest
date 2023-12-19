import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-white bg-[#1d1f45]  ">
        <div className="flex flex-col md:flex-row md:gap-[8rem] gap-6 xl:p-[3rem] justify-center">
          <h1 className="font-semibold text-[2rem]">Cosmic Quest </h1>

          <div className="font-">
            <h1 className="text-2xl">Resource</h1>
            <ul>
              <li>Forum</li>
              <li>Forum</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Connect</h1>
            <ul>
              <li>Forum</li>
              <li>Forum</li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl">Legal</h1>
            <ul>
              <li>Forum</li>
              <li>Forum</li>
            </ul>
          </div>
        </div>

        <hr class="my-6 border-gray-600 md:w-[40%] sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <div className="flex justify-center items-center">
          <ul className="flex gap-11 m-8">
            <li>
              <BsTwitterX size={26} />
            </li>
            <li>
              <FaFacebookF size={26} />
            </li>
            <li>
              <FaInstagram size={26} />
            </li>
            <li>
              <FaTwitch size={26} />
            </li>
            <li>
              <FaYoutube size={26} />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
