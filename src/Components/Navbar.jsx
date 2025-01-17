import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUser,
  faMicrophone,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="py-5">
      <div className="flex justify-between">
        <div className="px-24 font-semibold text-2xl flex">
          <p className="text-orange-500">LOGO</p>
          <p className="text-black">LOGO</p>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          />

          <input
            className="w-full pl-10 pr-56 py-1 rounded-full border border-black"
            type="text"
            placeholder='Search "Gulmarg"'
          />
          <FontAwesomeIcon
            icon={faMicrophone}
            className="absolute right-2 top-1/2 px-2 -translate-y-1/2 text-white cursor-pointer bg-black p-1 rounded-full"
          />
        </div>
        <div className="flex items-center space-x-10 mr-60">
          <div className="bg-orange-500 px-2 py-1 rounded-full text-white flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              className="mr-2 bg-black rounded-full p-1"
            />
            <span className="flex items-center">+91 987655432 ˅</span>
          </div>
          <div className="bg-orange-500 px-2 py-1 rounded-full text-white mx-16 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 bg-black rounded-full p-1"
            />
            <span className="flex items-center">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
