import React from "react";
import Header from "../components/Header";
import SingleCategory from "../components/SingleCategory";
import Timer from "../components/Timer";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Header />
      <SingleCategory />
      <Hero />
      <Timer initialSeconds={900} />
    </>
  );
}

export default HomePage;
