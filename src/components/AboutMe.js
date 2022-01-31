import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { MY_SERVICE_INFO } from "../config/Constant";

function AboutMe({ selectedItem }) {
  return (
    <div
      id="About"
      className={`about-me-section animate__animated ${
        selectedItem !== "About"
          ? "hidden animate__fadeOutLeft"
          : "animate__fadeInLeft"
      } inner-card active-component element`}
    >
      <div className="about-me-content">
        <div className="my-info pb-5">
          <h4 className="title border-bottom">
            <span className="first-word">About</span> me
          </h4>
          <div className="row">
            <div className="col-12 col-md-6 border-right">
              <div className="card-inner-padding">
                <p className="text-primary-grey inner-section-normal-text">
                  I am Tanim Pathan, web designer from USA, California. I have
                  rich experience in web site design and building and
                  customization, also I am good at wordpress. I love to talk
                  with you about our unique.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-inner-padding">
                <div className="d-flex justify-content-between personal-details pt-0">
                  <span className="bg-pr-green text-white">Age.....</span>
                  <span>24</span>
                </div>
                <div className="d-flex justify-content-between personal-details">
                  <span className="bg-pr-green text-white">Residence.....</span>
                  <span>Bangladesh</span>
                </div>
                <div className="d-flex justify-content-between personal-details">
                  <span className="bg-pr-green text-white">Freelance.....</span>
                  <span>Available</span>
                </div>
                <div className="d-flex justify-content-between personal-details border-0">
                  <span className="bg-pr-green text-white">Address.....</span>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-services pb-5">
          <h4 className="title border-bottom">
            <span className="first-word">My</span> Services
          </h4>
          <div className="row">
            {MY_SERVICE_INFO.map((data, index) => (
              <div
                className={`col-12 col-md-6 ${
                  index % 2 === 0 ? "border-right" : ""
                }`}
                key={index}
              >
                <div className="text-center inner-section-wrapper">
                  <div className="">
                    <span className="icon">
                      <BsCodeSlash style={{ fontSize: "28px" }} />
                    </span>
                  </div>
                  <p className="my-2 inner-section-title-text text-pr-black">
                    {data.skillName}
                  </p>
                  <p className="m-0 inner-section-normal-text">
                    {data.skillDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="clients-experience">
          <h4 className="title border-bottom">
            <span className="first-word">Clients</span> Experience
          </h4>
          <div className="row">
            <div className="col-12">
              <div className="card-inner-padding">
                <p className="clients-words inner-section-normal-text">
                  <span>"</span>Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                  <span>"</span>
                </p>

                <div className="d-flex justify-content-center">
                  <div className="client-photo"></div>
                </div>
                <div className="text-center mt-2 mb-4">
                  <p className="mb-2 client-name">Ryan Adlard</p>
                  <p className="client-job">Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
