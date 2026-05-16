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
  movieapp,
  pasale,
  reactNative,
  nextjs,
  techYatra,
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
    title: "App Developer",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React Native",
    icon: reactNative,
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
    date: "November 2024 - March 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and backend developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Nextjs Intern",
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
  {
    title: "Nextjs and React native Developer",
    company_name: "Techyatra Labs",
    icon: techYatra,
    iconBg: "#103876",
    date: "November 2026 - Current",
    points: [
      "Developing and maintaining web applications using technologies such as nextjs and tailwindcss.",
      "Developing app using react native and expo.",
      "Integrating apis and handling state management.",
      "Api optimization using tanstack query.",
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
    name: "Ecommerce App",
    description: "A full fledged multi-vendor ecommerce web application.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: pasale,
    source_code_link: "https://github.com/BijeshNeupane/Pasale",
    project_link: "https://pasale.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
