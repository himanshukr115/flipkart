import React from "react";
import "./Page.css";
import categories from "/assets/img/categories.jpg";
import offerZone from "/assets/img/offer.jpg";
import mobiles from "/assets/img/mobiles.jpg";
import fashion from "/assets/img/fashion.jpg";
import electronics from "/assets/img/electronics.jpg";
import appliances from "/assets/img/appliances.jpg";
import home from "/assets/img/home.png";
import personalCare from "/assets/img/personalCare.jpg";
import toysBabies from "/assets/img/toys.jpg";
import furnitures from "/assets/img/furniture.jpg";
import flights from "/assets/img/flights.jpg";
import sports from "/assets/img/sports.jpg";
import nutrition from "/assets/img/nutrition.jpg";
import insurance from "/assets/img/insurance.jpg";
import giftCards from "/assets/img/giftCards.jpg";
import Category from "./Category";

const categoriesData = [
  categories,
  offerZone,
  mobiles,
  fashion,
  electronics,
  appliances,
  home,
  personalCare,
  toysBabies,
  furnitures,
  flights,
  sports,
  nutrition,
  insurance,
  giftCards,
];

function SingleCategory() {
  return (
    <div className="_3sdu8W emupdz">
      {categoriesData.map((imgSrc, index) => (
        <Category key={index} imgSrc={imgSrc} />
      ))}
    </div>
  );
}

export default SingleCategory;
