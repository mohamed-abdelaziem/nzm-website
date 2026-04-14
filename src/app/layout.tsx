import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import { Outfit } from "next/font/google";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

const outfit = Outfit({
  variable: "--font-outfit",
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NZM Advertising Agency",
  icons: {
    icon: "./logo.png",
  },
  description: "Grow your business with NZM.",
  openGraph: {
    title: "NZM Advertising Agency",
    description: "Boost your business with expert marketing services.",
    images: ["/og-image.png"],
  },
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

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id=GTM-WNG65HBJ'+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNG65HBJ');
            `,
          }}
        />

        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className={`min-h-full flex flex-col ${outfit.variable}`}>
        <ProgressBar />
        <Navbar />

        <Toaster />

        {children}
        <Footer />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNG65HBJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </body>
    </html>
  );
}
