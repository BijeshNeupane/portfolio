import { useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";
import Slider from "./components/Slider";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Function to be called when the GSAP animation completes
  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* {isLoading && <Loader onAnimationComplete={handleLoaderComplete} />} */}
      <Navbar />
      <Home />
      <Tools />
      <Slider />
      <Contact />
    </>
  );
};

export default App;
