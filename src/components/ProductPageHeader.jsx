import React from "react";
import "./Page.css";

function ProductPageHeader() {
  return (
    <div
      className="container-fluid py-2 header-container"
      style={{ backgroundColor: "#2874f0" }}
    >
      <div className="row header">
        <div className="col-1">
          <div className="menu-icon" id="back_btn">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                stroke="#FFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
        </div>
        <div className="col-2">
          <div className="menu-logo">
            <a className="Z4_K_h" href="" style={{ width: "85px" }}>
              <img width="85px" src="/assets/img/logo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="col-6"></div>
        <div className="col-1">
          <div className="menu-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#FFF" fillRule="evenodd">
                <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203" />
                <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467" />
              </g>
            </svg>
          </div>
        </div>
        <div className="col-1">
          <div className="menu-icon">
            <img
              alt="menu"
              src="/assets/img/cart.svg"
              height="20px"
              width="20px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageHeader;
