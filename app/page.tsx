"use client";

import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Projects from "./component/projects/Projects";
import Skills from "./component/skills/Skills";

import { useEffect } from "react";
import ResponsiveNav from "./component/navbar/ResponsiveNav";
import { Hero } from "./component/hero/Hero";
import AOS from "aos";


export default function Home() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Only trigger animation once
    });
  }, []); // Empty dependency array ensures it runs only once
  return (
    <div className="overflow-hidden">
      <header>
        <ResponsiveNav />
      </header>
      <main>
        <Hero /> <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
