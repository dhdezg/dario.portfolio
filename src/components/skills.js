import React from "react";
import { useTranslation } from "react-i18next";
import { skills } from "../data/skills";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="font-urbanist py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="font-comfortaa text-4xl font-bold mb-16 text-center">
        {t("skillsTitle")}
      </h2>
      <div className="flex flex-wrap justify-center max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto gap-4">
        {skills.items.map((skill) => {
          return (
            <div
              key={skill.name}
              className="flex flex-col gap-2 p-2 w-32 h-32 justify-center items-center rounded-3xl bg-slate-300 dark:bg-slate-600 group shadow dark:shadow-slate-500 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-lime-200 transition-shadow duration-300"
            >
              <img
                src={skill.image}
                alt="skill-icon"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 grayscale group-hover:grayscale-0"
              ></img>
              <p className="font-bold">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
