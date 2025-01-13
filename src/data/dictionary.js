import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: "about me",
      aboutTitle: "About me",
      experience: "experience",
      projects: "projects",
      contact: "contact",
      skills: "skills",
      contactMe: "Contact me",
      theme: "Theme",
      language: "Language",
      aboutDesc:
        "Hello!🙋🏻‍♂️<br /> I`m Dario, a developer with more than 3 years of experience in web application development. <br /> I have worked in the banking and education sectors. <br /> I love to create websites that help the user in addition to having an intuitive and pleasant experience.",
      education: "Education",
      educationDesc: "Computer Science Graduate",
      experienceTitle: "Experience",
      experienceDesc: "3+ Years in Web Development",
      passion: "Passion",
      passionDesc: "Helping users",
      professionalJourney: "My Professional Journey",
      frontEnd: "Front End Developer",
      nowadays: "Nowadays",
      neorisDesc:
        "Creation of a new product for the education sector. Transforming Figma designs into code, with Lit Element and Typescript technologies. Ensuring the correct functioning of the code with unit testing with OpenWC. And achieving the objectives set by the client.",
      bbvaDesc:
        "Development of new functionalities in the public website of the Spanish bank BBVA, using Lit Element, Typescript and React technologies.",
      upmDesc:
        "Graduate in computer engineering from the UPM technical school.",
      inversisDesc:
        "Started my journey in web development with focus on front-end technologies. Development of new functionalities and bug fixes using Angular 12 and Javascript.",
      upm: "Universidad Politécnica Madrid",
      personalProjects: "Personal projects",
      comingSoon: "Coming soon...",
      contactTitle: "Need help with a project?",
      contactDesc:
        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to help you!",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "name@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Enter a subject",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      sendButton: "Send",
      phoneLabel: "Phone",
      linkedinLabel: "Linkedin",
      skillsTitle: "Skills",
      degreeTitle: "Computer Science Graduate",
      notificationSuccess: "Message sent successfully!",
      notificationError: "Error sending message!",
      callMe: "Call me",
      cvgeneratorDesc:
        "A simple tool to generate a professional CV in minutes without worrying about styles and no registrations.",
      taskManagementDesc: "Collaborative task management with real-time updates",
      weatherDashboardDesc: "Real-time weather tracking with detailed analytics",
    },
  },
  es: {
    translation: {
      about: "sobre mi",
      aboutTitle: "Sobre mi",
      experience: "experiencia",
      projects: "proyectos",
      contact: "contacto",
      skills: "habilidades",
      contactMe: "Contáctame",
      theme: "Tema",
      language: "Idioma",
      aboutDesc:
        "Hola!🙋🏻‍♂️<br /> Soy Dario, un desarrollador con más de 3 años de experiencia en el desarrollo de aplicaciones web. <br /> He trabajado en los sectores de banca y educación. <br /> Me encanta crear webs que ayuden al usuario además tener una experiencia intuitiva y agradable.",
      education: "Educación",
      educationDesc: "Graduado en Ingeniería Informática",
      experienceTitle: "Experiencia",
      experienceDesc: "Más de 3 años de experiencia en desarrollo web",
      passion: "Pasión",
      passionDesc: "Ayudar a los usuarios",
      professionalJourney: "Mi trayectoria profesional",
      frontEnd: "Front End Developer",
      nowadays: "Actualmente",
      neorisDesc:
        "Creación de un nuevo producto para el sector educativo. Transformación de diseños Figma en código, con tecnologías Lit Element y Typescript. Asegurando el correcto funcionamiento del código con pruebas unitarias con OpenWC. Y consiguiendo los objetivos marcados por el cliente.",
      bbvaDesc:
        "Desarrollo de nuevas funcionalidades en la web pública del banco español BBVA, utilizando las tecnologías Lit Element, Typescript y React.",
      upmDesc:
        "Graduado en ingeniería informática por la escuela técnica de la UPM.",
      inversisDesc:
        "Comencé mi andadura en el desarrollo web con foco en tecnologías front-end. Desarrollo de nuevas funcionalidades y corrección de errores utilizando Angular 12 y Javascript.",
      upm: "Universidad Politécnica Madrid",
      personalProjects: "Proyectos personales",
      comingSoon: "Próximamente...",
      contactTitle: "¿Necesitas ayuda con un proyecto?",
      contactDesc:
        "Siempre me interesa conocer nuevos proyectos y oportunidades. Si tienes alguna pregunta o simplemente quieres saludarme, ¡haré todo lo posible por ayudarte!",
      nameLabel: "Nombre",
      namePlaceholder: "Introduce tu nombre",
      emailLabel: "Email",
      emailPlaceholder: "nombre@ejemplo.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Introduce el asunto",
      messageLabel: "Mensaje",
      messagePlaceholder: "Tu mensaje...",
      sendButton: "Enviar",
      phoneLabel: "Teléfono",
      linkedinLabel: "Linkedin",
      skillsTitle: "Habilidades",
      degreeTitle: "Grado en Ingeniería Informática",
      notificationSuccess: "¡Mensaje enviado con éxito!",
      notificationError: "¡Error al enviar el mensaje!",
      callMe: "Llámame",
      cvgeneratorDesc:
        "Una herramienta para generar un CV profesional en pocos minutos sin necesidad de preocuparte por los estilos y sin registros.",
      taskManagementDesc: "Gestión de tareas colaborativa con actualizaciones en tiempo real",
      weatherDashboardDesc: "Seguimiento del tiempo en tiempo real con análisis detallados",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
