import React from "react";
import { MY_LOCATION, MY_BUSINESS_INFO } from "../config/Constant";

function Contact({ selectedItem }) {
  return (
    <div>
      <div
        id="Contact"
        className={`contact-section animate__animated ${
          selectedItem !== "Contact"
            ? "hidden animate__fadeOutLeft"
            : "animate__fadeInLeft"
        } inner-card active-component element`}
      >
        <div className="contact-content">
          <div className="my-resume-info">
            <h4 className="title border-bottom">
              <span className="first-word">Get</span> in Touch
            </h4>
            <div className="row">
              <div className="col-12">
                <div className="card-inner-padding">
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7307.02308584488!2d90.45376537655922!3d23.69341986297765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b767a022cd4b%3A0xaf33907e219d127!2sRayerbag%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1643627289647!5m2!1sen!2sbd"
                      className="map-location"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-inner-padding">
                  {MY_LOCATION.map((item, index) => (
                    <div className="d-flex justify-content-between align-items-center  personal-details border-bottom py-4">
                      <span className="bg-pr-green text-white p-1">
                        {item.propertyName}.....
                      </span>
                      <span className="text-primary-grey inner-section-normal-text font-weight-bold">
                        {item.propertyValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-inner-padding">
                  {MY_BUSINESS_INFO.map((item, index) => (
                    <div className="d-flex justify-content-between align-items-center  personal-details border-bottom py-4">
                      <span className="bg-pr-green text-white p-1">
                        {item.propertyName}.....
                      </span>
                      <span className="text-primary-grey inner-section-normal-text font-weight-bold">
                        {item.propertyValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="clients-contact-fields">
            <h4 className="title border-bottom">
              <span className="first-word">Contact </span>Form
            </h4>
            <div className="row">
              <div className="col-12">
                <div className="card-inner-padding">
                  <div className="d-flex justify-content-between pb-4">
                    <input
                      type="text"
                      name="clientName"
                      placeholder="Full Name"
                      className="half-full-input form-control"
                    />
                    <input
                      type="email"
                      name="clientEmail"
                      placeholder="Email"
                      className="half-full-input form-control"
                    />
                  </div>
                  <textarea
                    className="form-control mb-4"
                    placeholder="Enter your message"
                    style={{ height: "100px" }}
                  ></textarea>
                  <button className="grey-button mb-4">Send message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
