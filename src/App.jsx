import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";
import NotFound from "./Components/NotFound";
import Images from "./Components/Images";
import Videos from "./Components/Videos";
import About from "./Components/About";

const App = () => {
  return (
    <Router>
      <div className="body-font bg-[#F4C2C2] min-h-screen max-w-screen relative bg-cover bg-center bg-fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery/images" element={<Images />} />
          <Route path="/gallery/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

