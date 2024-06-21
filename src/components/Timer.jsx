import React, { useState, useEffect } from "react";
import "./Page.css";
import ProductCard from "./ProductCard";

function Timer({ initialSeconds }) {
  const [timer, setTimer] = useState(initialSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <div className="_1QM2o6 _1isCBQ" style={{ margin: "0 0 16px" }}>
        <div className="_2rW-uM _3sgvr0 _1cVt6K _1CXxjX">
          <div className="_3LrtWH">
            <div className="_3QuZpZ dod-div">
              <div className="dod-label"> Deals of the Day </div>
              <div className="_1oETR8">
                <div className="_1dZamR _2mmD4F">
                  <img className="_29lYyb" src="/assets/img/clock.svg" />
                  <div id="test">{formatTime(timer)} </div>
                </div>
              </div>
            </div>
            <div className="_3Nxu4r">
              <button className="_1s54Jm btn-sale-is-live">SALE IS LIVE</button>
            </div>
          </div>
        </div>
        <ProductCard />
      </div>
    </div>
  );
}

export default Timer;
