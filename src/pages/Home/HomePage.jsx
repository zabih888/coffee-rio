import React from "react";
import AlternativeHome from "./Alternative";
import FaqHome from "./FaqHome";
import SplideHome from "./Splide";
import homeImg from "../../assets/images/homeImg.jpg";

const Home = () => {
  console.log(window.location.pathname)
  return (
    <div>
      <SplideHome />
      <AlternativeHome />
      <div style={{ width: "100%", height: "100%" }}>
        <img
          src={homeImg}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <FaqHome />

    </div>
  );
};

export default Home;
