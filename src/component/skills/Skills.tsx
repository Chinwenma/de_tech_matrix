"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/constants/constants";

// import { Code2, AppWindow, Atom, ShieldCheck } from "lucide-react";
// const services = [
//   {
//     title: "Digital Services",
//     description:
//       "Our digital services cover everything from eye-catching web design and secure web hosting to custom web software development. We build fast, functional, and scalable solutions tailored to your business needs",
//     icon: <Code2 size={24} />,
//   },
//   {
//     title: "Installation Services",
//     description:
//       "We offer expert installation services including computer networking, CCTV systems, and solar solutions—delivering reliable and efficient tech infrastructure for your home or business.",
//     icon: <AppWindow size={24} />,
//   },
//   {
//     title: "Internet Services",
//     description:
//       "We provide reliable and high-speed internet solutions for homes, schools, and businesses—ensuring seamless connectivity and round-the-clock support.",
//     icon: <Atom size={24} />,
//   },
//   {
//     title: "ICT Education Services",
//     description:
//       "We provide ICT training from basic to advanced levels, covering computer fundamentals, graphic design, web development, digital marketing, cybersecurity, and more—empowering learners with in-demand tech skills.",
//     icon: <ShieldCheck size={24} />,
//   },
// ];

const ServicesSection: FC = () => {
  return (
    <section className="w-full px-4 py-16 text-center" id="skills">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="max-w-2xl mx-auto mb-12">
        I offer a range of creative and technical services tailored to help individuals and businesses build a strong digital presence
         </p>
      </motion.div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl border border-gray-200 bg-gradient-to-tr from-white via-purple-100 to-blue-200 p-6 hover:shadow-xl transition hover:cursor-pointer "
          >
            <div className="flex items-center justify-center mb-4 ">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-700 text-white ">
                {/* {skill.icon}{" "} */}
              </div>
            </div>
            <h3 className="text-lg font-semibold my-2 text-center text-black">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-700 leading-normal tracking-tight text-justify">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center sm:flex-row sm:items-center gap-4 mt-8"></div>
    </section>
  );
};

export default ServicesSection;

// "use client";
// import React from "react";
// import { skillsData } from "../../constants/constants";
// const Skills = () => {
//   return (
//     <section className="py-16 text-center" id="skills">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-4">My Services</h2>
//         <p className="max-w-2xl mx-auto mb-12">
//         I offer a range of creative and technical services tailored to help individuals and businesses build a strong digital presence
//         </p>

//         <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cursor-pointer" data-aos="zoom-in">
//           {skillsData.map((skill) => {
//             const Icon = skill.icon;
//             return (
//               <div key={skill.id} className="p-6">
//                 <div className="hover:text-[#8490ff] transition-all duration-200 dark:hover:text-[#8490ff]">
//                   <div className="flex justify-center mb-4 text-5xl text-primary">
//                     <Icon className="transition-all duration-200" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
//                 </div>
//                 <p className="leading-relaxed tracking-wider text-justify">{skill.description}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
