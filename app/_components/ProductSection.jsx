"use client";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getLatestProducts } from "../_utils/GlobalApi";

function ProductSection() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    getLatestProducts()
      .then((res) => {
        // console.log(res); // Now logs the correct data
        setProductList(res);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <div>
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
