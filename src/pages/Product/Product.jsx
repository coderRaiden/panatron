import React, { useState } from "react";
import "./Product.scss";
import product_shirt1 from "../../pics/product/product_shirt1.jpg";
import product_shirt2 from "../../pics/product/product_shirt2.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const images = [product_shirt1, product_shirt2];
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sit
          perferendis odit sed harum provident, nulla facere, libero molestiae
          dolorem sunt consequuntur assumenda quae quam doloribus eius eligendi
          quod. Ipsa.
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon />
            ADD TO COMPARE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
