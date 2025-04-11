// components/SkillsSection.tsx
"use client";
import React from "react";
import { skillsData } from "../../constants/constants";
const Skills = () => {
  return (
    <section className="py-16 text-center" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">My Services</h2>
        <p className="max-w-2xl mx-auto mb-12">
        I offer a range of creative and technical services tailored to help individuals and businesses build a strong digital presence
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer" data-aos="zoom-in">
          {skillsData.map((skill) => {
            const Icon = skill.icon; 
            return (
              <div key={skill.id} className="p-6">
                <div className="hover:text-[#8490ff] transition-all duration-200 dark:hover:text-[#8490ff]">
                  <div className="flex justify-center mb-4 text-5xl text-primary">
                    <Icon className="transition-all duration-200" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                </div>
                <p>{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
