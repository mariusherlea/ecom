"use client";
import Breadcrumbs from "../../_components/Breadcrumbs";
import { getProductById, getProductByCategory } from "../../_utils/GlobalApi";
import { useEffect, useState } from "react";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";
import { use } from "react"; // Import the `use` hook

function ProductDetail({ params }) {
  const { productId } = use(params);

  //use to get the current path
  const path = usePathname();
  const [producDetail, setProductDetail] = useState(null);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // console.log("project path", path);
    productId && getProductById_();
  }, [productId]);

  const getProductById_ = () => {
    getProductById(productId).then((data) => {
      setProductDetail(data);
      getProductListByCategory(data);
    });
  };

  const getProductListByCategory = (product) => {
    getProductByCategory(product?.attributes?.category).then((data) => {
      // console.log(data);
      setProductList(data);
    });
  };
  return (
    <div className="p-5 py-12 px-10 md:px-28">
      <Breadcrumbs path={path} />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5 justify-evenly">
        <ProjectBanner product={producDetail} />
        <ProjectInfo product={producDetail} />
      </div>
      {productList && (
        <div className="mt-20 ">
          <h2 className="font-medium text-[20px] mb-4">Similar product</h2>
          <ProductList productList={productList} />
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
