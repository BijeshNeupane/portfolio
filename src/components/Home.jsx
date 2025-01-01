import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import { useEffect, useRef } from "react";
import "./css/Home.css";
import mainImage from "../assets/main1.svg"; // Import the image dynamically

const Home = () => {
  // const spanRef = useRef(null); // Ref for the span element

  // useGSAP(() => {
  //   if (!spanRef.current) return; // Safety check

  //   const tl = gsap.timeline({});
  //   const animationSteps = [
  //     { x: -10, scale: 1.1, duration: 0.2 },
  //     { x: 10, scale: 1.1, duration: 0.4 },
  //   ];

  //   animationSteps.forEach((step) => {
  //     tl.to(spanRef.current, {
  //       ...step,
  //       ease: "sine.in",
  //     });
  //   });

  //   return () => {
  //     tl.kill(); // Cleanup animation on unmount
  //   };
  // });

  useGSAP(() => {
    gsap.from(".left", {
      duration: 1.6,
      x: -100,
      opacity: 0,
      delay: 6.4,
      stagger: 0.4,
      ease: "back.inOut",
    });
    gsap.from(".right", {
      duration: 1.6,
      x: 100,
      opacity: 0,
      delay: 6.4,
      stagger: 0.4,
      ease: "back.inOut",
    });
  });

  return (
    <div className="bg h-[calc(100vh-10vh)]">
      <div className="blurDiv flex justify-around items-center inside h-[100%] w-[100%] filter backdrop-blur-sm text-white">
        <div className="left w-[50vw]">
          <div className="top mb-4 w-[fit-content] px-4 py-2 text-md rounded-md text-[#14e958] flex items-center justify-center">
            <span
              // ref={spanRef}
              className="text-3xl mr-2 text-[#500082] flex items-center mt-[-8px]"
            >
              ✌🏻
            </span>
            Hi There! I'm Bijesh
          </div>

          <div className="intro capitalize text-2xl">
            A <span>Fullstack Developer</span> and a <span>Web Designer</span>.I
            build <span>Websites</span> for businesses to <span>grow</span>.
          </div>
        </div>

        <div className="right">
          <img
            className="h-[50vh]"
            src={mainImage}
            alt="Illustration of Bijesh Neupane"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
