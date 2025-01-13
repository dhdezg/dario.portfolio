import { GitGraph, PlayIcon } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { projects } from "../data/projects";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-comfortaa text-4xl font-bold mb-16 text-center">
          {t("personalProjects")}
        </h2>

        <div className="relative">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video rounded">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="hover:bg-slate-400"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitGraph
                          size={20}
                          strokeWidth={1.5}
                          className="w-4 h-4 mr-2"
                        />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="hover:bg-slate-400"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <PlayIcon
                          size={20}
                          strokeWidth={1.5}
                          className="w-4 h-4 mr-2"
                        />
                        Live
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="px-1 py-2">
                  <h3 className="font-comfortaa font-bold text-lg">
                    {project.title}
                  </h3>
                  <p className="font-urbanist text-md">
                    {t(project.description)}
                  </p>
                  <div className="p-2 flex flex-wrap gap-2 justify-center">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-300 dark:bg-slate-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
