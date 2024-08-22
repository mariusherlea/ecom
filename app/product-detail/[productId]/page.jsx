"use client";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import { getProductById } from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";
import ProductList from "@/app/_components/ProductList";

function ProductDetail({ params }) {
  const [producDetail, setProductDetail] = useState(null);

  useEffect(() => {
    params?.productId && getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    getProductById(params?.productId).then((data) => {
      setProductDetail(data);
    });
  };

  const getProductListByCategory = (category) => {
    const result = productList.filter(
      (item) => item.attributes.category === category
    );
    return result;
  };
  return (
    <div className="p-5 py-12 px-10 md:px-28">
      <Breadcrumbs />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-5 justify-evenly">
        <ProjectBanner product={producDetail} />
        <ProjectInfo product={producDetail} />
      </div>
      <ProductList productList={}/>
    </div>
  );
}

export default ProductDetail;
