import React from "react";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";
import FeaturedProducts from "../../components/FeauturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
      {/* We are using "type" prop which help to create same feature */}
    </div>
  );
};

export default Home;
