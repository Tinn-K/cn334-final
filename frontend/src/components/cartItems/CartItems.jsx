import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cross_icon from "../assets/cross_icon.png";
import "./CartItems.css";

const CartItems = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try {
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
        const response = await axios.get(
          "http://localhost/api/v1/carts",
          config
        );

        setCart(response.data.carts);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getCarts();
  }, []);

  useEffect(() => {
    const productIds = cart.map((item) => item.product_id);

    const fetchProductDetails = async () => {
      try {
        const productDetails = await Promise.all(
          productIds.map(async (productId) => {
            const productResponse = await axios.get(
              `http://localhost/api/v1/products/${productId}`
            );
            return productResponse.data;
          })
        );

        setProducts(productDetails);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProductDetails();
  }, [cart]);

  const removeFromCart = async (productId) => {
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("__auth="))
        .split("=")[1];

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      await axios.delete(`http://localhost/api/v1/carts/${productId}`, config);

      setCart(cart.filter((item) => item.product_id !== productId));
    } catch (error) {
      console.error("Error removing product from cart: ", error);
    }
  };

  const checkout = async () => {
    if (cart.length === 0) return;
    try {
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("__auth="))
        .split("=")[1];

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };

      await axios.delete("http://localhost/api/v1/carts", config);

      setCart([]);
      console.log("Thank you");
    } catch (error) {
      console.error("Error during checkout: ", error);
    }
  };

  const getTotalAmount = () => {
    let total = 0;
    products.forEach((product) => {
      const quantityObj = cart.find(
        (cartItem) => cartItem.product_id === product.product_id
      );
      const quantity = quantityObj ? quantityObj.quantity : 1;
      total += product.discounted_price * quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((product, i) => {
        const quantityObj = cart.find(
          (cartItem) => cartItem.product_id === product.id
        );
        const quantity = quantityObj ? quantityObj.quantity : 1;
        return (
          <div key={i}>
            <div className="cart-items-cell">
              <img
                src={require(`../assets/${product.images[0]}`)}
                alt=""
                className="cart-items-product-img"
              />
              <p>{product.name}</p>
              <p>${product.discounted_price}</p>
              <button className="cart-items-qty">{quantity}</button>
              <p>${product.discounted_price * quantity}</p>
              <img
                className="cart-items-remove-icon"
                src={cross_icon}
                alt=""
                onClick={() => removeFromCart(product.id)}
              />
            </div>
            <hr />
          </div>
        );
      })}
      <div className="cart-items-bottom">
        <div className="cart-items-total">
          <h1>Total</h1>
          <div>
            <div className="cart-items-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          {cart.length > 0 && (
            <Link
              to="/thank-you"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button onClick={() => checkout()}>Checkout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
