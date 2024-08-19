import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  // console.log(productList);
  return (
    <div className="text-white">
      {productList.map((item) => (
        <div key={item.id}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
