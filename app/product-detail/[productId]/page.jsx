"use client";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import { getProductById } from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";
import ProjectBanner from "./_components/ProjectBanner";
import ProjectInfo from "./_components/ProjectInfo";

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
  return (
    <div className="p-5 py-12 px-10 md:px-28">
      <Breadcrumbs />
      <div className="flex flex-col sm:flex-row mt-10">
        <ProjectBanner product={producDetail} />
        <ProjectInfo product={producDetail} />
      </div>
    </div>
  );
}

export default ProductDetail;
