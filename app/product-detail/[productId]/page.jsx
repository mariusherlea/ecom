"use client";
import { getProductById } from "@/app/_utils/GlobalApi";
import { useEffect, useState } from "react";

function ProductDetail({ params }) {
  const [producDetail, setProductDetail] = useState(null);

  useEffect(() => {
    console.log("product id", params?.productId);
    params?.productId && getProductById_();
  }, [params?.productId]);
  const getProductById_ = () => {
    getProductById(params?.productId).then((data) => {
      console.log(data);
      setProductDetail(data);
    });
  };
  return (
    <div>
      <div>
        <h2>{producDetail?.attributes?.title}</h2>
      </div>
    </div>
  );
}

export default ProductDetail;
