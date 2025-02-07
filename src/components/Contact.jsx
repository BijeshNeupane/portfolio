import React, { useRef } from "react";
import "./css/Contact.css";
import emailjs from "@emailjs/browser";
import githubLogo from "../assets/github-logo.svg";
import linkedinLogo from "../assets/linkedin-logo.svg";
import XLogo from "../assets/x-logo.svg";
import CVLogo from "../assets/cv-logo.svg";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vf811k4", "template_34jwk1g", form.current, {
        publicKey: "BRxRy38TrzkilDwm1",
      })
      .then(
        () => {
          toast("Good Job!", {
            icon: "👏",
          });
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="base bg-[#050810]  flex flex-col justify-between pt-[40px] gap-[50px] items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6 mx-[20px]"
      >
        <h2 className="text-3xl font-bold text-center text-[#14e958]">
          Get in touch
        </h2>
        <div className="name">
          <label
            htmlFor="from_name"
            className="block text-sm font-medium text-gray-100"
          >
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            required
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="email">
          <label
            htmlFor="from_email"
            className="block text-sm font-medium text-gray-100"
          >
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            required
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-non"
            placeholder="Enter your email"
          />
        </div>
        <div className="message">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-100"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-2 mt-1 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message"
            rows="4"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value="Send"
            className="w-full py-2 text-sm font-semibold text-white bg-[#198f1f] rounded-lg hover:bg-[#1e6922] focus:ring-4 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </form>

      <div className="linksSection flex bg-red-50 w-full ">
        <div className="items github flex-1 bg-[#010400] hover:bg-gray-900">
          <a
            href="https://github.com/noobmaster6469"
            target="_blank"
            className="px-6 py-5 flex items-center justify-center gap-4 text-gray-100 font-semibold transition "
          >
            <img src={githubLogo} alt="Github Logo" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="items linkedin flex-1 bg-[#0A66C2] hover:bg-[#164778]">
          <a
            href="https://www.linkedin.com/in/bijesh-neupane-24665a237/"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-4 px-6 py-5 flex items-center justify-center text-gray-100 font-semibold transition"
          >
            <img src={linkedinLogo} alt="Github Logo" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="items X flex-1 bg-[#000000] hover:bg-gray-900">
          <a
            href="https://x.com/NMaster016"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-5 gap-4 flex items-center justify-center text-gray-100 font-semibold transition"
          >
            <img src={XLogo} alt="Github Logo" />
            <span>Twitter</span>
          </a>
        </div>
        <div className="items downloadCV flex-1 bg-gray-800 hover:bg-gray-700 w-full">
          <a
            href="/../../../Resume.pdf"
            download
            className="gap-4 px-6 py-5 flex items-center justify-center text-gray-100 font-semibold transition"
          >
            <img src={CVLogo} alt="Github Logo" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
