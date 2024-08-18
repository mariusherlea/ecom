import React from "react";

function ProductList({ productList }) {
  console.log(productList);
  return (
    <div className="text-white">
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.attributes?.title}</h2>
          <p>{product.attributes?.pricing}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
