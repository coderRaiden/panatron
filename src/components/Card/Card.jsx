import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>New Season</span>}
          <img src={item.img} alt="img" className="mainImg" />
          <img src={item.img2} alt="img2" className="secondImg" />
        </div>
        <div className="pAdjust">
          <h2>{item.title} </h2>
          <div className="prices">
            <h3>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
