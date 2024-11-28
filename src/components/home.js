import React from "react";
import { useTranslation } from "react-i18next";
import myPhoto from "../assets/myPhoto.png";

const Home = () => {
  const { i18n, t } = useTranslation();
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = `/CV_Dario_HG_${i18n.language}.pdf`;
    link.download = `CV_Dario_HG_${i18n.language}.pdf`;
    link.click();
  };

  return (
    <div className="font-urbanist pt-24 pr-4 pl-4 justify-evenly justify-items-center items-center min-h-screen flex mobile:flex-col lg:flex-row lg:gap-36 mobile:gap-0 sm:gap-16 overflow-hidden">
      <section className="flex flex-col justify-center justify-items-center gap-8">
        <h1 className="font-comfortaa sm:text-8xl mobile:text-5xl font-bold ">
          Darío Hernández
        </h1>
        <h4 className="text-3xl text-blue-500 dark:text-lime-300 animate-lightning">
          {t("frontEnd")}
        </h4>

        <div
          id="about__buttons"
          className="flex gap-4 justify-center text-nowrap text-lg"
        >
          <button
            onClick={handleDownloadCV}
            className="bg-slate-50 hover:bg-blue-500 dark:hover:bg-blue-500 hover:scale-105 dark:bg-slate-800 dark:hover:text-black rounded-full p-2 overflow-hidden box-border sm:w-1/4 mobile:w-1/2"
          >
            CV 📃
          </button>
          <a
            href="#contact"
            className="bg-transparent hover:bg-lime-300 hover:dark:text-black hover:animate-vibrate rounded-full p-2 overflow-hidden box-border sm:w-1/4 mobile:w-1/2"
          >
            {t("contactMe")} 📲
          </a>
        </div>
      </section>
      <section id="my-photo" className="relative z-0 w-96 h-96 md:w-80 md:h-80">
        <img
          src={myPhoto}
          alt="Dario Hernandez"
          className=" filter grayscale drop-shadow-lg object-cover mask-gradient 2xl:scale-250 md:scale-150"
        />
      </section>
    </div>
  );
};

export default Home;
