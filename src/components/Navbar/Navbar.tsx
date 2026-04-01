"use client";
import Link from "next/link";
import "./Navbar.css";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "tween" }}
        className="sticky top-0 w-full z-50 bg-surface/60 dark:bg-[#131313]/60 backdrop-blur-xl  antialiased tracking-tight">
        <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="logo text-2xl font-black tracking-tighter text-[#e5e2e1]">
            <h1 className="logo text-4xl font-extrabold ">NZM</h1>
          </div>

          <div className="md:hidden">
            <i
              onClick={() => {
                toggleIsOpen();
              }}
              className="fa fa-bars cursor-pointer text-[25px] hover:text-primary-fixed-dim transition-all duration-500 "></i>
          </div>

          {/* start nav in mobile */}
          {isOpen ? (
            <div className="bg-surface-container-low dark:bg-surface-container-low flex nav-mobile-bg md:hidden absolute flex-col top-full  z-50 left-0 w-75 h-screen  p-3 gap-4  justify-start items-start  space-x-8">
              <div className="flex items-center justify-end cursor-pointer w-full py-3">
                <i
                  onClick={() => {
                    toggleIsOpen();
                  }}
                  className="fa fa-xmark hover:text-primary-fixed-dim transition-all duration-500"></i>
              </div>

              <Link
                onClick={() => toggleIsOpen()}
                prefetch={false}
                href={"/home"}
                className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/home" ? "-translate-y-1.25 scale-110" : ""}`}>
                Home
                <span
                  className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/home" ? "w-full" : ""}`}></span>
              </Link>
              <Link
                onClick={() => toggleIsOpen()}
                prefetch={false}
                href={"/services"}
                className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/services" ? "-translate-y-1.25 scale-110" : ""}`}>
                Services
                <span
                  className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/services" ? "w-full" : ""}`}></span>
              </Link>
              <Link
                onClick={() => toggleIsOpen()}
                prefetch={false}
                href={"/about"}
                className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/about" ? "-translate-y-1.25 scale-110" : ""}`}>
                About
                <span
                  className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/about" ? "w-full" : ""}`}></span>
              </Link>
              <Link
                onClick={() => toggleIsOpen()}
                prefetch={false}
                href={"/portfolio"}
                className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/portfolio" ? "-translate-y-1.25 scale-110" : ""}`}>
                Portfolio
                <span
                  className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/portfolio" ? "w-full" : ""}`}></span>
              </Link>
              <Link
                onClick={() => toggleIsOpen()}
                prefetch={false}
                href={"/contact"}
                className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/contact" ? "-translate-y-1.25 scale-110" : ""}`}>
                Contact
                <span
                  className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/contact" ? "w-full" : ""}`}></span>
              </Link>

              <Link href={'/contact'} onClick={()=>toggleIsOpen()} className="mainBtn transition-all duration-500 text-center hover:-translate-1.25  md:text-[20px] w-full hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]  cursor-pointer px-6 py-2.5 rounded text-on-surface font-bold scale-95 active:scale-90  shadow-[0_0_20px_rgba(82,11,77,0.4)]">
                Start Project
              </Link>
            </div>
          ) : (
            ""
          )}

          {/* end nav in mobile */}

          <div className="hidden md:flex items-center space-x-8">
            <Link
             
              prefetch={false}
              href={"/home"}
              className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/home" ? "-translate-y-1.25 scale-110" : ""}`}>
              Home
              <span
                className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/home" ? "w-full" : ""}`}></span>
            </Link>
            <Link
             
              prefetch={false}
              href={"/services"}
              className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/services" ? "-translate-y-1.25 scale-110" : ""}`}>
              {" "}
              Services
              <span
                className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/services" ? "w-full" : ""}`}></span>
            </Link>
            <Link
              
              prefetch={false}
              href={"/about"}
              className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/about" ? "-translate-y-1.25 scale-110" : ""}`}>
              About
              <span
                className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/about" ? "w-full" : ""}`}></span>
            </Link>
            <Link
             
              prefetch={false}
              href={"/portfolio"}
              className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/portfolio" ? "-translate-y-1.25 scale-110" : ""}`}>
              Portfolio
              <span
                className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/portfolio" ? "w-full" : ""}`}></span>
            </Link>
            <Link
              
              prefetch={false}
              href={"/contact"}
              className={`text-[#e5e2e1] flex relative flex-col  hover:text-[#d6baff]  hover:-translate-y-1.25 font-medium transition-all duration-500 pb-1 border-b border-b-transparent  ${pathName == "/contact" ? "-translate-y-1.25 scale-110" : ""}`}>
              Contact
              <span
                className={`bg-primary-fixed-dim block bottom-0 right-0 left-0 absolute w-0 rounded-4xl h-0.5 mx-auto ${pathName == "/contact" ? "w-full" : ""}`}></span>
            </Link>
          </div>
          <Link href={'/contact'} className="mainBtn  transition-all duration-500 md:text-[20px] hover:-translate-1.25 hover:shadow-[0_0_30px_rgba(186,171,255,0.2)] hidden md:block cursor-pointer px-6 py-2.5 rounded text-on-surface font-bold  active:scale-90  shadow-[0_0_20px_rgba(82,11,77,0.4)]">
            Start Project
          </Link>
        </div>
      </motion.nav>
    </>
  );
}
