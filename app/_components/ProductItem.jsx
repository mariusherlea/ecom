import { SquareChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductItem({ product }) {
  const bannerUrl = product?.attributes?.banner?.data?.attributes?.url;
  const baseUrl = "http:/localhost:1337";

  // Only set imageUrl if bannerUrl exists
  const imageUrl = bannerUrl ? `${baseUrl}${bannerUrl}` : null;
  return (
    <Link href={`/product-details/` + product.id}>
      <div className="hover:border">
        <div>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="banner"
              width={400}
              height={350}
              className="rounded-lg object-cover"
            />
          ) : (
            <p>No banner available</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="p-3">
            <h2 className="text-[14px] font-medium">
              {product?.attributes?.title}
            </h2>
            {product?.attributes?.category ? (
              <h2 className="text-[12px] text-sky-200 flex items-center gap-1">
                <SquareChevronRight className="h-3 w-3" />{" "}
                {product?.attributes?.category}
              </h2>
            ) : (
              ""
            )}
          </div>
          <h2>$ {product.attributes?.pricing}</h2>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
