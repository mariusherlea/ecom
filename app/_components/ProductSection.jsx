"use client";
import React, { useEffect } from "react";
import ProductList from "./ProductList";
import { getLatestProducts } from "../_utils/GlobalApi";

function ProductSection() {
  useEffect(() => {
    getLatestProducts_();
  }, []);

  const getLatestProducts_ = () => {
    getLatestProducts()
      .then((res) => {
        console.log(res); // Now logs the correct data
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  return (
    <div>
      <ProductList />
    </div>
  );
}

export default ProductSection;
