import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import cart_icon from "../assets/cart_icon.png";
import user_icon from "../assets/user_icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [cartAmount, setCartAmount] = useState("");
  const { menu, setMenu } = useContext(ShopContext);

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

        setCartAmount(response.data.carts.length);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getCarts();
  }, []);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p
          onClick={() => {
            setMenu("");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            OUTDOOR & CAMPING
          </Link>
        </p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={(e) => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "all" ? "active-menu" : ""}
        >
          <Link to="/all" style={{ textDecoration: "none", color: "inherit" }}>
            All
          </Link>
        </li>
        <li
          onClick={(e) => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "grill & dine" ? "active-menu" : ""}
        >
          <Link
            to="/grill-dine"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Grill & Dine
          </Link>
        </li>
        <li
          onClick={(e) => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "lights & lanterns" ? "active-menu" : ""}
        >
          <Link
            to="/lights-lanterns"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Lights & Lanterns
          </Link>
        </li>
        <li
          onClick={(e) => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "tools" ? "active-menu" : ""}
        >
          <Link
            to="/tools"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Tools
          </Link>
        </li>
        <li
          onClick={(e) => {
            setMenu(e.target.textContent.toLowerCase());
          }}
          className={menu === "store & carry" ? "active-menu" : ""}
        >
          <Link
            to="/store-carry"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Store & Carry
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <img
            onClick={() => {
              setMenu("");
            }}
            src={user_icon}
            alt="Login"
            className="nav-login-icon"
          />
        </Link>
        <Link to="/cart">
          <img
            onClick={() => {
              setMenu("");
            }}
            src={cart_icon}
            alt="Cart"
            className="nav-cart-icon"
          />
        </Link>
        {/* <div className="nav-cart-count">{cartAmount}</div> */}
      </div>
    </div>
  );
};

export default Navbar;
