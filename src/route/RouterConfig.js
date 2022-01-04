import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Blogs from "../components/common/Blogs";

function RouterConfig(props) {
  return (
    <div>
      <Routes>
        {/* <Route path="/About" element={<AboutMe />} />
        <Route path="/Resume" element={<Blogs />} /> */}
      </Routes>
    </div>
  );
}

export default RouterConfig;
