import React from "react";
import { I18nextProvider } from "react-i18next";
import "./Portfolio.css";
import About from "./components/about.js";
import Career from "./components/career/career.js";
import Contact from "./components/contact.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Projects from "./components/projects.js";
import Skills from "./components/skills.js";
import i18n from "./data/dictionary.js";

function Portfolio() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App bg-slate-200 dark:bg-slate-950 text-slate-950 dark:text-gray-200">
        <Header />
        <Home />
        <About />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </I18nextProvider>
  );
}

export default Portfolio;
