import React from "react";
import Bubbles from "../components/common/Bubbles";
import MainComponents from "../components/MainComponents";

function MainPage(props) {
  return (
    <div className="portfolio-main-page">
      <div className="background-gradient">
        <Bubbles />
      </div>
      <div className="position-absolute w-100 h-100">
        <MainComponents />
      </div>
    </div>
  );
}

export default MainPage;
