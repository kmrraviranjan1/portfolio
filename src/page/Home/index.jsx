import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import Skills from '../../components/Skills'
import Project from '../../components/Project'
import Contact from '../../components/Contact'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
};

export default Home;
