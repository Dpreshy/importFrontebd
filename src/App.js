import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Header/Services";
import About from "./components/Header/About";
// import Footer from "./components/Header/Footer"
import Contact from "./components/Header/Contact";
// import Hero from "./components/Home/Hero"
import Footer from "./components/Footer/Footer";
import FormPage from "./components/Header/FormPage";
import SignUp from "./components/Header/Contact"

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<FormPage />} />
          <Route path="/register" element={<SignUp />} />



        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
