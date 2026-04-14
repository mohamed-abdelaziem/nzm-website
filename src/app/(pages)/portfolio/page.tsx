"use client";
import { useState } from "react";
import Loader from "../../RouterLoading";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  const [nav, setNav] = useState("all");
  return (
    <>
      <Loader />
      <div>
        {/* Hero Section */}
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className="pt-40 pb-20 px-8 max-w-screen-2xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-primary font-label tracking-[0.2em] uppercase text-xs mb-4 block">
              Creative Portfolio
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-15 md:leading-25">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Architectures.
              </span>
            </h1>
            <p className="text-on-surface/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              We bridge the gap between abstract concepts and immersive digital
              realities. Explore our curated selection of high-fidelity
              interfaces and brand ecosystems.
            </p>
          </div>
        </motion.header>
        {/* Filter Bar */}
        <section className="px-8 mb-16 max-w-screen-2xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setNav("all")}
              className={`px-6 py-2 rounded-full cursor-pointer ${nav == "all" ? "bg-primary-container" : "bg-surface-container-high"} text-primary font-semibold text-sm transition-all duration-300`}>
              All Work
            </button>
            <button
              onClick={() => setNav("web")}
              className={`px-6 py-2 rounded-full cursor-pointer ${nav == "web" ? "bg-primary-container" : "bg-surface-container-high"} text-primary font-semibold text-sm transition-all duration-300`}>
              Web
            </button>
            <button
              onClick={() => setNav("ads")}
              className={`px-6 py-2 rounded-full cursor-pointer ${nav == "ads" ? "bg-primary-container" : "bg-surface-container-high"} text-primary font-semibold text-sm transition-all duration-300`}>
              Ads
            </button>
            <button
              onClick={() => setNav("branding")}
              className={`px-6 py-2 rounded-full cursor-pointer ${nav == "branding" ? "bg-primary-container" : "bg-surface-container-high"} text-primary font-semibold text-sm transition-all duration-300`}>
              Branding
            </button>
            <button
              onClick={() => setNav("motion")}
              className={`px-6 py-2 rounded-full cursor-pointer ${nav == "motion" ? "bg-primary-container" : "bg-surface-container-high"} text-primary font-semibold text-sm transition-all duration-300`}>
              Motion
            </button>
          </div>
        </section>
        {/* Portfolio Grid */}
        <main className="px-8 max-w-screen-2xl mx-auto">
          <div className="editorial-grid">
            {/* Project 1 (Large) */}
            <div className="project-card group relative aspact-video bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent opacity-60 z-10" />
              <img
                alt="Project Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Abstract 3D flowing purple silk structures in a dark void with neon highlights and soft shadows, high-end digital art style"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6HWVZQnfF24WaZEsFwH-T4ZGFmlDO0i9wKDshyVagsYs2PBshBy4XkInNmDBPXk2J-MC_L8QD3eF_jRapgFXMmL07ANnFTp-ChLLjSPdlCwAU6wctp_PgpfcwihjGxg-6aLsP648F3nH5XTErWhz5h-hdRbaJFDTtBYTZ3SZ8Vu2f5nTLk4_atUupSay_OUI5s_Fohx6egkn9LV4ZhChNvem9iHQH6G5DHEaDX2A_NzUjebCyRZ4VjZnLId4AKuyG4p1Ju-SqO6I"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 translate-y-4 group-hover:translate-y-0  transition-all duration-500">
                <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase mb-2">
                  Web Design / 2024
                </span>
                <h3 className="text-4xl font-bold tracking-tight text-on-surface">
                  Luminary OS
                </h3>
                <div className="mt-4 flex items-center gap-2 text-on-surface/60 text-sm">
                  <span>View Case Study</span>
                  <span className="material-symbols-outlined text-xs">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </div>
            {/* Project 2 (Medium) */}
            <div className="project-card group relative aspect-square bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest to-transparent opacity-40 z-10" />
              <img
                alt="Project Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                data-alt="Deep iridescent purple glass sphere reflecting a dark studio environment with high contrast lighting and sharp highlights"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZcI7Bh3T4mSO6Ubp6SNxqH90Ke940bqoxzuWMY8CpafuTF-oe9b7q844FZK9OVxaiY-6Ef82zjfzmXur8Em8ZetzpbTaWC00KwQdTWBMVyP8QSTi2mIiImNIr4yGS7nxnkkfx7mzit4VKv_SUoUHm9var2EEKyP7oEoWx1I3qDOy8S1X5CscwZTO6XfpTRIwsGWrpIoPVEzOUi4OfxFyQbixbLVgZaZrY1wj99HQv2pNcxBVpuu3SPE_y7sl8HDn82s76siq7IQ0"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 translate-y-4 group-hover:translate-y-0  transition-all duration-500">
                <span className="text-secondary font-label text-[10px] tracking-[0.3em] uppercase mb-2">
                  Branding
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-on-surface">
                  Prism Logic
                </h3>
              </div>
            </div>
            {/* Project 3 (X-Large) */}
            <div className="project-card group relative aspect-21/9 bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent opacity-80 z-10" />
              <img
                alt="Project Thumbnail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Wide shot of a minimalist high-tech workspace with multiple screens glowing in deep purple and magenta tones in a dark room"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmLjvubtj40dIhukdVZYapBRdWqEiDafq9m1jRdmlqh9txz-JllOCEdjxaTpta8pK2XSQ0-h2699H3xpNdeIGV-ifAaq1eUEkJVavXa-aBaA8dV6V0oNIQI2pC3o0Xo19xSqliyrwFaSQqN6N6Uorfb-X-aUzLVIESUjaLO_LAF5XpE2Vvp3_klktUy7xmTYGfyP-rLTCIUrPIFQN333iWB0v6UyaS29qJIEFGBoC9lHr_BQRNg8O1rrhJHxOmv6uURgpRHFsZ_E8"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-12 z-20 translate-y-4 group-hover:translate-y-0  transition-all duration-500">
                <div className="max-w-2xl">
                  <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase mb-2">
                    Digital Campaign
                  </span>
                  <h3 className="text-5xl font-black tracking-tighter text-on-surface mb-4">
                    The Obsidian Protocol
                  </h3>
                  <p className="text-on-surface/70 text-lg">
                    A full-spectrum digital launch for a secret-tier technology
                    startup.
                  </p>
                </div>
              </div>
            </div>
            {/* Project 4 (Small) */}
            <div className="project-card group relative aspect-square bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
              <img
                alt="Project Thumbnail"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                data-alt="Cinematic macro shot of dark liquid metal ripples reflecting neon purple light sources, dramatic and mysterious atmosphere"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyFLe_2rX07hiGFgq3plsXpp6Vhd7rxAtr21xRzXuu6s8b9uCWddBfh1dGySLtpvhMq6mne7IRLAGuYbwxK8fIxQd2gn9v7bqfiEgly8AKnI4FWWcgAnqs-IL3W73ImCseGZPcv4TogXGU_TRi2L__A6Xas4S0nU4_R6AWRyoTZt2nziGnLWyk5n-P89BASPK_QaAJk3_Qgcm67bd2-VuBjNRIBfywRWTLa8M5SDnjOnub-tmkPy0ABL6Eofbqv9oPP_Uw2DXwQ0Y"
              />
              <div className="absolute inset-0 bg-surface-container-highest/60 backdrop-blur-sm  transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div>
                  <span className="text-primary font-label text-[10px] tracking-[0.2em] uppercase block mb-1">
                    Ads
                  </span>
                  <h3 className="text-xl font-bold text-on-surface">
                    Flux Media
                  </h3>
                </div>
              </div>
            </div>
            {/* Project 5 (Large) */}
            <div className="project-card group relative aspect-video bg-surface-container-low rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-tr from-primary-container/20 to-transparent z-10" />
              <img
                alt="Project Thumbnail"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                data-alt="Modern architecture interior with sweeping dark curves and glowing recessed purple lighting, sleek and futuristic aesthetic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrVNtbwd8o2vfdiKMNhso6JAOe3iWojeT_Y1rdwqOV7-rLrQzpHteeV7xm_VjXd2m8oNTCV8imCVw1steAt7Jnog9120eFaEBmMjabZ7bVjGk3GoMjjgxAVlfwQ9RyQVIPKbgwaDAJU7D_FeFvSLrYLTVIHUFzj1-50Wdhy8u3smgttkCgv-9p9CSkpANsGXv51BvPa27wMhi_Rc9uKqSe7yHszDbtbviihVWjI5yBcNwOHWg4P6S3_El2l6TlPUkvjhktfjORd3o"
              />
              <div className="absolute bottom-0 left-0 p-10 z-20">
                <h3 className="text-3xl font-bold tracking-tight text-on-surface -translate-x-5 group-hover:translate-x-0  transition-all duration-500">
                  Aether Spaces
                </h3>
                <span className="text-on-surface/40 text-sm -translate-x-2.5 group-hover:translate-x-0  transition-all duration-500 delay-75">
                  Brand Identity
                </span>
              </div>
            </div>
          </div>
        </main>
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className="mt-40 px-8 text-center max-w-screen-2xl mx-auto">
          <div className="py-24 rounded-2xl bg-surface-container-low relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-10 md:leading-15 mb-8 max-w-3xl mx-auto">
              Ready to build the{" "}
              <span className="text-primary">extraordinary?</span>
            </h2>

            <Link
              href={"/contact"}
              className="mainBtn md:text-[20px] hover:-translate-y-1.25 inline-block  transition-all duration-500 cursor-pointer px-6 py-2.5 md:px-10 md:py-4     rounded text-white font-bold  active:scale-90  hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
              Discuss Your Project
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
}
