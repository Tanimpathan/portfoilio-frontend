import React from "react";
import Bubbles from "../components/common/Bubbles";
import MainComponents from "../components/MainComponents";

function MainPage(props) {
  return (
    <div className="portfolio-main-page">
      <div className="background-gradient">
        <Bubbles />
      </div>
      <div className="position-relative">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-10">
              <MainComponents />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
