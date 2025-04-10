import Link from "next/link";
import { navLinks } from "@/constants/constants"; // Your navLinks array
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="dark:bg-transparent bg-[#0f1217] text-white py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text text-3xl font-extrabold">
              De
            </span>
            <span className="text-white text-2xl font-bold">TechMatrix</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-semibold uppercase mb-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className="hover:text-purple-400 transition">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {[FaFacebookF, FaTwitter, FaGithub ].map((Icon, idx) => (
            <Link
              key={idx}
              href="#"
              className="w-10 h-10 bg-white text-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-200 hover:text-white"
            >
              <Icon size={18} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          Copyright &copy;2025 All rights reserved | portfolio developed{" "}
          <span className="text-purple-500">♥</span> by{" "}
          <Link href="https://github.com/Chinwenma" target="_blank" className="text-purple-400 underline">
            DeTechMatrix
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
