import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="container mx-auto px-6 md:px-16 pb-10 pt-36 "
    >
      <div
        className="max-w-2xl mx-auto rounded-2xl border border-gray-200/60  backdrop-blur -md p-10 md:p-12 text-center shadow-sm mb-10"
        data-aos="fade-up"
      >
        <p className="text-xs uppercase tracking-widest text-[#8490ff] mb-3">
          Hello
        </p>

        <h1 className="text-2xl md:text-5xl font-semibold tracking-tight mb-4">
          I&apos;m a Web Developer
        </h1>

        <p className="leading-relaxed tracking-tight md:tracking-wider mb-8 text-justify">
          Full-Stack Developer with hands-on experience building scalable web and mobile applications using React, Next.js, Node.js, and MongoDB. Passionate about creating efficient and user-friendly solutions to real-world problems.
        </p>

        <Link
          href="/CV.pdf"
          // target="_blank"
          download
          className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#8490ff] text-white font-medium hover:bg-gradient-to-br from-purple-600 to-blue-500 transition-all duration-300"
        >
          Download CV
        </Link>
      </div>
    </section>
  );
};

export { Hero };
