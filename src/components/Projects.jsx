import React, { useRef } from "react";
import "./css/Projects.css";

import car1 from "../assets/car1.jpeg";
import car2 from "../assets/car2.jpeg";
import car3 from "../assets/car3.jpeg";

const Projects = () => {
  let imageContainerRef = useRef(null);

  const images = [car1, car2, car3];

  const prev = () => (imageContainerRef.current.scrollLeft -= 250);

  const next = () => (imageContainerRef.current.scrollLeft += 250);
  return (
    <div className="page-container">
      <div className="content">
        <div className="prev" onClick={prev}></div>
        <div className="slide-panel" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img src={image} alt={`image${index + 1}`} />
          ))}
        </div>
        <div className="next" onClick={next}></div>
      </div>
    </div>
  );
};

export default Projects;
