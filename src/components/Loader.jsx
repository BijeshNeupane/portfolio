import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onAnimationComplete }) => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(".text-individual", {
      duration: 1.2,
      y: 100,
      opacity: 0,
      delay: 0.2,
      stagger: 0.4,
    });

    gsap.to(".text-individual", {
      css: {
        WebkitTextStrokeColor: "#14e956",
        WebkitTextStrokeWidth: "6px",
      },
      delay: 0.2,
      stagger: 0.4,
      duration: 1.2,
      ease: "sine.in",
    });

    tl.to(".text-individual", {
      color: "#14e956",
      duration: 1,
    });

    tl.to(".text-individual", {
      y: -100,
      duration: 1,
      opacity: 0,
      delay: 0.5,
    });

    tl.to(".mathi", {
      duration: 1,
      height: 0,
    });

    tl.to(".mathi", {
      display: "none",
      onComplete: onAnimationComplete, // Callback to notify when the animation is done
    });

    return () => {
      tl.kill();
    };
  });

  const name = "BIJESH";
  return (
    <div className="mathi h-[100vh] w-[100vw] flex justify-center items-center fixed top-0 left-0 z-[9999] right-0 bg-black text-white overflow-hidden scroll-m-0 tracking-[2vh]">
      {name.split("").map((char, index) => (
        <span
          key={index}
          className="text-individual font-extrabold text-[20vw] text-transparent"
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default Loader;
