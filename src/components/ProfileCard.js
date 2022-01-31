import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaFacebookF,
  FaInstagram,
  FaStackOverflow,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

function ProfileCard(props) {
  return (
    <div className="profile-card w-100 h-100">
      <div
        className="profile-photo"
        style={{ backgroundImage: `url("/assets/images/man.jpg")` }}
      ></div>
      <div className="profile-content mt-4">
        <p className="text-center profile-name">Tanim pathan</p>

        <div className="text-center skills">
          <Typewriter
            options={{
              strings: ["Freelancer", "Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="social-icons text-center mt-3">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaStackOverflow />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="cv-section w-100">
        <div className="cv-content w-100">
          <p
            className="w-50 text-center"
            style={{ borderRight: "1px solid #e9e8e8" }}
          >
            Download Cv
          </p>
          <p className="w-50 text-center">Contact me</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
