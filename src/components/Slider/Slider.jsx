import React, { useState } from "react";
import "./Slider.scss";
import Slider1 from "../../pics/Slider-1.jpg";
import Slider2 from "../../pics/Slider-2.jpg";
import Slider3 from "../../pics/Slider-3.jpg";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const data = [Slider1, Slider2, Slider3];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    //Before 0 side It shows slide no.2
    setCurrentSlide(
      currentSlide === 0 ? 2 : (currentSlide) => currentSlide - 1
    );
  };

  const nextSlide = () => {
    //After 2 side It shows slide no.0
    setCurrentSlide(
      currentSlide === 2 ? 0 : (currentSlide) => currentSlide + 1
    );
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        //We are using inline styling in JS.
        // Logic : if current slide value is 0.then tralateX is 0 and it shows first img.
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
