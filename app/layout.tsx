import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToasterProvider from "@/components/ToasterProvider";
import { getCategories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bazar Dor - Daily Market Prices",
  description: "Track current prices of essential products in Bangladesh.",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const categories = await getCategories();

  return (
    <html lang="en">
      <body>
        <ToasterProvider />
        <Navbar categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
