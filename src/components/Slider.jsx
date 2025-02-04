import React, { useRef } from "react";
import "./css/Slider.css";
import todo from "../assets/images/todo-simple.png";
import weather from "../assets/images/weather.jpg";
import bmi from "../assets/images/BMI-calculator.jpg";
import rockPaperScissor from "../assets/images/rockPaperScissor.jpg";
const description = [];

const Slider = () => {
  const images = [
    {
      name: todo,
      redirect: "https://noobmaster6469.github.io/11.to-do/",
      description: "To-do list",
    },
    {
      name: weather,
      redirect: "https://noobmaster6469.github.io/Weather/",
      description: "Weather App",
    },
    {
      name: bmi,
      redirect: "#",
      description: "BMI Calculator",
    },
    {
      name: rockPaperScissor,
      redirect: "#",
      description: "Rock Paper Scissor game ",
    },
  ];
  const slider = useRef(null);
  const mouseEnterController = () => {
    slider.current.style.animationPlayState = "paused";
  };
  const mouseExitController = () => {
    slider.current.style.animationPlayState = "running";
  };
  return (
    <div className="banner bg-[#050810]">
      <div
        className="slider"
        ref={slider}
        style={{ "--quantity": images.length }}
      >
        {images.map((image, index) => (
          <div
            onMouseEnter={() => {
              mouseEnterController();
            }}
            onMouseLeave={() => {
              mouseExitController();
            }}
            className="item"
            key={index}
            style={{ "--position": index + 1 }}
          >
            <a
              href={image.redirect}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={image.name} alt={`image${index + 1}`} />
              <h1 className="px-4 py-1 text-[16px]">{image.description}</h1>
            </a>
          </div>
        ))}
      </div>

      <div className="content">
        <div className="projects text-[#14e958] text-[35px] font-bold bg-[#12141d] px-6 py-3 rounded-lg">
          <h1>Projects</h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
