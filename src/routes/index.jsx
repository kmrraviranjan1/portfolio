import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactPage from "../page/ContactPage";
import HomePage from "../page/HomePage";
import ProjectPage from "../page/ProjectPage";
import ResumePage from "../page/ResumePage";
import SkillsPage from "../page/SkillsPage";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="*" element={<p>No such page</p>} />
    </Routes>
  );
};

export default Routing;
