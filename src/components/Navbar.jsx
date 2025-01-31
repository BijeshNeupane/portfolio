import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/images/logoLast.png";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import { useRef, useState } from "react";
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import XLogo from "../assets/x-logo.svg";
import CVLogo from "../assets/cv-logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const menu = useRef(null);
  const clickHandler = (e) => {
    setClick(!click);
    if (click) {
      menu.current.style.scale = "0";
    } else {
      menu.current.style.scale = "1";
    }
  };
  return (
    <>
      <nav className="bg-[#14e956] flex justify-between px-[8vw] py-4 text-2xl font-bold items-center sticky top-0 z-10">
        <div className="logo hover:scale-[1.01] transition-all logo h-[100%] text-white flex items-center">
          <img className="h-[65px] w-[65px] rounded-xl" src={logo} alt="logo" />
        </div>

        <div className="hamburger hover:scale-105 transition-all">
          <img
            className="h-[40px] w-[40px]"
            src={click ? cross : hamburger}
            alt="menu"
            onClick={(e) => {
              clickHandler(e);
            }}
          />
        </div>

        <div
          className="menu gayab flex flex-col items-center justify-center h-[88vh] w-screen bg-[#050810] absolute left-0 text-white"
          ref={menu}
          style={{ "--quantity": 3 }}
        >
          <a
            className="flex-1 w-full flex items-center justify-center gap-8 text-4xl bg-[#010400] hover:bg-gray-900"
            href="https://github.com/noobmaster6469"
            target="_blank"
          >
            <img
              height={"80px"}
              width={"80px"}
              src={githubLogo}
              alt="Github Logo"
            />
            GitHub
          </a>
          <a
            className="flex-1 w-full flex items-center justify-center gap-8 text-4xl bg-[#0A66C2] hover:bg-[#164778]"
            href="https://www.linkedin.com/in/bijesh-neupane-24665a237/"
            target="_blank"
          >
            <img
              height={"80px"}
              width={"80px"}
              src={linkedinLogo}
              alt="Github Logo"
            />
            LinkedIn
          </a>
          <a
            className="flex-1 w-full flex items-center justify-center gap-8 text-4xl bg-[#000000] hover:bg-gray-900"
            href="https://x.com/NMaster016"
            target="_blank"
          >
            <img height={"80px"} width={"80px"} src={XLogo} alt="Github Logo" />
            Twitter
          </a>
          <a
            className="flex-1 w-full flex items-center justify-center gap-8 text-4xl bg-gray-800 hover:bg-gray-700"
            href="/react_php.pdf"
            download
          >
            <img
              height={"70px"}
              width={"70px"}
              src={CVLogo}
              alt="Github Logo"
            />
            Download CV
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
