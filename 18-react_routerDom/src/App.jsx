import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contect";
import Navbar from "./components/Navbar";
import Notfound from "./pages/notfound";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </div>
  );
};

export default App;
