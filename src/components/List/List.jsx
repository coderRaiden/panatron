import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import list_hat from "../../pics/list/list_hat.jpg";
import list_skirt from "../../pics/list/list_skirt.jpg";
import list_fullSleeve from "../../pics/list/list_full sleeve.jpg";
import list_coat from "../../pics/list/list_coat.jpg";

const List = () => {
  const data = [
    {
      id: 1,
      img: list_fullSleeve,
      img2: list_fullSleeve,
      title: "Long sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },
    {
      id: 2,
      img: list_coat,
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },

    {
      id: 3,
      img: list_skirt,
      title: "Skirt",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },
    {
      id: 4,
      img: list_hat,
      title: "Hat",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },
  ];

  return (
    <div className="list">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
