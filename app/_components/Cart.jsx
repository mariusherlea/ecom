import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="h-[300px] w-[250px] bg-gray-100 z-10 rounded-md absolute mx-10 right-10 top-12 p-5 border-2 border-gray-300 shadow-md overflow-auto">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart?.map((item, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-gray-500 transition hover:text-gray-600"
                  onClick={() => {
                    const newCart = cart.filter((_, i) => i !== index);
                    setCart(newCart);
                  }}
                ></button>
              </div>
            </li>
          ))}
        </ul>

        <div className="space-y-4 text-center mt-5">
          <a
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            View my cart (2)
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
  );
}

export default Cart;
