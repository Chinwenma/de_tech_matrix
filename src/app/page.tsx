import About from "@/component/about/About";
// import Contact from "@/component/contact/Contact";
// import Footer from "@/component/footer/Footer";
import { Hero } from "@/component/hero/Hero";
import ResponsiveNav from "@/component/navbar/ResponsiveNav";
import Projects from "@/component/projects/Projects";
import Skills from "@/component/skills/Skills";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header>
        <ResponsiveNav />
      </header>
      <main>
        <Hero />{" "}
        <About />
        <Skills />
        <Projects />
        {/* 
       
        
        <Contact /> */}
      </main>
      <footer>{/* <Footer /> */}</footer>
    </div>
  );
}
