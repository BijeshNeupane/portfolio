import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  newsummit,
  volgai,
  csharp,
  dotnet,
  chatapp,
  ecommerce,
  pollapp,
  movieApp,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "College Incubation Program",
    icon: newsummit,
    iconBg: "#6f3E6f",
    date: "November 2024 - February 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and backend developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "nextjs Intern",
    company_name: "Volgai",
    icon: volgai,
    iconBg: "#3284a4",
    date: "May 2025 - September 2025",
    points: [
      "Assisting in the development and maintenance of web applications using technologies such as nextjs and tailwindcss.",
      "Collaborating with senior developers and designers to translate UI/UX wireframes into interactive user interfaces.",
      "Writing clean, reusable, and efficient code while following industry best practices.",
      "Doing optimization of website for better performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat App",
    description:
      "Web-based platform that allows users to chat and send images with each other in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/BijeshNeupane/MERN-stack-chat-app",
    project_link: "https://mern-stack-chat-app-8kb4.onrender.com/",
  },
  {
    name: "Movie App",
    description:
      "A web-based app for viewing movie and recommendations based on user preferences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link:
      "https://github.com/BijeshNeupane/movie-recommedation-system",
    project_link: "https://movie-recommedation-system-two.vercel.app/",
  },
  {
    name: "Polling app",
    description:
      "Web application that allows Admin to create polls and users to vote on them.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
    ],
    image: pollapp,
    source_code_link: "https://github.com/BijeshNeupane/polling-system",
    project_link: "https://pollappselfhosted.onrender.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
