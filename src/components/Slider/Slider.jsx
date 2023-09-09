import React from "react";
import "./Slider.scss";
import Slider1 from "../../pics/Slider-1.jpg";
import Slider2 from "../../pics/Slider-2.jpg";
import Slider3 from "../../pics/Slider-3.jpg";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  const data = [Slider1, Slider2, Slider3];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <EastOutlinedIcon />
        </div>
        <div className="icon">
          <WestOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
