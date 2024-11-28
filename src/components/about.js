import { Briefcase, GraduationCap, Heart } from "lucide-react";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import darioMemoji from "../assets/darioMemoji.png";
import { Card } from "./ui/card";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-comfortaa text-4xl font-bold mb-16 text-center">
          {t("aboutTitle")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="font-urbanist text-xl leading-relaxed text-center">
              <Trans i18nKey={"aboutDesc"} />
            </p>

            <div className="space-y-4 font-urbanist">
              {[
                {
                  icon: (
                    <GraduationCap className="w-6 h-6 group-hover:fill-slate-800 dark:group-hover:fill-blue-900" />
                  ),
                  title: t("education"),
                  description: t("educationDesc"),
                },
                {
                  icon: (
                    <Briefcase className="w-6 h-6 group-hover:fill-amber-950 dark:group-hover:fill-amber-700" />
                  ),
                  title: t("experienceTitle"),
                  description: t("experienceDesc"),
                },
                {
                  icon: <Heart className="w-6 h-6 group-hover:fill-red-500" />,
                  title: t("passion"),
                  description: t("passionDesc"),
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-4 flex items-center justify-center space-x-4 bg-slate-50 dark:bg-slate-800 group hover:scale-110 transition-transform duration-300"
                >
                  <div className="p-2 rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-blue-500 dark:text-lime-300">
                      {item.title}
                    </h3>
                    <p className="">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={darioMemoji}
                alt="Developer workspace"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
