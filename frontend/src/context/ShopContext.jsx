import axios from "axios";
import React, { createContext, useState } from "react";
// import products from "../components/assets/products";

export const ShopContext = createContext(null);

const getProducts = async (category = "") => {
  try {
    const response = await axios.get(
      `http://localhost/api/v1/products?category=${category || ""}`
    );
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};
const products = getProducts();

let cart = {};
for (let i = 1; i < products.length + 1; i++) {
  cart[i] = 0;
}

const ShopContextProvider = (props) => {
  const [menu, setMenu] = useState("");
  const [cartItems, setCartItems] = useState(cart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.discounted_price * cartItems[item];
      }
    }
    return Number(totalAmount.toFixed(2));
  };

  const getTotalItems = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        total += cartItems[item];
      }
    }
    return total;
  };

  const contextValue = {
    menu,
    setMenu,
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalAmount,
    getTotalItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
