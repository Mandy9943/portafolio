import {
  IPersonalInfo,
  ISkill,
  IExperince,
  IProject,
  ITranslation,
} from "./src/types/types";

export const personalInfo: IPersonalInfo = {
  name: "Armando Cesar Martin Calderon",
  position: {
    es: "Desarrollador de Front End",
    en: "Front End Developer",
  },
  email: "cesrmartn@yahoo.es",
  phone: 5358379931,
  address: {
    es: "Calle 7ma / J y 10, apto 13, edif 9906, Althabana, Boyeros",
    en: "7th Street / J and 10, apt 13, building 9906, Althabana, Boyeros",
  },
  nationality: "Cuba",
  birthday: "22/09/1999",
  profileImg: "/images/profile.jpg",
  socialMedia: [
    {
      icon: "github",
      link: "https://github.com/Mandy9943/",
    },
    {
      icon: "whatsapp",
      link: "https://wa.me/+5358379931",
    },
    {
      icon: "telegram",
      link: "https://t.me/Mandy9943",
    },
  ],
};

export const skills: ISkill[] = [
  {
    skill: "Html",
    percent: 95,
  },
  {
    skill: "Css",
    percent: 95,
  },
  {
    skill: "JavaScript",
    percent: 95,
  },
  {
    skill: "Typescript",
    percent: 85,
  },
  {
    skill: "Reactjs",
    percent: 90,
  },
  {
    skill: "Nextjs",
    percent: 70,
  },
  {
    skill: "Redux",
    percent: 85,
  },
  {
    skill: "Codeigniter",
    percent: 70,
  },
  {
    skill: "Nodejs",
    percent: 72,
  },
  {
    skill: "Express",
    percent: 65,
  },
  {
    skill: "MongoDB",
    percent: 70,
  },
  {
    skill: "Mysql",
    percent: 75,
  },
  {
    skill: "Jira",
    percent: 60,
  },
  {
    skill: "C++",
    percent: 80,
  },
  {
    skill: "C",
    percent: 80,
  },
  {
    skill: "Php",
    percent: 70,
  },
  {
    skill: "WordPress",
    percent: 70,
  },
  {
    skill: "Python",
    percent: 70,
  },
  {
    skill: "Bootstrap",
    percent: 85,
  },
  {
    skill: "Tailwind css",
    percent: 75,
  },
  {
    skill: "Antd",
    percent: 75,
  },
  {
    skill: "Styled component",
    percent: 90,
  },
  {
    skill: "Matrial UI",
    percent: 80,
  },
  {
    skill: "Capacidad para nuevas tecnologias",
    percent: 90,
  },
];

export const experiences: ITranslation<IExperince>[] = [
  {
    es: {
      place: "Zonassoft",
      description: `Desarrollo del sitio web de los proyectos de la Unión Europea en Cuba con reactjs. 
            `,
      position: "Programdor Front end",
      beginDate: "3/2021",
      endDate: "8/2021",
    },
    en: {
      place: "Zonassoft",
      description: `Development of the website of the European Union projects in Cuba with reactjs. 
            `,
      position: "Front end programmer",
      beginDate: "3/2021",
      endDate: "8/2021",
    },
  },
];

export const objetives: ITranslation<string> = {
  en: `I am looking for a position as a front-end programmer in the private sector or a company oriented to any industry where I can grow professionally and where I can bring all my skills as a programmer and acquire new skills during the process.`,
  es: `Busco un puesto como programador front-end en el sector
    particular o una empresa orientada a cualquier rubro en donde
    pueda crecer profesionalmente y donde pueda aportar todas mis
    destrezas como programador y adquirir nuevas habilidades
    durante el proceso.`,
};
export const adictionalInfo: ITranslation<string>[] = [
  {
    en: "Intermediate English language.",
    es: "Idioma Ingles intermedio.",
  },
  {
    es: "Idioma Ruso basico.",
    en: "Basic Russian language",
  },
  {
    es: "Idioma Español avanzado",
    en: "Advanced Spanish language",
  },
];

export const projects: ITranslation<IProject>[] = [
  {
    en: {
      img: "images/uemap.png",
      title: "European Union projects in Cuba website",
      description:
        "Web site to visualize in real time data of the European Union projects in Cuba.",
      link: "https://www.uecooperacioncuba.eu/",
    },
    es: {
      img: "images/uemap.png",
      title: "Sitio web de proyectos de la Unión Europea en Cuba",
      description:
        "Sitio web para visualizar en tiempo real datos de los proyectos de la Union Europea en Cuba",
      link: "https://www.uecooperacioncuba.eu/",
    },
  },
  {
    en: {
      img: "images/cubashop.png",
      title: "Cuba shop",
      description:
        "This was a demo project that I started but due to organizational issues I could not finish.",
      link: "https://cloth-shop.netlify.app/",
    },
    es: {
      img: "images/cubashop.png",
      title: "Cuba shop",
      description:
        "Este fue un proyecto demo que empece pero por cuestiones organizativas no pude finalizar.",
      link: "https://cloth-shop.netlify.app/",
    },
  },
  {
    en: {
      img: "images/enzona.png",
      title: "Fake enzona",
      description:
        "This was a demo project that I started but due to organizational issues I could not finish.",
      link: "https://enzona-react.netlify.app/",
    },
    es: {
      img: "images/enzona.png",
      title: "Fake enzona",
      description:
        "Este fue un proyecto demo que empece pero por cuestiones organizativas no pude finalizar.",
      link: "https://enzona-react.netlify.app/",
    },
  },
  {
    en: {
      img: "images/cv.png",
      title: "Curriculum",
      description: "Resume page to know a little more about me",
      link: "/",
    },
    es: {
      img: "images/cv.png",
      title: "Curriculum",
      description: "Pagina de curriculum para conocer un poco mas de mi",
      link: "/",
    },
  },
  {
    en: {
      img: "images/space-launches.png",
      title: "Upcoming Space Launches",
      description: "Demo testing de launches api rest",
      link: "https://space-launch-upcoming.netlify.app/",
    },
    es: {
      img: "images/space-launches.png",
      title: "Proximos lanzamientos al espacio demo",
      description: "Probando la api de lanzamienteos de cohetes.",
      link: "https://space-launch-upcoming.netlify.app/",
    },
  },
];
