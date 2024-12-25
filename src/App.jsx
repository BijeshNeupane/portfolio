import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Tools from "./components/Tools";

const App = () => {
  return (
    <>
      <Loader />
      <Navbar />
      <Home />
      <Tools />
    </>
  );
};

export default App;
