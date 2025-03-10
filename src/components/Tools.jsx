import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useGSAP } from "@gsap/react"; // GSAP React hook
import "./css/Tools.css";
import reactLogo from "../assets/react-logo.svg";
import figmaLogo from "../assets/figma.svg";
import mongoDbLogo from "../assets/mongodb-logo.svg";
import expressLogo from "../assets/express-logo.svg";
import nodejsLogo from "../assets/nodejs-logo.svg";
import laravelLogo from "../assets/laravel-logo.svg";
import dotnetLogo from "../assets/dotnet-logo.svg";
import tailwindLogo from "../assets/tailwind-logo.svg";
import { motion } from "motion/react";

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

const Tools = () => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(".iconsForTools", {
        duration: 0.6,
        scale: 0,
        scrollTrigger: {
          trigger: ".toolSection",
          start: "top 60%",
          end: "top 60%",
        },
      });
    });
    return () => ctx.revert();
  });

  return (
    <div className="toolSection py-[80px] min-h-[calc(100dvh-70px)] flex justify-center items-center bg-[#050810] text-[#14e958] flex-col gap-20">
      {/* Tools Header */}
      <div className="tools text-[35px] font-bold bg-[#12141d] px-6 py-3 rounded-lg">
        <h1>Tooling</h1>
      </div>

      {/* Icons Section */}
      <div className="iconsForTools px-4 py-4 w-[80vw] rounded-lg bg-[#0c8c34] flex justify-center items-center gap-4 flex-wrap text-white text-2xl font-semibold">
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="react naam"
        >
          <h1>React</h1>
          <img src={reactLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="mongodb naam"
        >
          <h1>Mongo DB</h1>
          <img src={mongoDbLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="node naam"
        >
          <h1>Node js</h1>
          <img src={nodejsLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="express naam"
        >
          <h1>Express js</h1>
          <img src={expressLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="laravel naam"
        >
          <h1>Laravel</h1>
          <img src={laravelLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="dotnet naam"
        >
          <h1>Dotnet</h1>
          <img src={dotnetLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="figma naam"
        >
          <h1>Figma</h1>
          <img src={figmaLogo} alt="React Logo" />
        </motion.div>
        <motion.div
          drag
          whileDrag={{
            scale: 0.8,
          }}
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
          className="tailwind naam"
        >
          <h1>Tailwind</h1>
          <img src={tailwindLogo} alt="React Logo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tools;
