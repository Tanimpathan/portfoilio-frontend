import React from "react";
import AboutMe from "./AboutMe";
import Blogs from "./common/Blogs";
import MenuBar from "./MenuBar";
import { NavLink } from "react-router-dom";

function MainComponents(props) {
  return (
    <div className="components-container">
      <MenuBar />
      <NavLink to="#About">about</NavLink>
      <NavLink to="#Resume">Resume</NavLink>
      <AboutMe />
      <Blogs />
    </div>
  );
}

export default MainComponents;
