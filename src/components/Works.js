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
import { Card } from "react-bootstrap";

function Works({ selectedItem }) {
  return (
    <div>
      <div
        id="Works"
        className={`works-section animate__animated ${
          selectedItem !== "Works"
            ? "hidden animate__fadeOutLeft"
            : "animate__fadeInLeft"
        } inner-card active-component element`}
      >
        <div className="works-content">
          <div className="my-works-info">
            <h4 className="title border-bottom">
              <span className="first-word">My</span> Works
            </h4>
            <div className="row">
              <div className="col-12 col-md-6 p-0">
                <div className="card-inner-padding">
                  <Card className="work-card">
                    <Card.Img variant="top" src="../assets/images/logo.png" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button className="grey-button">Visit Here</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-12 col-md-6 p-0">
                <div className="card-inner-padding">
                  <Card className="work-card">
                    <Card.Img variant="top" src="../assets/images/logo.png" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button className="grey-button">Visit Here</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="col-12 col-md-6 p-0">
                <div className="card-inner-padding">
                  <Card className="work-card">
                    <Card.Img variant="top" src="../assets/images/logo.png" />
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <button className="grey-button ">Visit Here</button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
