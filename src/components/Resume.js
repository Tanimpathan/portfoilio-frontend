import React from "react";
import {
  RESUME_EXPERIENCE,
  RESUME_EDUCATION,
  CODING,
  KNOWLEDGE,
} from "../config/Constant";
import {
  FaFlag,
  FaPaintBrush,
  FaBuilding,
  FaSuitcase,
  FaCode,
  FaBookOpen,
  FaCheck,
} from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PrSlider from "./common/PrSlider";

function Resume({ selectedItem }) {
  return (
    <div>
      <div
        id="Resume"
        className={`resume-section animate__animated ${
          selectedItem !== "Resume"
            ? "hidden animate__fadeOutLeft"
            : "animate__fadeInLeft"
        } inner-card active-component element`}
      >
        <div className="resume-content">
          <div className="my-resume-info">
            <h4 className="title border-bottom">
              <span className="first-word">R</span>esume
            </h4>
            <div className="row">
              <div className="col-12 col-md-6 border-right">
                <div className="card-inner-padding">
                  <div className="border-bottom pb-2">
                    <div className="d-flex align-items-center">
                      <FaSuitcase className="inner-head-icon text-pr-green" />
                      <span className="inner-head-title ms-2">EXPERIENCE</span>
                    </div>
                  </div>
                  {RESUME_EXPERIENCE.map((item, index) => (
                    <div
                      className={`py-4 ${
                        RESUME_EXPERIENCE.length - 1 === index
                          ? ""
                          : "border-bottom"
                      }`}
                    >
                      <p className="mb-3">
                        <span
                          className={`duration-border p-1 ${
                            item.duration.includes("present")
                              ? "active-duration-border"
                              : ""
                          }`}
                        >
                          {item.duration}
                        </span>
                      </p>
                      <p className="box-title">{item.title}</p>
                      <p>{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-inner-padding">
                  <div className="border-bottom pb-2">
                    <div className="d-flex align-items-center">
                      <FaBuilding className="inner-head-icon text-pr-green" />
                      <span className="inner-head-title ms-2">EDUCATION</span>
                    </div>
                  </div>
                  {RESUME_EDUCATION.map((item, index) => (
                    <div
                      className={`py-4 ${
                        RESUME_EXPERIENCE.length - 1 === index
                          ? ""
                          : "border-bottom"
                      }`}
                    >
                      <p className="mb-3">
                        <span
                          className={`duration-border text-secondary-grey p-1 ${
                            item.duration.includes("present")
                              ? "active-duration-border"
                              : ""
                          }`}
                        >
                          {item.duration}
                        </span>
                      </p>
                      <p className="box-title">{item.title}</p>
                      <p>{item.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="my-resume-skills">
            <h4 className="title border-bottom">
              <span className="first-word">My</span> Skills
            </h4>
            <div className="row">
              <div className="col-12 col-md-6 border-right">
                <div className="card-inner-padding">
                  <div className="border-bottom">
                    <div className="border-bottom pb-2 d-flex align-items-center">
                      <FaCode className="inner-head-icon text-pr-green" />
                      <span className="inner-head-title ms-2">CODING</span>
                    </div>
                    <div className="d-flex flex-wrap justify-space-between card-inner-padding">
                      {CODING.map((item, index) => (
                        <div
                          className={`circular-progress mb-4 ${
                            index % 2 === 0 ? "margin-right-20" : ""
                          }`}
                        >
                          <CircularProgressbar
                            value={item.percent}
                            text={`${item.percent}%`}
                            styles={buildStyles({
                              pathColor: `#78cc6d`,
                              textColor: "black",
                              trailColor: "#d6d6d6",
                            })}
                          />
                          <p className="text-center mb-0 mt-2">
                            {item.subject}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-inner-padding">
                  <div className="">
                    <div className="border-bottom pb-2 d-flex align-items-center">
                      <FaBookOpen className="inner-head-icon text-pr-green" />
                      <span className="inner-head-title ms-2">KNOWLEDGE</span>
                    </div>
                    <div className="card-inner-padding px-0">
                      {KNOWLEDGE.map((item, index) => (
                        <div className="pb-3">
                          <FaCheck className="text-pr-green me-3" />
                          <span
                            className="text-primary-grey inner-section-normal-text"
                            style={{ fontWeight: "bold" }}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-area">
            <h4 className="title border-bottom">
              <span className="first-word">Clients</span> Experience
            </h4>
            <div className="row">
              <div className="col-12">
                <PrSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
