"use client";
import Logo from "../logo/Logo";
import { useState, useEffect} from "react";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { FiDownloadCloud } from "react-icons/fi";
import ThemeToggle from "../toggle/ThemeToggle";
import { HiBars3BottomRight, } from "react-icons/hi2";

const Navbar = () => {
  const [NavBg, setNavbg] = useState(false);
  useEffect(() => {
 const handler = () => {
      if (window.scrollY >= 90) setNavbg(true);
        if (window.scrollY < 90) setNavbg(false);
         
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);

  }, []);
  
  return (
    <div 
    className= {`transition-all ${ NavBg ? 'bg-white dark:bg-black shadow-md': 'fixed'} duration-200 h-[12vh] z-[100] w-full fixed`}>
      <div className="flex items-center justify-between w-[90%] h-full mx-auto">
        {/* LOGO */}
        <Logo />
        <div className="hidden space-x-10 lg:flex items-center justify-center">
          {navLinks.map((link) => {
            return (
              <Link
                href={link.url}
                key={link.id}
                className="cursor-pointer text-gray-900 dark:text-white font-semibold hover:text-[#8490ff] transition-all duration-200 dark:hover:text-[#8490ff]"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/cv.pdf"
            className="px-5 py-2.5 relative rounded group  text-white font-medium inline-block"
          >
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative z-20 text-sm flex items-center">
              <FiDownloadCloud className="mr-3 w-5 h-5"/> Download CV</span>
          </a>
          <ThemeToggle />
          <HiBars3BottomRight className=" w-8 h-8 cursor-pointer text-[#8490ff] lg:hidden"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
