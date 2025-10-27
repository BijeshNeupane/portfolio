import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://bijeshneu.app.n8n.cloud/webhook/dd3b2486-6cf2-4cfd-989c-27ce565bb0dc/chat",
      initialMessages: [
        "Hi there! 👋",
        "I am Bijesh's bot. How can I assist you today?",
        "You can ask me about Bijesh's projects, skills, or experience.",
      ],
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
