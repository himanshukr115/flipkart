import React from "react";
import "../components/Page.css";
import ProductPageHeader from "../components/ProductPageHeader";
import DetailedProductCard from "../components/DetailedProductCard";
function ProductPage() {
  return (
    <>
      <ProductPageHeader />
      <DetailedProductCard />
    </>
  );
}

export default ProductPage;
