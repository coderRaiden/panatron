import React from "react";
import "./Cart.scss";
import list_fullSleeve from "../../pics/list/list_full sleeve.jpg";
import list_coat from "../../pics/list/list_coat.jpg";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: list_fullSleeve,
      img2: list_fullSleeve,
      title: "Long sleeve Graphic T-shirt",
      desc: "Long sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },
    {
      id: 2,
      img: list_coat,
      title: "Coat",
      desc: "Coat",
      isNew: true,
      oldPrice: 19,
      priceL: 12,
    },
  ];

  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            {/* Substring only take first 100 letters */}
            <div className="price">1 x ${item.priceL}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
