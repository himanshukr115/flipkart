import React from "react";
import "./Page.css";

function Hero() {
  return (
    <div className="_3lqN6b">
      <div className="WhKF32">
        <div className="IF3BzC">
          <div className="_1fhgRH">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 p-0">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel carousel-dark slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    </ol>
                    <div id="carouselExample" className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block w-100"
                          src="/assets/img/FK_banner2.webp"
                          alt="First slide"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block w-100"
                          src="/assets/img/FK_banner1.jpg"
                          alt="Second slide"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
