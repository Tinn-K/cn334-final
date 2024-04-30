import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/productDisplay/ProductDisplay";
// import products from "../components/assets/products";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost/api/v1/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    getProduct();
  }, [productId]);

  return (
    <div>
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
