import { BadgeCheck, OctagonAlert, ShoppingCart } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function ProjectInfo({ product }) {
  const { user } = useUser();
  const router = useRouter();

  const onAddToCartClick = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    } else {
      console.log("add to cart");
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
