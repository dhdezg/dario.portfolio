import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      about: 'about me',
      aboutTitle: 'About me',
      experience: 'experience',
      projects: 'projects',
      contact: 'contact',
      skills: 'skills',
      contactMe: 'Contact me',
      theme: 'Theme',
      language: 'Language',
      aboutDesc:
        'Hello!🙋🏻‍♂️<br /> I`m Dario, a developer with more than 3 years of experience in web application development. <br /> I have worked in the banking and education sectors. <br /> I love to create websites that help the user in addition to having an intuitive and pleasant experience.',
      education: 'Education',
      educationDesc: 'Computer Science Graduate',
      experienceTitle: 'Experience',
      experienceDesc: '3+ Years in Web Development',
      passion: 'Passion',
      passionDesc: 'Helping users',
      professionalJourney: 'My Professional Journey',
      frontEnd: 'Front End Developer',
      nowadays: 'Nowadays',
      neorisDesc:
        'I participated in the development of an ambitious new product for the education sector, designed to transform teaching through an innovative approach. From its initial phase, I worked on the implementation of the interface, ensuring a faithful translation of the designs into code and guaranteeing a seamless experience for users. In addition, the project required deployment on a CDN, which meant adapting the architecture to optimize performance and resource allocation.',
      bbvaDesc:
        'I contributed to the development and evolution of BBVA´s public website, implementing new features to improve the user experience. My work focused on optimizing performance, accessibility and maintainability of the code in a high traffic environment.',
      upmDesc:
        'Graduate in computer engineering from the UPM technical school.',
      inversisDesc:
        'I took my first steps in web development with a focus on the frontend, participating in the implementation of new features and troubleshooting in a financial platform. This experience allowed me to acquire a solid base in the creation and maintenance of scalable applications.',
      upm: 'Universidad Politécnica Madrid',
      personalProjects: 'Personal projects',
      comingSoon: 'Coming soon...',
      contactTitle: 'Need help with a project?',
      contactDesc:
        "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to help you!",
      nameLabel: 'Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email',
      emailPlaceholder: 'name@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Enter a subject',
      messageLabel: 'Message',
      messagePlaceholder: 'Enter your message',
      sendButton: 'Send',
      phoneLabel: 'Phone',
      linkedinLabel: 'Linkedin',
      skillsTitle: 'Skills',
      degreeTitle: 'Computer Science Graduate',
      notificationSuccess: 'Message sent successfully!',
      notificationError: 'Error sending message!',
      callMe: 'Call me',
      cvgeneratorDesc:
        'A simple tool to generate a professional CV in minutes without worrying about styles and no registrations.',
      taskManagementDesc:
        'Collaborative task management with real-time updates',
      weatherDashboardDesc:
        'Real-time weather tracking with detailed analytics',
      ayesaDesc:
        'I am part of the team that is developing from scratch a new internal reporting tool for the risk department of a bank. I work closely with the backend team for the integration of services and with the design team to define the interface and flow of the application. In addition, we consume artificial intelligence services to optimize data analysis and improve process efficiency.',
      code: 'Code',
      live: 'Live',
    },
  },
  es: {
    translation: {
      about: 'sobre mi',
      aboutTitle: 'Sobre mi',
      experience: 'experiencia',
      projects: 'proyectos',
      contact: 'contacto',
      skills: 'habilidades',
      contactMe: 'Contáctame',
      theme: 'Tema',
      language: 'Idioma',
      aboutDesc:
        'Hola!🙋🏻‍♂️<br /> Soy Dario, un desarrollador con más de 3 años de experiencia en el desarrollo de aplicaciones web. <br /> He trabajado en los sectores de banca y educación. <br /> Me encanta crear webs que ayuden al usuario, además de tener una experiencia intuitiva y agradable.',
      education: 'Educación',
      educationDesc: 'Graduado en Ingeniería Informática',
      experienceTitle: 'Experiencia',
      experienceDesc: 'Más de 3 años de experiencia en desarrollo web',
      passion: 'Pasión',
      passionDesc: 'Ayudar a los usuarios',
      professionalJourney: 'Mi trayectoria profesional',
      frontEnd: 'Front End Developer',
      nowadays: 'Actualmente',
      neorisDesc:
        'Participé en el desarrollo de un nuevo y ambicioso producto para el sector educativo, diseñado para transformar la enseñanza mediante un enfoque innovador. Desde su fase inicial, trabajé en la implementación de la interfaz, asegurando una traducción fiel de los diseños en código y garantizando una experiencia fluida para los usuarios. Además, el proyecto requería su despliegue en un CDN, lo que implicó adaptar la arquitectura para optimizar el rendimiento y la distribución de los recursos.',
      bbvaDesc:
        'Contribuí al desarrollo y evolución de la web pública de BBVA, implementando nuevas funcionalidades para mejorar la experiencia del usuario. Mi labor se enfocó en optimizar el rendimiento, la accesibilidad y la mantenibilidad del código en un entorno de alto tráfico.',
      upmDesc:
        'Graduado en ingeniería informática por la escuela técnica de la UPM.',
      inversisDesc:
        'Di mis primeros pasos en el desarrollo web con un enfoque en el frontend, participando en la implementación de nuevas funcionalidades y la resolución de incidencias en una plataforma financiera. Esta experiencia me permitió adquirir una base sólida en la creación y mantenimiento de aplicaciones escalables',
      upm: 'Universidad Politécnica Madrid',
      personalProjects: 'Proyectos personales',
      comingSoon: 'Próximamente...',
      contactTitle: '¿Necesitas ayuda con un proyecto?',
      contactDesc:
        'Siempre me interesa conocer nuevos proyectos y oportunidades. Si tienes alguna pregunta o simplemente quieres saludarme, ¡haré todo lo posible por ayudarte!',
      nameLabel: 'Nombre',
      namePlaceholder: 'Introduce tu nombre',
      emailLabel: 'Email',
      emailPlaceholder: 'nombre@ejemplo.com',
      subjectLabel: 'Asunto',
      subjectPlaceholder: 'Introduce el asunto',
      messageLabel: 'Mensaje',
      messagePlaceholder: 'Tu mensaje...',
      sendButton: 'Enviar',
      phoneLabel: 'Teléfono',
      linkedinLabel: 'Linkedin',
      skillsTitle: 'Habilidades',
      degreeTitle: 'Grado en Ingeniería Informática',
      notificationSuccess: '¡Mensaje enviado con éxito!',
      notificationError: '¡Error al enviar el mensaje!',
      callMe: 'Llámame',
      cvgeneratorDesc:
        'Una herramienta para generar un CV profesional en pocos minutos sin necesidad de preocuparte por los estilos y sin registros.',
      taskManagementDesc:
        'Gestión de tareas colaborativa con actualizaciones en tiempo real',
      weatherDashboardDesc:
        'Seguimiento del tiempo en tiempo real con análisis detallados',
      ayesaDesc:
        'Formo parte del equipo que está desarrollando desde cero una nueva herramienta interna para la generación de informes en el departamento de riesgos de un banco. Trabajo en estrecha colaboración con el equipo de backend para la integración de servicios y con el equipo de diseño para definir la interfaz y el flujo de la aplicación. Además, consumimos servicios de inteligencia artificial para optimizar el análisis de datos y mejorar la eficiencia del proceso.',
      code: 'Código',
      live: 'Visitar',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
