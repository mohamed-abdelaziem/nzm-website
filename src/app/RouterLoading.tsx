"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1500); // مدة اللود

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#131313] transition-opacity duration-700 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* LOGO */}
      <h1 className="logo text-5xl font-extrabold tracking-[0.3em]">
        NZM
      </h1>

      {/* LINE LOADER */}
      <div className="mt-8 h-0.75 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="loader-bar h-full rounded-full" />
      </div>

      {/* STYLES */}
      <style jsx>{`
        .logo {
          background: linear-gradient(135deg, #520b4d, #5f0fb9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoFade 1s ease forwards;
        }

        .loader-bar {
          width: 50%;
          background: linear-gradient(135deg, #520b4d, #5f0fb9);
          animation: loading 1.2s ease-in-out infinite;
        }

        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }

        @keyframes logoFade {
          0% {
            opacity: 0;
            transform: scale(0.9);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}