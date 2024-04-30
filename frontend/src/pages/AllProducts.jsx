import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../components/item/Item";
import "./css/Category.css";

const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("http://localhost/api/v1/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getAllProducts();
  }, []);

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
        })}
      </div>
    </div>
  );
};

export default AllProducts;
