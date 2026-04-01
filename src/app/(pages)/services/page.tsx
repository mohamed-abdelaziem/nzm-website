"use client";
import TextCarousel from "@/src/components/TextCarousel/TextCarousel";
import Loader from "../../RouterLoading";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Loader />

      <main className="pt-32">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className="px-8 max-w-screen-2xl mx-auto mb-32">
          <div className="max-w-4xl">
            <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-6 block">
              Capabilities
            </span>
            <h1 className="text-5xl md:text-8xl font-black  mb-8 md:leading-25 leading-15">
              Architecting
              <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                Digital Dominance
              </span>
            </h1>
            <p className="text-xl text-on-surface-variant leading- leading-16relaxed max-w-2xl font-light">
              We don't just provide services; we engineer ecosystems. Our
              methodology blends technical precision with avant-garde design to
              elevate brands above the noise.
            </p>
          </div>
        </motion.section>
        {/* Marquee Background Text */}
        <div className="overflow-hidden whitespace-nowrap mb-32 opacity-5 select-none pointer-events-none">
          <TextCarousel
            text={
              " SEO • DIGITAL ADS • SOCIAL MEDIA • BRANDING • SEO • DIGITAL ADS • SOCIAL MEDIA • BRANDING •"
            }
          />
        </div>
        {/* Services Grid */}
        <section className="px-8 max-w-screen-2xl mx-auto space-y-40">
          {/* Service 1: SEO */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div
            initial={{opacity:0, x:-50}}
              whileInView={{opacity: 1 , x:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="md:col-span-5 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="search_insights">
                  <i className="fa-solid fa-magnifying-glass-chart"></i>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-15">
                Algorithmic Authority (SEO)
              </h2>
              <p className="text-lg text-on-surface-variant  leading-15 relaxed">
                Visibility is the currency of the digital age. Our SEO
                strategies are built on deep technical audits and semantic
                content architecture that ensures you own the first page.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide text-on-surface/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Technical Infrastructure Optimization
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Semantic Keyword Architecture
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Authority &amp; Backlink Acquisition
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-7">
              <div className="relative group rounded-2xl overflow-hidden bg-surface-container-low aspect-video">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  data-alt="Dark aesthetic data visualization dashboard showing exponential growth curves in vibrant neon purple and pink tones on a black background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA0I4_QsJU4h3AGOuqzhZRDgJKyDRuFGt42li0fyMyLadDh0KT0HnkqeaAnbqw7lp2VXzMFIMAS9zNSS76RFJUesW-_H-DoFSGXWLD1L9SivDtnM7FGrNsCcJW0IJA-h0ChZ-GxHK8O5p_upxc_fAPZBi9c4LzvhB7Im1LITkH-fVEybeW2ShNVJbLNtagHLE2MLJ8DpKSLwEx3hGYQ3v3s3hFuCgwX1xH8_3Bi1UVdFPD5QxI3bYtp1jV-senJRE4wnKMBHGAWnI"
                />
                <div className="absolute inset-0 case-study-overlay flex flex-col justify-end p-8">
                  <span className="text-xs font-bold tracking-widest text-secondary mb-2 uppercase">
                    Success Metric
                  </span>
                  <h3 className="md:text-3xl font-bold mb-2">
                    +420% Organic Growth
                  </h3>
                  <p className="text-on-surface-variant text-sm max-w-md leading-5">
                    How we scaled a FinTech disruptor to the top of Google
                    search within 6 months.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Service 2: Digital Ads */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-7 order-2 md:order-1">
              <div className="relative group rounded-2xl overflow-hidden bg-surface-container-low aspect-video">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  data-alt="High-contrast close up of a glowing digital interface showing complex network nodes and conversion paths in electric purple light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOYRqJABFQoEjH2UYeChF0VecSK1tnbcBBhyCDd1kxqRPHQFh05CgY7V9aC42j8v8BHW4jEKIGZtbDmGAXHxAVbVpEvBauRPEvZ5mgTF2ENgLozjybwLV_vx9QMx7eMDkrVsje9uF5P2cn6D3AfXv_UUupxgqoIx1GMU0rR_0bfxeC3OF_UxY_rgRg1DuVFMAV1GVVkSeKzOUStRG87uEuDtJr5bfQSvmoOxQ_bBoFbNKV2EpDqsz47Ip4Fp09OUi9WITKXfILtjA"
                />
                <div className="absolute inset-0 case-study-overlay flex flex-col justify-end p-8">
                  <span className="text-xs font-bold tracking-widest text-secondary mb-2 uppercase">
                    ROAS Focus
                  </span>
                  <h3 className="md:text-3xl font-bold mb-2">
                    12.4x Conversion Efficiency
                  </h3>
                  <p className="text-on-surface-variant text-sm max-w-md leading-5">
                    Precision targeting and algorithmic bidding for a global
                    luxury fashion house.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
            initial={{opacity:0, x:50}}
              whileInView={{opacity: 1 , x:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="md:col-span-5 order-1 md:order-2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="ads_click">
                  <i className="fa-solid fa-hand-pointer"></i>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-15">
                Precision Performance Ads
              </h2>
              <p className="text-lg text-on-surface-variant leading-15 relaxed">
                We don't buy clicks; we acquire customers. Our performance
                marketing unit leverages AI-driven bidding and psychological
                creative to maximize ROAS across every channel.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide text-on-surface/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Multi-Channel Funnel Strategy
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  High-Intent Search Capturing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Dynamic Remarketing Ecosystems
                </li>
              </ul>
            </motion.div>
          </div>
          {/* Service 3: Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-5 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="hub">
                  <i className="fa-solid fa-share-nodes"></i>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-15">
                Cultural Resonance (Social)
              </h2>
              <p className="text-lg text-on-surface-variant leading-15 relaxed">
                Social media is no longer a broadcast channel; it's a community
                engine. We build social presences that don't just get likes—they
                drive culture and advocacy.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide text-on-surface/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Cinematic Content Production
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Community Growth Engineering
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Influencer Synergy Programs
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-7">
              <div className="relative group rounded-2xl overflow-hidden bg-surface-container-low aspect-video">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  data-alt="Abstract composition of floating glass orbs and soft lavender light reflecting off polished dark surfaces, high end aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB9WTBBiAptN-Mgk0JPD5jk9f7ySBS0YQ7nGtEknah2j10bul3pYj2EELvNLUpyg7_eaB64OryDOjiOw8ACM8IhAM2sxUNrsWBjwRnYfDU3LU0P2aM4lCqDK1BuUlmDCbqB-yR_JuR2xJwsaOQna3q4uhdw2GyLVyP7R8aKeG2dWH9-a-gw7pzglk1I7dfloE9mjLv9099c_LcwT5-IbMmUtVz2_IUF5vx4BhKqUIqXOei80BKTH3XZB0xzXR1OfmNv_ZNKh2WNgI"
                />
                <div className="absolute inset-0 case-study-overlay flex flex-col justify-end p-8">
                  <span className="text-xs font-bold tracking-widest text-secondary mb-2 uppercase">
                    Brand Viral
                  </span>
                  <h3 className="md:text-3xl font-bold mb-2">
                    2M+ Natural Impressions
                  </h3>
                  <p className="text-on-surface-variant text-sm max-w-md leading-5">
                    Redefining the digital identity of a premium lifestyle brand
                    through aesthetic storytelling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Service 4: Branding */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-7 order-2 md:order-1">
              <div className="relative group rounded-2xl overflow-hidden bg-surface-container-low aspect-video">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  data-alt="Minimalist typography logo design displayed on a premium textured black paper background with subtle foil stamping details"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2n-1_88pisZMIIPqH5FDW5XtMlGKeZ2UXbQ_S7NoXBxUjLqEfLwmzvmW-sjReTdNb7ZIxdM31V9hPqLw1IXVLhcPL3iMlvkx5G6HQDUv-WEn59wuvmcTH93dq3fYfGNF5Qh8bHlk6rZDfE358MfkgnOwTdSrk7Y8BbzsY4oPETjztk-CkUu7mIQPEHWMU_ai3WG65SMHCgay8tMmh21p4bMM7SJHyAgaCxuZZAEq5ifK3A85xZ-9aTbuYo2Hb7bV9mJ2M9NSbnkY"
                />
                <div className="absolute inset-0 case-study-overlay flex flex-col justify-end p-8">
                  <span className="text-xs font-bold tracking-widest text-secondary mb-2 uppercase">
                    Identity Shift
                  </span>
                  <h3 className="md:text-3xl font-bold mb-2">
                    Total Market Re-positioning
                  </h3>
                  <p className="text-on-surface-variant text-sm max-w-md leading-5">
                    From a local startup to a global authority: A 360-degree
                    brand transformation.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-5 order-1 md:order-2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-primary text-3xl"
                  data-icon="architecture">
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-15">
                Identity Architecture
              </h2>
              <p className="text-lg text-on-surface-variant leading-15 relaxed">
                Design is how it works, not just how it looks. We craft visual
                languages and brand philosophies that establish instant
                authority and long-term trust.
              </p>
              <ul className="space-y-4 text-sm font-medium tracking-wide text-on-surface/80">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Strategic Brand Positioning
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Visual Identity Systems
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Brand Voice &amp; Narrative Development
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <motion.section
        initial={{opacity:0, y:-50}}
              whileInView={{opacity: 1 , y:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
         className="mt-40 px-8 py-32 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-black max-w-4xl mx-auto leading-15">
              Ready to build your
              <span className="text-glow text-primary"> digital legacy?</span>
            </h2>
            <div className="flex flex-row md:gap-6 gap-4 justify-center flex-wrap">

              <Link href={'/contact'} className="secondBtn w-[60%] md:w-auto cursor-pointer duration-500 px-6 py-2.5 md:px-10 md:py-4 md:mx-0  hover:scale-110 hover:-translate-1.25 rounded text-white font-bold  active:scale-90 transition-all md:text-[20px] hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
              Launch Project
            </Link>
              <Link href={'/portfolio'} className="bg-surface-container-high w-[60%]  duration-500 hover:-translate-1.25 hover:scale-110 md:w-auto cursor-pointer px-6 py-2.5 md:px-10 md:py-4 md:mx-0    rounded text-white font-bold  active:scale-90 md:text-[20px] transition-all hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
               View Case Studies
            </Link>
             
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
