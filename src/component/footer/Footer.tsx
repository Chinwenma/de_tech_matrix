import Link from "next/link";
import { navLinks } from "@/constants/constants";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const socials = [
  { icon: FaFacebookF, url: "https://facebook.com/okorie.chinwenma/" },
  { icon: FaX, url: "https://x.com/Ethel_Omma" },
  { icon: FaGithub, url: "https://github.com/Chinwenma" },
];

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
              <Link
                href={link.url}
                className="hover:text-purple-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 mb-6">
          {socials.map((social, idx) => {
            const Icon = social.icon;

            return (
              <Link
                key={idx}
                href={social.url}
                target="_blank"
                className="w-10 h-10 bg-white text-gray-800 rounded-full
                           flex items-center justify-center
                           hover:bg-gradient-to-br from-purple-600 to-blue-500
                           transition-all duration-200 hover:text-white"
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} All rights reserved |
          portfolio developed <span className="text-purple-500">♥</span> by{" "}
          <Link
            href="https://github.com/Chinwenma"
            target="_blank"
            className="text-purple-400 underline"
          >
            DeTechMatrix
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
