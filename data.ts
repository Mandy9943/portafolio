import { link } from "fs";
import {IPersonalInfo, ISkill,IExperince, IProject} from "./types/types";

export const personalInfo:IPersonalInfo = {
    name:"Armando Cesar Martin Calderon",
    position: "Front End Developer",
    email:"cesrmartn@yahoo.es",
    phone:5358379931,
    address:"Calle 7ma / J y 10, apto 13, edif 9906, Althabana, Boyeros",
    nationality:"Cuba",
    birthday:"22/09/1999",
    profileImg:"/images/profile.jpg",
    socialMedia:[
        {
            icon:"facebook",
            link:"https://www.facebook.com/cesar.martin.794/"
        },
        {
            icon:"whatsapp",
            link:"https://wa.me/+5358379931"
        },
        {
            icon:"telegram",
            link:"https://t.me/Mandy9943"
        }

    ]

}

export const skills : ISkill[]= [
    {
    skill:"Html",
    percent: 95,
    },
    {
    skill:"Css",
    percent: 95,
    },
    {
    skill:"JavaScript",
    percent: 95,
    },
    {
    skill:"Typescript",
    percent: 85,
    },
    {
    skill:"Reactjs",
    percent: 90,
    },
    {
    skill:"Nextjs",
    percent: 70,
    },
    {
    skill:"Redux",
    percent: 85,
    },
    {
    skill:"Codeigniter",
    percent: 70,
    },
    {
    skill:"Nodejs",
    percent: 72,
    },
    {
    skill:"Express",
    percent: 65,
    },
    {
    skill:"MongoDB",
    percent: 70,
    },
    {
    skill:"Mysql",
    percent: 75,
    },
    {
    skill:"Jira",
    percent: 60,
    },
    {
    skill:"C++",
    percent: 80,
    },
    {
    skill:"C",
    percent: 80,
    },
    {
    skill:"Php",
    percent: 70,
    },
    {
    skill:"WordPress",
    percent: 70,
    },
    {
    skill:"Python",
    percent: 70,
    },
    {
    skill:"Bootstrap",
    percent: 85,
    },
    {
    skill:"Tailwind css",
    percent: 75,
    },
    {
    skill:"Antd",
    percent: 75,
    },
    {
    skill:"Styled component",
    percent: 90,
    },
    {
    skill:"Matrial UI",
    percent: 80,
    },
]

export const experiences :IExperince[] = [
    {
        place:"Zonassoft",
        description:`Desarrollo del sitio de web de los proyectos de la union
        europea en Cuba con reactjs. Me desempeñe como como programador front end. Consistio básicamente en desarrollar todas las vista
        a partir de una maquetación diseñada en figma. 
        `,
        position: "Front end Developer",
        beginDate:"3/2021",
        endDate:"8/2021",
        
    }
]

export const objetives :string = `Busco un puesto como programador front-end en el sector
particular o una empresa orientada a cualquier rubro en donde
pueda crecer profesionalmente y donde pueda aportar todas mis
destrezas como programador y adquirir nuevas habilidades
durante el proceso.`
export const adictionalInfo :string[] = ["Idioma Ingles intermedio. Estudié en escuela particular llamada Armis en el municio de Marianao","Idioma Ruso basico. Estudio en universidad pero lo llegue aterminar.", "Idioma Espanol. Idioma nativo"]

export const projects:IProject[]=[
    {
        img:"images/uemap.png",
    title: "Sitio web de proyectos de la Unión Europea en Cuba",
    description: "Sitio web para visualizar en tiempo real datos de los proyectos de la Union Europea en Cuba",
    link:"https://www.uecooperacioncuba.eu/"
},
    {
    img:"images/cubashop.png",
    title: "Cuba shop",
    description: "Este fue un proyecto demo que empece pero por cuetiones orgabizativas no pude terminar",
    link:"https://cloth-shop.netlify.app/"
},
    {
    img:"images/enzona.png",
    title: "Fake enzona",
    description: "Esto es un intento por imitar la aplicación enzona, esto también es algo no terminado.",
    link:"https://enzona-react.netlify.app/"
},
{
img:"images/cv.png",
title: "Curriculum",
description: "La pagina actual que estas viendo",
link:"/"
},
    {
    img:"images/mapbox.png",
    title: "Proyecto demo de mapbox",
    description: "Probando un la api de mapbox.",
    link:"https://demo-mapa-cuba.netlify.app/"
},
]