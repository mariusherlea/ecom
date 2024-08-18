import React from "react";

function ProductList({ productList }) {
  return (
    <div className="text-white">
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.attributes?.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
