import { navLinks } from "@/app/constants/constants";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props ={
  showNav: boolean;
  closeNav: () => void

}
const MobileNav = ({closeNav, showNav}:Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div className={`fixed inset-0 ${navOpen} transform transition-all duration-500 bg-black opacity-70 w-full z-[1002] h-screen`}></div>
      <div className={` text-white ${navOpen} justify-center items-center fixed flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] space-y-6 z-[1050] bg-gradient-to-br from-purple-600 to-blue-500`}>
        {navLinks.map((link) => {
          return (
            <Link href={link.url} key={link.id}>
              <p className="text-white w-fit text-[20px] ml-12 sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        <CgClose  onClick={closeNav} className="h-6 w-6 sm:h-8 sm:w-8 absolute top-[0.7rem] right-[1.4rem]" />
      </div>
    </div>
  );
};

export default MobileNav;
