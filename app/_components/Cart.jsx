import React, { useContext, useEffect } from "react";
import { CartContext } from "../_context/CartContext";
import Image from "next/image";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    cart && console.log(cart);
  }, [cart]);

  // Helper function to format the image URL
  const getImageUrl = (path) => {
    return path?.startsWith("http") ? path : `http://localhost:1337${path}`;
  };

  return (
    cart && (
      <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 border-2 border-gray-300 shadow-md overflow-auto">
        <div className="mt-4 space-y-6">
          <ul className="space-y-4">
            {cart?.map((item, index) => {
              const product = item?.attributes?.products?.data[0]?.attributes;
              const bannerUrl = product?.banner?.data?.attributes?.url;

              return (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {bannerUrl ? (
                      <Image
                        src={getImageUrl(bannerUrl)}
                        alt={product?.title || "Product image"}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover text-center sm:float-right"
                      />
                    ) : (
                      <div className="h-[100px] w-[100px] bg-slate-200 animate-pulse">
                        Loading...
                      </div>
                    )}

                    <div>
                      <h3 className="text-sm font-medium text-gray-700">
                        {product?.title || "Untitled product"}
                      </h3>
                      <h4 className="text-gray-700 font-small text-sm">
                        {product?.category || "Unknown category"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        ${product?.pricing || "0.00"}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="space-y-4 text-center mt-5">
            <a
              href="#"
              className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
            >
              View my cart ({cart?.length})
            </a>

            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      </div>
    )
  );
}

export default Cart;
