import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="container mx-auto px-6 md:px-16 pb-10 pt-36 "
    >
      <div
        className="max-w-2xl mx-auto rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-md p-10 md:p-12 text-center shadow-sm"
        data-aos="fade-up"
      >
        <p className="text-xs uppercase tracking-widest text-[#8490ff] mb-3">
          Hello
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
          I&apos;m a Web Developer
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          I specialize in creating responsive and dynamic web applications using
          modern technologies.
        </p>

        <Link
          href="/CV.pdf"
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
