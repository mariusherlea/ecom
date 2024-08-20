import ProductItem from "./ProductItem";

function ProductList({ productList }) {
  // console.log(productList);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {productList.map((item) => (
        <div key={item.id}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
