import React from "react";
import products from "../products.json";
import "./Page.css";

import { Link } from "react-router-dom";

function ProductTable() {
  const productRows = [];

  for (let i = 0; i < products.length; i += 2) {
    productRows.push(
      <tr key={i}>
        <td className="Cs7ycL TcKeCe">
          <Link to={`/products/${products[i].id}`}>
            <div className="_2enssu">
              <div style={{ position: "relative", minHeight: "110px", minWidth: "110px" }}>
                <div className="_3LXIRu">
                  <div className="_2GaeWJ" style={{ width: "110px", height: "110px" }}>
                    <img
                      className="_2puWtW _3a3qyb"
                      alt="Product"
                      src={products[i].imgSrc}
                    />
                  </div>
                </div>
              </div>
              <div className="_24B_AU _3SexMn">
              {products[i].productTitle}
              </div>
              <div className="_24B_AU _1AQnZC">
                {products[i].offerPercentage} Off
                <span className="mrp"><s>{products[i].originalPrice}</s></span>
                <span className="selling_price">₹{products[i].price}</span>
              </div>
              <div className="_24B_AU _1AQnZC">
                <b className="selling-price">₹{products[i].price}</b>
                <img
                  src="/assets/img/fAssured.png"
                  width="77px"
                  alt="Assured"
                  className="assured-icon"
                />
              </div>
              <div className="ofr_text code">BUY 1 GET 1 FREE</div>
              <div className="_3Nxu4r delivery-txt">Free Delivery in Two Days</div>
            </div>
          </Link>
        </td>
        {i + 1 < products.length && (
          <td className="Cs7ycL TcKeCe">
            <Link to={`/products/${products[i + 1].id}`}>
              <div className="_2enssu">
                <div style={{ position: "relative", minHeight: "110px", minWidth: "110px" }}>
                  <div className="_3LXIRu">
                    <div className="_2GaeWJ" style={{ width: "110px", height: "110px" }}>
                      <img
                        className="_2puWtW _3a3qyb"
                        alt="Product"
                        src={products[i + 1].imgSrc}
                      />
                    </div>
                  </div>
                </div>
                <div className="_24B_AU _3SexMn">
                {products[i + 1].productTitle}
                </div>
                <div className="_24B_AU _1AQnZC">
                  {products[i + 1].offerPercentage} Off
                  <span className="mrp"><s>{products[i + 1].originalPrice}</s></span>
                  <span className="selling_price">₹{products[i + 1].price}</span>
                </div>
                <div className="_24B_AU _1AQnZC">
                  <b className="selling-price">₹{products[i + 1].price}</b>
                  <img
                    src="/assets/img/fAssured.png"
                    width="77px"
                    alt="Assured"
                    className="assured-icon"
                  />
                </div>
                <div className="ofr_text code">BUY 1 GET 1 FREE</div>
                <div className="_3Nxu4r delivery-txt">Free Delivery in Two Days</div>
              </div>
            </Link>
          </td>
        )}
      </tr>
    );
  }

  return (
    <table className="-LqSIK _3xlpeR">
      <tbody id="home_page_product">
        {productRows}
      </tbody>
    </table>
  );
}

export default ProductTable;
