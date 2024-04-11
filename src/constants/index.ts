import {
    mobile,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    threejs,
    utn,
    platzi,
    twitchAPI,
    portfolio,
    weCheck,
    weCheckLogo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
   
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Programmig technician",
      company_name: "UTN MAR DEL PLATA ",
      icon: utn,
      iconBg: "#E6DEDD",
      date: "March 2020 - February 2022",
      points: [
        "C - JAVA - MYSQL - PHP - HTML - CSS - Bootstrap.",
        "SCRUM - GIT - GITHUB.",
        "Spring - Api Rest - NodeJS - Java Script.",
        
      ],
    },
    {
      title: "Video Game Design Course",
      company_name: "Patzi",
      icon: platzi,
      iconBg: "#383E56",
      date: "April 2022 - October 2022",
      points: [
        "Curso de introducción a Unity Scripting.",
        "Curso de Programación de videojuegos 2D con Unity.",
        "Curso Intermedio de programación de videojuegos 2D con Unity.",
        
      ],
    },
    {
      title: "REACT Course",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "I found myself participating in a bootcamp led by a Senior Programer",
        "gaining experience in the fields of React, Redux, React-Toolkit, React-Query and Typescript.",  
      ],
      navLinks:"Proyect GitHub: https://github.com/PilarLastra/ApiTwitchTraining.git",
    },
    {
      title: "Three.js",
      icon: threejs,
      iconBg: "#E6DEDD",
      date: "July 2023 - September 2023",
      points: [
        "I start lerning new tecnologies like Three.js - React Three Fiber - TailwindCSS and Framer Motion with which I developed this portfolio.",
       
      ],
    },
    {
      title: "WeCheck AI",
      icon: weCheckLogo,
      iconBg: "#F6f0FF",
      date: "September 2023 - Present",
      points: [
        "As a Frontend Engineer, I am part of the team responsible for the development and maintenance of various applications, including three web platforms and a mobile application. These products are designed to manage users' risk levels through advanced analysis of their social networks, using AI.",
       
      ],
    },
  ];
  
  const projects = [
    {
      name: "API Twitch",
      description:
        "Web application that enables users to view live streams and filter by language or name. This project was made using the twitch api.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: twitchAPI,
      source_code_link: "https://github.com/PilarLastra/ApiTwitchTraining.git",
    },
    {
      name: "Portfolio",
      description:
        "Portfolio web application which was made implementing Three.js - React Three Fiber - TailwindCSS and Framer Motion.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/PilarLastra/Portfolio.git",
    },
    {
      name: "WeCheck AI",
      description:
        "Explore Beyond The Social Surface. Mitigate Risks With Social Media Due Diligence.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "taildwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
      ],
      image: weCheck,
      source_code_link: "https://wecheck.ai/",
    },
    
    
  ];
  
  export { services, technologies, experiences, projects };
  