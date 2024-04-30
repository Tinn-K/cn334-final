import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Item from "../components/item/Item";
import "./css/Category.css";

const Category = (props) => {
  const location = useLocation();
  const categoryPath = location.pathname.substring(1);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost/api/v1/products?category=${categoryPath}`
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getProductCategory();
  }, [categoryPath]);

  return (
    <div className="category">
      <h1 className="category-hero-text">{props.hero_text}</h1>
      <img className="category-banner" src={props.banner} alt="" />
      <div className="category-index-sort">
        <p>
          <span>Showing {products.length}</span> out of 36 products
        </p>
        <div className="category-sort">
          Sort by <img src="" alt="" />
        </div>
      </div>
      <div className="category-products">
        {products.map((item, i) => {
          if (categoryPath === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.images[0]}
                price={item.price}
                discounted_price={item.discounted_price}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Category;
