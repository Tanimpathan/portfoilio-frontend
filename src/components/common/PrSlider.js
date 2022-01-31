import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

class PrSlider extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <div className="card-inner-padding">
              <p className="clients-words inner-section-normal-text">
                <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span>"</span>
              </p>

              <div className="d-flex justify-content-center">
                <div className="client-pic-avatar"></div>
              </div>
              <div className="text-center mt-2 mb-4">
                <p className="mb-2 client-name">Ryan Adlard</p>
                <p className="client-job">Web Designer</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="card-inner-padding">
              <p className="clients-words inner-section-normal-text">
                <span>"</span>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Lorem ipsum dolor sit amet.
                <span>"</span>
              </p>

              <div className="d-flex justify-content-center">
                <div className="client-pic-avatar"></div>
              </div>
              <div className="text-center mt-2 mb-4">
                <p className="mb-2 client-name">Ryan Cook</p>
                <p className="client-job">Web Designer</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PrSlider;
