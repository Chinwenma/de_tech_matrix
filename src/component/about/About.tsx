"use client";
import React from "react";
import Image from "next/image";

const techStack = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const AboutSection = () => {
  return (
    <section className="" id="about" data-aos="fade-up">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-4">
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/assets/matrix2.png"
            alt="Profile"
            width={2000}
            height={2000}
            className="rounded-full object-cover object-top w-80 h-80 border-4 border-purple-500"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-justify leading-relaxed tracking-wider" data-aos="fade-left">
          <h4 className="text-sm mb-2 uppercase text-[#8490ff]">About Me</h4>
          <h2 className="text-4xl font-bold mb-4 text-justify">Okorie Chinwe U.</h2>
          <p className="leading-relaxed mb-6 md:pr-16 tracking-wider text-justify">
            Hi, I&apos;m a passionate <strong>Web Developer</strong> with a strong
            interest in creating responsive, user-friendly websites and web
            applications using modern technologies. I enjoy turning complex
            problems into simple, elegant, and intuitive digital experiences.
            I&apos;m constantly learning and evolving to stay current with the latest
            trends in web development. Whether it&apos;s building personal projects,
            contributing to open-source, or collaborating on real-world
            applications, I love bringing ideas to life on the web.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center" data-aos="zoom-in">
        <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="w-16 h-16 relative" title={tech.name}>
              <Image src={tech.src} alt={tech.name} layout="fill" objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
