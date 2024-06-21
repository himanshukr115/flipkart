import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Page.css";
import products from "../products.json";
import fAssured from "/assets/img/fAssured.png"; // Ensure the path is correct

function DetailedProductCard() {
  const [timer, setTimer] = useState(150);

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

  const { id } = useParams();
  const parsedProductId = parseInt(id);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parsedProductId);
  console.log("Product ID:", parsedProductId);
  console.log("Product:", product);
  console.log("Image Source:", product?.imgSrc);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { productTitle, offerPercentage, price, offerPrice, imgSrc, imgSrc1, imgSrc2, imgSrc3, imgSrc4, stock } = product;

  const buyNow = () => {
    const selectedVariant = {
      id: product.id,
      productTitle: product.productTitle,
      price: product.price,
      offerPrice: product.offerPrice,
      offerPercentage: product.offerPercentage,
      imgSrc: product.imgSrc,
    };

    localStorage.setItem("selected_variant", JSON.stringify(selectedVariant));
    navigate("/checkout");
  };

  return (
    <>
      <div className="_1fhgRH">
        <div className="container p-1 card">
          <div className="container-fluid px-0 product-slider">
            <div className="love-icon"></div>
            <div className="share-icon"></div>
            <div id="sliderX" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-bs-target="#sliderX" data-bs-slide-to="0" className=""></li>
                <li data-bs-target="#sliderX" data-bs-slide-to="1" className=""></li>
                <li data-bs-target="#sliderX" data-bs-slide-to="2" className=""></li>
                <li data-bs-target="#sliderX" data-bs-slide-to="3" className=""></li>
                <li data-bs-target="#sliderX" data-bs-slide-to="4" className="active"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img className="d-block img-fluid m-auto" style={{ height: "400px" }} src={imgSrc} alt="Product Image 1"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid m-auto" style={{ height: "400px" }} src={imgSrc1} alt="Product Image 2"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid m-auto" style={{ height: "400px" }} src={imgSrc2} alt="Product Image 3"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid m-auto" style={{ height: "400px" }} src={imgSrc3} alt="Product Image 4"/>
                </div>
                <div className="carousel-item active">
                  <img className="d-block img-fluid m-auto" style={{ height: "400px" }} src={imgSrc4} alt="Product Image 5"/>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <b>Only <span className="text-danger"><span className="solds" style={{ fontWeight: "bold" }}>{stock}</span></span> Left in Stock</b>
          </div>
        </div>
      </div>

      <div className="product-title" style={{ fontSize: "14px", color: "#007185", fontWeight: "600" }}>
        {productTitle}
      </div>
      <img className="my-2" src={fAssured} alt="plus-fassured" style={{ width: "100px" }} />
      <div className="product-price d-flex my-2">
        <span className="discount">{offerPercentage} off</span>
        <span className="mrp">&#8377;{offerPrice}</span>
        <span className="price">&#8377;{price}</span>
      </div>
      <button className="button1 button2">Kitchen Appliance Sale</button>

      <div className="container-fluid p-3 offerend-container card">
        <h4 className="m-0">
          {" "}
          Offer ends in{" "}
          <span className="offer-timer" id="offerend-time">
            {" "}
            {formatTime(timer)}
          </span>
        </h4>
      </div>

      <div className="_24B_AU _1AQnZC"></div>

      <div className="container-fluid p-3 mt-1 card">
        <div className="aMaAEs">
          <div className="_3Zuayz">
            <div className="_3_L3jD">
              <div className="gUuXy- _16VRIQ _1eJXd3">
                <span
                  id="productRating_LSTETHFZZUWAC8X2PGQZ7T8VQ_ETHFZZUWAC8X2PGQ_"
                  className="_1lRcqv"
                ></span>
                <span style={{ color: "black" }} className="_2_R_DZ">
                  <span className="offers" style={{ fontWeight: "bold" }}>
                    <b>6500+ Sold In Last 7 Days</b>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-2 py-3 d-flex feature-container product-extra card">
        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
          <img
            className="featured-img mb-3"
            src="/assets/img/replacement.png"
            alt="replacement"
          />
          <span className="feature-title"> 7 days Replacement </span>
        </div>
        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
          <img
            className="featured-img mb-3"
            src="/assets/img/non-cod.png"
            alt="non-cod"
          />
          <span className="feature-title"> No Cash On Delivery </span>
        </div>
        <div className="col-4 featured-item d-flex align-items-center flex-column bd-highlight px-1">
          <img
            className="featured-img mb-3 mt-1"
            src="/assets/img/plue-fassured.png"
            alt="plue-fassured"
          />
          <span className="feature-title"> Plus (F-Assured) </span>
        </div>
      </div>

      <div className="container-fluid p-3 offerend-container card">
        <div className="aMaAEs">
          <div className="_3Zuayz">
            <div className="_3_L3jD">
              <div className="gUuXy- _16VRIQ _1eJXd3">
                <span
                  id="productRating_LSTETHFZZUWAC8X2PGQZ7T8VQ_ETHFZZUWAC8X2PGQ_"
                  className="_1lRcqv"
                >
                  <img
                    src="/assets/img/98798.webp"
                    height="35"
                    alt="98798"
                  />
                </span>
                &nbsp;&nbsp;
                <span style={{ color: "black" }} className="_2_R_DZ">
                  <span>1 Year Manufacturer Warranty</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container flex">
        <button
          className="buynow-button buynow-button-white product-page-buy"
          onClick={buyNow}
        >
          Add to Cart
        </button>
        <button className="buynow-button product-page-buy" onClick={buyNow}>
          Buy Now
        </button>
      </div>
    </>
  );
}

export default DetailedProductCard;
