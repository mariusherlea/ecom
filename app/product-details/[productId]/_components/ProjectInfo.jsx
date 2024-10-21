import { BadgeCheck, OctagonAlert, ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { addToCart } from "../../../_utils/GlobalApi";
import { useContext } from "react";
import { CartContext } from "../../../_context/CartContext";

function ProjectInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  const onAddToCartClick = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    } else {
      const data = {
        data: {
          userName: user.fullName,
          email: user.emailAddresses[0].emailAddress,
          products: product?.id,
          qty: 1,
        },
      };
      addToCart(data).then(
        (res) => {
          // console.log("Add to cart", res);
          setCart((cart) => [...cart, product]);
        },
        (error) => {
          console.log("Error", error);
        }
      );
    }
  };

  return (
    <div>
      <h2 className="text-[20px]">{product?.attributes?.title}</h2>
      <h2 className="text-[14px] text-sky-200 flex items-center gap-1">
        {product?.attributes?.category}
      </h2>
      <h2 className="text-[15px] mt-5">
        {product?.attributes.description[0].children[0].text}
      </h2>
      <h2 className="flex gap-3 mt-5 text-gray-200">
        {product?.attributes?.instantDelivery ? (
          <BadgeCheck className="text-green-500" />
        ) : (
          <OctagonAlert className="text-red-500" />
        )}
        Eligible for instant delivery
      </h2>
      <h2 className="text-[32px] text-primary mt-5 font-medium">
        $ {product?.attributes?.pricing}
      </h2>
      <button
        className="bg-primary text-white px-5 py-2 rounded-lg mt-5 flex gap-2 items-center hover:bg-primary/80"
        onClick={() => onAddToCartClick()}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to cart
      </button>
    </div>
  );
}

export default ProjectInfo;
