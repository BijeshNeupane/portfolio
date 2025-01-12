import React, { useRef } from "react";
import "./css/Slider.css";
import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";
import car4 from "../assets/car4.jpeg";
import car5 from "../assets/car5.jpeg";
import car6 from "../assets/car6.jpeg";

const images = [car1, car2, car3, car4, car5, car6];
const description = [];

const Slider = () => {
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
            <img src={image} alt={`image${index + 1}`} />
            <h1 className="px-4 py-4 text-[10px]">This is a project</h1>
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
