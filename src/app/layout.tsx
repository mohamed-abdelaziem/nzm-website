import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Outfit } from "next/font/google";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NZM",
  description:
    "Boost your business with expert digital marketing services. We specialize in ads, SEO, and growth strategies that drive real results. Start today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <title>NZM</title>
      </head>
      <body className={`min-h-full flex flex-col ${outfit.variable}`}>
        <ProgressBar />
        <Navbar />

        <Toaster/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
