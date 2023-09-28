import React from "react";
import "./FeaturedProducts.scss";
import fet_coat from "../../pics/feature/fet_coat.jpg";
import fet_hat from "../../pics/feature/fet_hat.jpg";
import fet_skurt from "../../pics/feature/fet_skurt.jpg";
import fet_tshirt from "../../pics/feature/fet_tshirt.jpg";
import fet_coat2 from "../../pics/feature/fet_coat2.jpg";
import fet_hat2 from "../../pics/feature/fet_hat2.jpg";
import fet_skurt2 from "../../pics/feature/fet_skurt2.jpg";
import fet_tshirt2 from "../../pics/feature/fet_tshirt2.jpg";

import Card from "../Card/Card";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: fet_coat,
      img2: fet_coat2,
      title: "coat" L,
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 2,
      img: fet_hat,
      img2: fet_hat2,
      title: "hat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 3,
      img: fet_skurt,
      img2: fet_skurt2,
      title: "skurt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },

    {
      id: 4,
      img: fet_tshirt,
      img2: fet_tshirt2,
      title: "tshirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempore
          reprehenderit inventore officia non temporibus voluptatum ratione
          repudiandae ea! Sequi dolor magnam ipsam quidem dicta? Repellendus,
          nesciunt? Laborum, necessitatibus reiciendis.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
