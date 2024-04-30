import axios from "axios";
import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = (props) => {
  const { product } = props;
  const images = product?.images;
  const qty = 1;

  const addToCart = async (productId, qty = 1) => {
    try {
      const params = new URLSearchParams();
      params.append("product_id", productId);
      params.append("quantity", qty);

      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("__auth="))
        .split("=")[1];

      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: `Bearer ${authToken}`,
        },
      };
      await axios.post("http://localhost/api/v1/carts", params, config);

      console.log("ATC success");
    } catch (error) {
      console.log("ATC failed", error);
    }
  };

  return (
    <div className="product-display">
      <div className="product-dis-left">
        <div className="product-dis-img-list">
          <img
            src={
              images && images.length > 1
                ? require(`../assets/${images[1]}`)
                : images && images.length > 0
                ? require(`../assets/${images[0]}`)
                : ""
            }
            alt=""
          />
          <img
            src={
              images && images.length > 1
                ? require(`../assets/${images[2]}`)
                : images && images.length > 0
                ? require(`../assets/${images[0]}`)
                : ""
            }
            alt=""
          />
          <img
            src={
              images && images.length > 1
                ? require(`../assets/${images[3]}`)
                : images && images.length > 0
                ? require(`../assets/${images[0]}`)
                : ""
            }
            alt=""
          />
          <img
            src={
              images && images.length > 1
                ? require(`../assets/${images[4]}`)
                : images && images.length > 0
                ? require(`../assets/${images[0]}`)
                : ""
            }
            alt=""
          />
        </div>
        <div className="product-dis-img">
          <img
            src={images ? require(`../assets/${images[0]}`) : ""}
            alt=""
            className="product-dis-img-main"
          />
        </div>
      </div>
      <div className="product-dis-right">
        <h1>{product?.name}</h1>
        <div className="product-dis-right--prices">
          <div className="product-dis-right--discounted-price">
            ${product?.discounted_price}
          </div>
          <div className="product-dis-right--price">${product?.price}</div>
        </div>
        <div className="product-dis-right--description">
          {product?.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </div>
        <button onClick={() => addToCart(product?.id, qty)}>Add to cart</button>
        <p className="product-dis-right--tags">
          <span>Tags: </span>
          {product.tags && product.tags[0]}, {product.tags && product.tags[1]},{" "}
          {product.tags && product.tags[2]}, {product.tags && product.tags[3]},{" "}
          {product.tags && product.tags[4]}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
