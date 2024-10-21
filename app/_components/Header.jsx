"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../_context/CartContext";
import { getUserCartItems } from "../_utils/GlobalApi";
import Cart from "./Cart";

function Header() {
  const { user } = useUser();
  const [isLogin, setIsLogin] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href.toString();
    setIsLogin(
      currentUrl.includes("sign-up") || currentUrl.includes("sign-in")
    );
  }, []);

  useEffect(() => {
    if (user?.emailAddresses[0]?.emailAddress) {
      getUserCartItems(user.emailAddresses[0].emailAddress).then((res) => {
        setCart(res);
      });
    }
  }, [user, setCart]);

  return (
    !isLogin && (
      <header className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 dark:text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Your SVG Path */}
                </svg>
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  {/* Your Links */}
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="#"
                    >
                      About
                    </a>
                  </li>
                  {/* Other links */}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <SignedOut>
                    <SignInButton />
                  </SignedOut>
                </div>
              ) : (
                <SignedIn>
                  <h2
                    className="flex items-center gap-2"
                    onClick={() => setOpenCart(!openCart)}
                  >
                    <ShoppingCart className="text-primary cursor-pointer" /> (
                    {cart?.length})
                  </h2>
                  <UserButton />
                  {openCart && <Cart />}
                </SignedIn>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
}

export default Header;
