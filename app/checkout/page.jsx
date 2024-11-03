"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function Checkout() {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 1000,
    success_url: `${window.location.origin}/success`,
    cancel_url: `${window.location.origin}/canceled`,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
}

export default Checkout;
