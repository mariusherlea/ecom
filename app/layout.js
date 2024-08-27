import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "ecomm",
  description: "Online shopping",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={raleway.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
