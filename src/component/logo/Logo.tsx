import React from "react";
import { BiBook } from "react-icons/bi";
const Logo = () => {
  return (
    <div className="flex items-center space-x-2  cursor-pointer">
      <div className="w-10 h-10 rounded-full flex  bg-gradient-to-r from-purple-600 to-pink-500 items-center justify-center flex-col">
      <BiBook className="w-6 h-6 text-blue-100"/>
      </div>
      <h1 className="text-xl italic sm:block md:text-2xl font-semibold "> DE_Tech<span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">_Matrix</span></h1>

    </div>
  );
};

export default Logo;
