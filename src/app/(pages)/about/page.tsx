"use client";
import TextCarousel from "@/src/components/TextCarousel/TextCarousel";
import Loader from "../../RouterLoading";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
export default function About() {
  return (
    <>
      <Loader />
      <main className="pt-32">
        {/* Hero Section: The Midnight Luminary */}
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className="relative px-8 md:px-20 py-24 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <span className="text-primary font-label text-xs tracking-[0.2em] uppercase mb-6 block">
              Our Identity
            </span>
            <h1 className="text-5xl md:text-8xl  font-black leading-15 md:leading-25  mb-5 max-w-4xl">
              Architecting the 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary"> digital frontier with precision. </span>
            </h1>
             <p className="md:text-xl text-on-surface/80 leading-relaxed max-w-2xl">
                  We don't build websites; we design high-performance digital
                  environments. NZM was born from the intersection of
                  architectural discipline and creative fluidity.
                </p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-7">
               
              </div>
              <div className="hidden md:col-span-5  md:flex justify-end">
                <div className="w-full h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="Modern minimalist office space with dark wood accents and soft atmospheric purple lighting in the background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGVLlccWRVV_S0NLGDDz_y_fvTM_vbEei-YP6FNTXOKsMKnlv7Nojz7ocqfsh-ZrTH7piHdwDWDNK3bieuaqjK4ZdvtocRd3aMyu2rkZNUbjdHiFr5vgaq1_0WZUUhMJLTTg863L-kpfxsyoLzZMHTlfpXicHtvodJZUn-J6w121-oSuwFtRsFEie4zaBPDn4PISWeevbRGBFZWEcUYGiY-ID-rR0VQp3tgvdaj0YH30uZw8UugxgPa5-9CFai0mnFc-23-4inAJo"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Marquee Background */}
          <TextCarousel
            text={"Digital Architects • Innovation • Excellence • NZM •"}
          />
        </motion.section>
        {/* Our Philosophy: Asymmetric Bento */}
        <section className="bg-surface-container-low py-32 px-8 md:px-20 relative">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}
                className="md:col-span-2 bg-surface p-12 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
                    01 Philosophy
                  </span>
                  <h2 className="text-4xl font-bold mb-8">
                    Quiet Authority in a Loud World.
                  </h2>
                  <p className="text-on-surface/70 text-lg leading-relaxed max-w-xl">
                    We believe in the power of restraint. In an era of digital
                    noise, we curate experiences that speak through clarity and
                    purpose. Our philosophy is rooted in Swiss design principles
                    adapted for the immersive web.
                  </p>
                </div>
                <div className="mt-12 flex items-center gap-4 text-[#d6baff]">
                  <span className="material-symbols-outlined">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                  <span className="font-bold tracking-tight ">
                    Structured Creativity{" "}
                  </span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}
                className="bg-primary-container p-12 rounded-xl text-on-surface flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold">The Soul of the Code</h3>
                <p className="text-on-surface/80">
                  Every line we write is a brick in a foundation built for
                  longevity, not just trends.
                </p>
                <div className="w-12 h-1 bg-primary mt-8" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}
                className="bg-surface-container-high p-8 rounded-xl group overflow-hidden relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700"
                  data-alt="Abstract macro shot of computer circuits glowing with deep purple and neon pink light pulses"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA08REzDn70v8V88S82igBTEBlM40tve2dqjWNhtYAG1nOHdnKeHKH28XvbcioTQpES1dAVj9p0MXK0f4TMqwAPvKHEoT5rLM2D47zeZDd7aCB3ohU98QuC8mXf5pmn3qPi2sTP4O7ov2bd5B773Tex7fDbTCDaAITFUFeLexDIg0iWcggYql83QKqcM9sCeaflKQ_ot7Q1iNvr9G6somJJKe6bPj8JcqC2givEQXVHS_XZStH1zzcO8FFlhuYztzX486B-AcTWzNs"
                />
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-15 text-primary">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                  </span>
                  <h4 className="text-xl font-bold my-2">Future Ready</h4>
                  <p className="text-sm text-on-surface/60">
                    Integrating AI and immersive tech seamlessly into legacy
                    foundations.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}
                className="md:col-span-2 bg-surface p-8 rounded-xl border border-outline-variant/15 flex flex-wrap gap-12 items-center">
                <div className="flex-1 min-w-50">
                  <h5 className="text-5xl font-black text-primary mb-2">12+</h5>
                  <p className="text-xs uppercase tracking-widest text-on-surface/40">
                    Years of Craft
                  </p>
                </div>
                <div className="flex-1 min-w-50">
                  <h5 className="text-5xl font-black text-secondary mb-2">
                    140
                  </h5>
                  <p className="text-xs uppercase tracking-widest text-on-surface/40">
                    Projects Shipped
                  </p>
                </div>
                <div className="flex-1 min-w-50">
                  <h5 className="text-5xl font-black text-on-surface mb-2">
                    09
                  </h5>
                  <p className="text-xs uppercase tracking-widest text-on-surface/40">
                    Global Awards
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Meet the Team */}
        <section className="py-32 px-8 md:px-20">
          <div className="max-w-screen-2xl mx-auto overflow-none">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
                  The Architects
                </span>
                <h2 className="text-5xl font-bold tracking-tight">
                  The minds behind the luminary.
                </h2>
              </div>
              <div className="pb-2">
                <p className="text-on-surface/60 md:max-w-xs  text-sm">
                  A collective of designers, engineers, and visionaries obsessed
                  with the finer details.
                </p>
              </div>
            </motion.div>

            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              slidesPerView={3}
              spaceBetween={30}
              grabCursor={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2, spaceBetween: 20 }, // لما العرض >= 640px
                768: { slidesPerView: 3, spaceBetween: 30 }, // لما العرض >= 768px
              }}
              loop={true}>
              <SwiperSlide>
                {/* Team Member 1 */}
                <div className="group">
                  <div className="aspect-4/5 rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-alt="Professional headshot of a man with a sharp gaze in dark clothing against a charcoal background with soft side lighting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfGTNzH6MxCLAIg2Y2lTJRISJXCnlnZBVZzvlrtGKty97hohw9nVQqfBnWH8SxOgaJ6_5j-KbVqS1p0WRF4cxu3rVeN_Tvzjzb5T8lWi9cfaipMcykcRIRwBqVavtnjtil5o8auvJcGmWp1pA4m9dXXh0nRc1z6go_cBSx7WJxnojeT_Ry5dqpp9wTft2-AYHu3SFkJemqSoH4O2QNclSHaGE_YYRCT6NoQwQjc6x-T19JU3ly33AS8pCz1qNc-lUm6dOmVMhR4Xs"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-lg font-bold">Marcus Chen</h4>
                  <p className="text-primary text-sm uppercase ">
                    Founder &amp; Lead Architect
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="group">
                  <div className="aspect-4/5 rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-alt="Portrait of a creative professional woman with sleek hair wearing a black designer blazer in a moody studio setting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkQK6n0m1QY2wiR9TAD6AS_bQzER_HUCMZaLdE6vQrMKXf3SZt2OAMEbThqIsKRJvvAgW0bYAHVeQKpiOYGDe1IfBi0QoblYdmnrTxRjzjixTuOQBuqnHYrMTlfcDg4mlf_caONryuy7lklCuJipbqGxPtgXIcniPI6HNb0CfwREGJZJ3bXcusn6woUR3_1GimdSJ-3CTJKV08xbSB-LY7IZvqjLL47-4m_yeupQeypweiUnJTz_pd0AKBC8FKMDurLa8lSUxhYKM"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-lg font-bold">Elena Vance</h4>
                  <p className="text-primary text-sm uppercase ">
                    Design Director
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                {/* Team Member 3 */}
                <div className="group">
                  <div className="aspect-4/5 rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-alt="Man with glasses looking thoughtfully away, lit with cool blue and warm purple light in a high-end tech environment"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWAIeiOWgBjhG2CtekOXPz0-eVacByMpUakc5DvYNd8rJmwKdJzUWuykYmlu_6mu9uWKCUWQlgbINDDiY5AGBSXR4U8fFvDz7bE-Qkc9rOxNDF_wvcEtK6ZN8Ek-gyMaJORYbv4raBGctV0Zv1J2N25JmzH18CW4ZJsaoXtGK0u54qtNGhZ4OpUyI7jgacNaKiKLcaft16YD0Y1fxUPJLtfeTOANkWaezEO0PYgb2Ym6KxaESMr0FhqEJRGCJXZA_TMQMPUhwfpIY"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-lg font-bold">Julian Thorne</h4>
                  <p className="text-primary text-sm uppercase tracking-tighter">
                    Chief Engineering Officer
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="group">
                  <div className="aspect-4/5 rounded-xl overflow-hidden mb-6 bg-surface-container-high relative">
                    <img
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      data-alt="Confident woman with striking features, wearing modern eyewear and black minimalist clothing against a dark textured wall"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoeEMQf3nTooqCucwBYtIe8GOVtawKubqeRMAciPos-BMHamjgxT7eeGSxdMyE7fVuairJthRXYKww3XcXmEFfX2M7PnhKYST9ODOaXfoxCX2wNuKmns41rQM29avpgV26kujFgn3mRtl1oJZ4ihiEAm-P1BCkhDeDH9MzvZHW7xK9eZhqR2gvtxCmGTprDkVDXemSd3sm1Xd8co9ZbvIaVmwXch5bDxedHsWTE92JZrVJCJp7l_L9tnf62gAykIZYc184U5aS4oY"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-surface-container-lowest via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h4 className="text-lg font-bold">Sasha Gray</h4>
                  <p className="text-primary text-sm uppercase ">
                    Creative Strategist
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Why NZM: Tonal Transition */}
        <section className="bg-surface-container-lowest py-32 px-8 md:px-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary-container/10 to-transparent pointer-events-none" />
          <div className="max-w-screen-2xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}>
                <h2 className="text-5xl font-bold mb-12 leading-tight">
                  Why partners choose the <br />
                  <span className="text-secondary italic">
                    Midnight Luminary
                  </span>
                  .
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">
                        <i className="fa-solid fa-circle-check"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Uncompromising Fidelity
                      </h4>
                      <p className="text-on-surface/60">
                        We don't settle for "good enough." Every pixel is
                        debated, every interaction is tested for tactile
                        perfection.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">
                        <i className="fa-solid fa-bolt"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Performance as Priority
                      </h4>
                      <p className="text-on-surface/60">
                        Beautiful design shouldn't be slow. Our architectures
                        are optimized for sub-second load times globally.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">
                        <i className="fa-solid fa-user-group"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        True Partnership
                      </h4>
                      <p className="text-on-surface/60">
                        We become an extension of your internal vision,
                        architecting solutions that solve real business
                        problems.
                      </p>
                    </div>
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
                className="relative">
                <div className="aspect-square bg-surface-container-high rounded-4xl overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img
                    className="w-full h-full object-cover opacity-80"
                    data-alt="A collaborative meeting in a glass-walled conference room at night, silhouettes against city lights with purple glow reflections"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2DEDcXiFnDTse4L234dhZTHJKIGfErBYd_25Dcq_YD5PKcUrTVr6KOiSkM-LcAFwuLxCA3VLGcnBzeyYxonWEC9U37q4HBBBe-xKyNz8-V2lqEViZOLQ6vswSgUhb1JEIR2AqJXEKCx8lJei8C1yyJ9-X_s7522un82HCAvJSMOh5U_RrqvW8-8CN6UC7HtdpnLdigPnT3y_mv2sXosZqIr4yYHdoy-uf9i06EYs-gGjSUxvRoxoCIF1lC2woEdIlKaU-8mBfcf0"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 glass-effect bg-white/5 p-8 rounded-xl border border-white/10 max-w-xs">
                  <p className="text-on-surface font-headline italic text-lg">
                    "NZM didn't just rebuild our platform; they redefined our
                    digital presence in the luxury market."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary-container" />
                    <p className="text-xs uppercase tracking-widest font-bold">
                      CMO, Lusso Global
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <motion.section 
        initial={{opacity:0,y:-50}}
              whileInView={{opacity:1,y:0}}
                transition={{
                  duration: 0.9,
                  ease: "linear",
                }}
        className="py-40 px-8 text-center bg-surface">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black mb-12 ">
              Ready to build your <br />
              foundation?
            </h2>

           <div className="flex flex-row md:gap-6 gap-4 justify-center flex-wrap">

              <Link href={'/contact'} className="secondBtn w-[60%] md:w-auto cursor-pointer duration-500 px-6 py-2.5 md:px-10 md:py-4 md:mx-0  hover:scale-110 hover:-translate-1.25 rounded text-white font-bold  active:scale-90 transition-all md:text-[20px] hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
              Let's Talk Project
            </Link>
              <Link href={'/portfolio'} className="bg-surface-container-high w-[60%]  duration-500 hover:-translate-1.25 hover:scale-110 md:w-auto cursor-pointer px-6 py-2.5 md:px-10 md:py-4 md:mx-0    rounded text-white font-bold  active:scale-90 md:text-[20px] transition-all hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
              View Portfolio
            </Link>
             
            </div>
            
          </div>
        </motion.section>
      </main>
    </>
  );
}
