import { Code, Globe2, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "es");
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const sections = [
    { id: "about", translationKey: "about" },
    { id: "experience", translationKey: "experience" },
    { id: "skills", translationKey: "skills" },
    { id: "projects", translationKey: "projects" },
    { id: "contact", translationKey: "contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header
      id="header"
      className={`sticky sticky-header top-0 w-full text-nowrap z-10 transition-colors duration-300`}
    >
      <div className="flex justify-between p-4 items-center">
        <div
          id="logo"
          className="font-comfortaa text-3xl flex flex-row gap-1 hover:scale-110 dark:hover:text-lime-300 hover:text-blue-500 transition-transform duration-300"
        >
          <button
            className="flex flex-row items-center gap-1"
            onClick={scrollToTop}
          >
            <Code size={28} strokeWidth={1.5} />
            dario.dev
          </button>
        </div>

        {/* Desktop Menu */}
        <div id="menu" className="hidden font-urbanist md:flex gap-3 p-4">
          {sections.map((section, sectionIndex) => (
            <a
              key={sectionIndex}
              href={`#${section.id}`}
              className="text-lg hover:text-blue-500 hover:scale-110 dark:hover:text-lime-300 transform transition-transform duration-200 ease-in-out"
            >
              {t(section.translationKey)}
            </a>
          ))}
        </div>

        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="hover:text-blue-500 dark:hover:text-lime-300 transition-transform duration-300"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            className="hover:text-blue-500 dark:hover:text-lime-300 hover:scale-110 transition-all duration-300 ease-in-out"
            onClick={toggleLanguage}
          >
            <Globe2 />
          </button>
          <button
            className="flex items-center justify-between p-2 hover:scale-110 dark:hover:text-yellow-300 hover:text-gray-500 transition-all duration-300 ease-in-out"
            onClick={toggleTheme}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleTheme();
            }}
            tabIndex={0}
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"></div>
            <div
              ref={menuRef}
              className={`fixed top-0 left-0 w-full shadow-lg bg-slate-100 dark:bg-slate-800 dark:shadow-slate-700 p-6 transition-transform duration-300 z-30 md:hidden`}
            >
              <div className="flex flex-col items-center gap-6">
                {sections.map((section, sectionIndex) => (
                  <a
                    key={sectionIndex}
                    href={`#${section.id}`}
                    className="text-lg hover:text-blue-500 dark:hover:text-lime-300 transform transition-transform duration-200 ease-in-out"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(section.translationKey)}
                  </a>
                ))}

                {/* Theme and Language Toggle for Mobile */}
                <div className="flex justify-evenly w-full p-1 border-t-2">
                  <button
                    className="hover:text-blue-500 dark:hover:text-lime-300 hover:scale-110 transition-all duration-300 ease-in-out"
                    onClick={toggleLanguage}
                  >
                    <Globe2 />
                  </button>
                  <button
                    className="flex items-center justify-between p-2 hover:scale-110 dark:hover:text-yellow-300 hover:text-gray-500 transition-all duration-300 ease-in-out"
                    onClick={toggleTheme}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleTheme();
                    }}
                    tabIndex={0}
                  >
                    {darkMode ? <Sun /> : <Moon />}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
