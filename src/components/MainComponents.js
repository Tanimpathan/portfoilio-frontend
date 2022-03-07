import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Blogs from "./Blogs";
import MenuBar from "./MenuBar";
import ProfileCard from "./ProfileCard";
import "animate.css";
import Resume from "./Resume";
import Contact from "./Contact";
import Works from "./Works";

function MainComponents(props) {
  const [selectedNav, setSelectedNav] = useState("About");

  function handlePageShow(value) {
    setSelectedNav(value);
  }

  return (
    <div className="components-container">
      <div className="row h-100 align-items-start align-items-md-center">
        <div className="col-12 col-md-8 col-lg-5 col-xl-5 p-0 mx-md-auto">
          <div className="component-tablet-mobile-view sticky-menubar">
            <MenuBar
              handlePageShow={handlePageShow}
              selectedItem={selectedNav}
            />
          </div>
          <div className="d-flex menu-profile-card mb-3">
            <div className="component-desktop-view">
              <MenuBar
                handlePageShow={handlePageShow}
                selectedItem={selectedNav}
              />
            </div>
            <div className="w-100">
              <ProfileCard />
              <div className="component-tablet-mobile-view">
                <AboutMe selectedItem={selectedNav} />
                <Blogs selectedItem={selectedNav} />
                <Resume selectedItem={selectedNav} />
                <Contact selectedItem={selectedNav} />
                <Works selectedItem={selectedNav} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-7 p-0 component-desktop-view">
          <AboutMe selectedItem={selectedNav} />
          <Blogs selectedItem={selectedNav} />
          <Resume selectedItem={selectedNav} />
          <Contact selectedItem={selectedNav} />
          <Works selectedItem={selectedNav} />
        </div>
      </div>
    </div>
  );
}

export default MainComponents;
