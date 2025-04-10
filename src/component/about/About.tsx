// components/AboutSection.tsx
"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-16" id="about">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/assets/matrix1.png"
            alt="Profile"
            className="rounded-full w-[50%] max-w-md mx-auto h-[60%]"
            priority
            width={200}
            height={200}
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h4 className="text-sm  mb-2 uppercase">About Me</h4>
          <h2 className="text-4xl font-bold mb-4">Chinwenma Okorie</h2>
          <p className=" leading-relaxed mb-6">
            {"Hi, I'm a passionate "}Frontend Developer with a strong interest in
            building responsive, user-friendly websites and web applications. I
            enjoy turning complex problems into simple, beautiful, and intuitive
            designs. My tools of choice include HTML, CSS, JavaScript, and
            modern libraries and frameworks like React.{"I'm constantly learning"} 
            and improving my skills to stay up-to-date with the latest web
            technologies.{" Whether it's creating personal projects, contributing"}
            to open-source, or collaborating on real-world applications, I love
            bringing ideas to life in the browser.
          </p>
          {/* <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow hover:opacity-90 transition-all">
            View Full Details
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
