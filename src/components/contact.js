import emailjs from "emailjs-com";
import { LucideLinkedin, Mail, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import github from "../assets/github.svg";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import Notification from "./ui/notification";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      () => {
        setNotification({
          show: true,
          message: t("notificationSuccess"),
          type: "success",
        });
        form.current.reset();
        setTimeout(
          () => setNotification({ show: false, message: "", type: "success" }),
          3000
        );
      },
      (error) => {
        setNotification({
          show: true,
          message: t("notificationError"),
          type: "error",
        });
        setTimeout(
          () => setNotification({ show: false, message: "", type: "success" }),
          3000
        );
      }
    );
  };

  return (
    <section
      id="contact"
      className="w-auto py-20 px-4 sm:px-6 lg:px-8 box-border"
    >
      <div className="flex flex-col justify-center mx-auto">
        <h2 className="font-comfortaa text-4xl font-bold mb-16 text-center">
          {t("contactTitle")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <div className="">
              <p className="text-lg font-urbanist">{t("contactDesc")}</p>
            </div>

            <div className="font-urbanist flex flex-col gap-3">
              {[
                {
                  icon: <Mail className="w-5 h-5" />,
                  title: t("emailLabel"),
                  details: "dhdezgr@gmail.com",
                  link: "mailto:dhdezgr@gmail.com",
                },
                {
                  icon: (
                    <img
                      src={github}
                      alt="githubicon"
                      className="w-5 h-5 dark:invert dark:brightness-0 dark:contrast-200"
                    />
                  ),
                  title: "GitHub",
                  details: "@dhdezg",
                  link: "https://github.com/dhdezg",
                },
                {
                  icon: <LucideLinkedin className="w-5 h-5" />,
                  title: t("linkedinLabel"),
                  details: "@dhdezgarcia",
                  link: "https://www.linkedin.com/in/dhdezgarcia/",
                },
              ].map((item, index) => (
                <Card key={index} className="p-4 group">
                  <a
                    href={item.link}
                    className="flex items-center gap-3 group-hover:text-blue-500 group-hover:dark:text-lime-300"
                  >
                    <div className="p-2 rounded-lg group-hover:animate-bounce">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm">{item.details}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <Card className="font-urbanist">
            <form ref={form} onSubmit={sendEmail} className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium">
                    {t("nameLabel")}
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    placeholder={t("namePlaceholder")}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">
                    {t("emailLabel")}
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2 mt-2">
                <label htmlFor="subject" className="text-sm font-medium ">
                  {t("subjectLabel")}
                </label>
                <Input
                  id="subject"
                  placeholder={t("subjectPlaceholder")}
                  className="w-full"
                />
              </div>

              <div className="space-y-2 mt-2">
                <label htmlFor="message" className="text-sm font-medium ">
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("messagePlaceholder")}
                  className="min-h-[150px] w-full"
                />
              </div>
              <Button className="group w-full  bg-blue-500 text-slate-200  dark:bg-lime-300 dark:text-slate-800 mt-2">
                <Send className="w-4 h-4 mr-2 group-hover:animate-spin" />
                {t("sendButton")}
              </Button>
            </form>
          </Card>
        </div>
      </div>
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() =>
            setNotification({ show: false, message: "", type: "success" })
          }
        />
      )}
    </section>
  );
};

export default Contact;
