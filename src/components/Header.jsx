import React from "react";
import "./Page.css";
 import logo from "../../public/assets/img/logo.png";
 import cart from "../../public/assets/img/cart.svg";
 import bars from "../../public/assets/img/bars.svg";

function Header() {
  return (
    <div className="_2dxSCm">
      <div className="_3CzzrP" style={{ background: "#2874f0" }}>
        <div className="_38U37R">
          <div>
            <div className="_1FWdmb" style={{ backgroundColor: "#2874f0" }}>
              <a className="_3NH1qf">
                <img alt="menu" src={bars} height="20px" width="20px" />
              </a>
              <a className="Z4_K_h" href="" style={{ width: "85px" }}>
                <img width="85px" src={logo} />
              </a>

              <div className="_2WBW6z"></div>
              <a className="_3NH1qf">
                <img alt="menu" src={cart} height="20px" width="20px" />
                <span className="_2tVMo0">1</span>
              </a>
            </div>
            <div>
              <div className="_3QNhdh" id="guidSearch">
                <div className="ORogdv">
                  <div className="_1k9EoO">
                    <div className="_2d36Hu">
                      <a href="" className="search-div">
                        <input
                          type="text"
                          className="_1eMB9R"
                          placeholder="Search for Products, Brands and More"
                        />
                      </a>
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

export default Header;
