import React, { useRef } from "react";
import "./css/Projects.css";

import todo from "../assets/images/todo-simple.png";
import weather from "../assets/images/weather.jpg";
import bmi from "../assets/images/BMI-calculator.jpg";
import rockPaperScissor from "../assets/images/rockPaperScissor.jpg";
import chatApp from "../assets/images/chatApp.jpg";

const Projects = () => {
  const imageContainerRef = useRef(null);

  const images = [
    {
      name: todo,
      redirect: "https://noobmaster6469.github.io/11.to-do/",
    },
    {
      name: weather,
      redirect: "https://noobmaster6469.github.io/Weather/",
    },
    {
      name: chatApp,
      redirect: "https://mern-stack-chat-app-8kb4.onrender.com/login",
    },
    {
      name: bmi,
      redirect: "#",
    },
    {
      name: rockPaperScissor,
      redirect: "#",
    },
  ];

  const prev = () => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.firstChild.offsetWidth;
      imageContainerRef.current.scrollLeft -= imageWidth;
    }
  };

  const next = () => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.firstChild.offsetWidth;
      imageContainerRef.current.scrollLeft += imageWidth;
    }
  };

  return (
    <div className="page-container flex flex-col justify-center px-8 py-10">
      <div className="projects text-[35px] text-[#14e958] font-bold bg-[#12141d] px-6 py-3 rounded-lg">
        <h1>Projects</h1>
      </div>
      <div className="content flex items-center gap-4">
        <div className="prev cursor-pointer" onClick={prev}></div>
        <div
          className="slide-panel flex overflow-x-auto"
          ref={imageContainerRef}
        >
          {images.map((image, index) => (
            <a
              href={image.redirect}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.name}
                alt={`Project ${index + 1}`}
                className="w-48 h-32 mx-2 rounded-lg shadow-md"
              />
            </a>
          ))}
        </div>
        <div className="next cursor-pointer" onClick={next}>
          <h1 className="text-white">goooooo</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
