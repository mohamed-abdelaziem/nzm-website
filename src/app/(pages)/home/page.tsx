"use client";
import TextCarousel from "@/src/components/TextCarousel/TextCarousel";
import Loader from "../../RouterLoading";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Loader />
      {/* start home */}

      <main>
        {/* Hero Section */}
        <motion.section
         initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: "linear",
          }}
          className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-surface">
          {/* Ambient Background Texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary-container rounded-full blur-[120px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
            <span className="inline-block px-4 py-1.5 mb-6 text-[0.75rem] font-bold tracking-[0.15em] text-primary border border-primary/20 rounded-full bg-primary/5">
              ESTABLISHED 2024
            </span>
            <h1 className="text-5xl md:text-8xl font-black  leading-15 md:leading-25 mb-8 text-on-surface ">
              Digital Architects for the
              <span className="text-primary italic">Modern Era</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
              We sculpt high-performance digital identities through precision
              engineering and avant-garde marketing strategies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link  href={'/contact'} className="mainBtn md:text-[20px] hover:-translate-1.25 transition-all duration-500 hover:scale-110 cursor-pointer px-6 hover:shadow-[0_0_30px_rgba(186,171,255,0.2)] py-2.5 rounded text-on-surface  font-bold  active:scale-90  shadow-[0_0_20px_rgba(82,11,77,0.4)]">
                Start Project
              </Link>
              <Link
                href={"/portfolio"}
                className=" md:text-[20px]   hover:scale-110 cursor-pointer group flex items-center gap-3 text-on-surface font-medium hover:text-primary  transition-all duration-500">
                View Showreel
                <span className=" material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-circle-play"></i>
                </span>
              </Link>
            </div>
          </div>
          {/* Infinite Scroll Marquee */}
          <TextCarousel text={'Innovation • Strategy • Architecture • Precision •'}/>
        </motion.section>
        {/* Services Section (Bento Grid) */}
        <section className="py-32 px-8 max-w-screen-2xl mx-auto bg-surface overflow-x-hidden">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
            initial={{opacity:0, y:-50}}
              whileInView={{opacity: 1 , y:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Expertise
              </h2>
              <p className="text-on-surface-variant text-lg">
                Harnessing the pulse of technology to define market leaders. We
                don't just follow trends; we architect them.
              </p>
            </motion.div>
            <Link href={'/services'} className="text-primary  font-bold flex items-center gap-2 cursor-pointer group">
              Explore all services
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-150">
            {/* SEO */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              className="md:col-span-4  bg-surface-container-low rounded-2xl p-10 flex flex-col justify-between hover:bg-surface-container-high transition-all group">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  <i className="fa-solid fa-magnifying-glass-chart"></i>
                </span>
                <h3 className="text-2xl font-bold mb-4">SEO Architecture</h3>
                <p className="text-on-surface-variant">
                  Strategic visibility engineering that places your brand at the
                  summit of organic discovery.
                </p>
              </div>
              <div className="mt-8 text-sm font-bold tracking-widest text-outline group-hover:text-primary transition-colors">
                STRATEGY 01
              </div>
            </motion.div>
            {/* Ads (Large Feature) */}
            <motion.div
             initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            
            className="md:col-span-8 bg-surface-container-low rounded-2xl p-10 relative overflow-hidden flex items-end group">
              <div
                className="absolute inset-0 z-0 opacity-40 group-hover:scale-110 transition-transform duration-700 bg-cover bg-center"
                data-alt="close-up of vibrant futuristic digital data display with neon purple and blue glowing lines and abstract patterns"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWQTeKy3p8j70z9JzOPTK7IlMumhMoszf094cOkcPUYscNuW0mPnvd-3ovKY7ajPFvkzTO5-dc6uidOq5UY2GZSoXNK0IJ0QaqTzkPvcBg8kgmy8qe0afRkkS0X3w_Hf0tYSlo2acLEL9MVjLtxmQ6MEc8_SqVBXt4tUxgGvg8LGXhaIp9XsBXaSUdrv0qAsHmjyjZjQyAst7t61z6hJViiizP2LsJuHl-XmMIHdNil9enFhCqn3fEeDLgYaTgMVX6DIsmBKCO_aU")',
                }}
              />
              <div className="absolute inset-0 bg-linear-to-r from-surface via-surface/40 to-transparent z-10" />
              <div className="relative z-20 w-full flex justify-between items-end">
                <div className="max-w-md">
                  <h3 className="text-3xl font-bold mb-4">Precision Ads</h3>
                  <p className="text-on-surface-variant">
                    High-conversion performance marketing using algorithmic
                    targeting and cognitive behavioral insights.
                  </p>
                </div>
                <span className="material-symbols-outlined text-5xl text-primary ">
                  <i className="fa-solid fa-chart-column"></i>
                </span>
              </div>
            </motion.div>
            {/* Social Media */}
            <motion.div
             initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="md:col-span-7 bg-surface-container-low rounded-2xl p-10 flex md:items-center md:flex-row flex-col  gap-8 group">
              <div className="w-24 h-24 rounded-full bg-secondary-container flex items-center   justify-center shrink-0">
                <span className="material-symbols-outlined text-4xl">
                  <i className="fa-brands fa-buffer"></i>
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Social Narratives</h3>
                <p className="text-on-surface-variant">
                  Building digital communities through rhythmic content and
                  authentic brand storytelling.
                </p>
              </div>
            </motion.div>
            {/* Branding */}
            <motion.div
             initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="md:col-span-5 bg-agency-gradient rounded-2xl p-10 flex flex-col justify-center text-on-surface relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 opacity-20">
                <span className="material-symbols-outlined text-[12rem]">
                  verified
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">
                Core Branding
              </h3>
              <p className="text-on-surface/80 relative z-10">
                Visual identities that resonate. We define the aesthetic soul of
                your business.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Portfolio Preview Grid */}
        <section className="py-32 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto px-8">
            <motion.div 
            initial={{opacity:0, y:-50}}
              whileInView={{opacity: 1 , y:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
            className="text-center mb-20">
              <span className="text-primary font-bold tracking-widest text-sm block mb-4">
                PORTFOLIO
              </span>
              <h2 className="text-4xl md:text-6xl font-black">
                Iconic Collaborations
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Case Study 1 */}
              <motion.div
              
               initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
               className="group cursor-pointer">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-6 bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-alt="modern minimalist interior of a high-tech studio with purple accent lighting and sleek black tech equipment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT6WDsSdAZXZ5epExLFI7uTzO2x_WNvkV37OOrY1WwUqv6CMrHywGbP5uyydV7XREjpiQ1gHlJNTPSihfgucwXv_zCvlhAJDZgCn--JV5DWzva8iGZ2BospdCZFmLN1y-8E-IPGmaMMeaz3JCJHs5IzyXg9NHD_-DWDQkD7qvFMrewW1Tbhy_YHExF0yU0NPe4w7ROpXFcC8sNdcpVyDv2_bQZwJRvkO2YIhAFJOc2qdYsR77OK3457Bn8klanXefFrt0-0x27Py4"
                  />
                  <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      The Nexus Rebrand
                    </h4>
                    <p className="text-on-surface-variant font-medium">
                      Fintech / Identity / Web Architecture
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary transition-colors">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </motion.div>
              {/* Case Study 2 */}
              <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
              
               className="group cursor-pointer md:mt-24">
                <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-6 bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    data-alt="abstract liquid metallic fluid swirling with deep purple and indigo reflections in a studio setting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1Ux5Lu6s_5k9rdyOCkQG2n_K47FxBxbFG-4PBdNBhajOKRE5M8a1BimBVM2OnYKcD0jL0jK1c94A_yEnQsTxvewnaTy7GJ1UkAPiIqQc2oQQJQwz5CO7QnGgGcyzncTIq3pEwfladEGNSMa8yOuusXvCiNyJBhTj8CoeUbuSpeqWhmZpTiJXKCo_jWHb5kdLyAAfmhADlJFTq5FU_C1H6tkdlC0O9p3Hkd-p5eUeVCgkQ0to8d1819SrG7_VtqAGSn64ulTH6XU"
                  />
                  <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      Lumina Cosmetics
                    </h4>
                    <p className="text-on-surface-variant font-medium">
                      E-commerce / Global Campaign / Content Strategy
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-3xl text-outline-variant group-hover:text-primary transition-colors">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-4xl font-bold mb-8">
                  Voices of <br />
                  Authority
                </h2>
                <div className="w-20 h-1 bg-primary mb-8" />
              </div>
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                 initial={{opacity:0, x:-50}}
              whileInView={{opacity: 1 , x:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
                className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
                  <div className="text-primary mb-6">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}>
                      <i className="fa-solid fa-quote-right"></i>
                    </span>
                  </div>
                  <p className="text-lg text-on-surface mb-8 leading-relaxed">
                    "NZM didn't just market our product; they redefined our
                    category. The level of strategic depth they bring is
                    unmatched in the agency landscape."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="professional portrait of a confident male executive in a dark tailored suit with subtle office background"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDevmQrKwr6muwACYb5-u2fvtTkwZVOC8ap6Sd_Ls8a-wXXiYpYqhpaf6f07ZquEtClHwIJNViazVW1KJJtE7LPe4v3CXQAuy7faqDyrurQqkj5hmVczkH2smPH0fdpy6qHXLlu91gPmFJgjIxiJIiiIbfYgNOAPa56ILSHT2H0SUgZU5Q2b8rAfIfVDn3r_CIng91xBCXQHPbEqLishLJaJc9G34GLEw_M0X9fmFQNZiOf8cBYe7Ppw8DEHyC3eCObvjzx_nzW38I"
                      />
                    </div>
                    <div>
                      <div className="font-bold">Marcus Sterling</div>
                      <div className="text-xs text-outline tracking-widest uppercase">
                        CEO, Nexus Systems
                      </div>
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
              className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
                  <div className="text-primary mb-6">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: '"FILL" 1' }}>
                      <i className="fa-solid fa-quote-right"></i>
                    </span>
                  </div>
                  <p className="text-lg text-on-surface mb-8 leading-relaxed">
                    "Their architecture approach to digital marketing resulted
                    in a 300% growth in high-intent leads within the first
                    quarter."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-container-high overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="portrait of a professional woman with a warm expression in a modern creative workspace"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKYzUUVHm0HYn4TS2MyTU5mwOwqdQT__DBnZnJsUj1lBNIkDJzeJ3EV7kmEjU4S3V9FmpzgrszhjaRUmcqx5QqXAInxrbSkGPkA-AP-_Xc4yAQnCPKWXpsfqhIi7tq1UvZtghOPrvE3O-Ur_b7y43RJH68pHJAex_cOSxwau15aiXdchylkQG8KiC5wag0ukRjB2dQhfrYipmtJW_giVAERlq63rT1zeT4DFOfmvbxX5XHuRdQ7k6Brm3mK4SPKYSObn0d1qfYVk"
                      />
                    </div>
                    <div>
                      <div className="font-bold">Elara Vance</div>
                      <div className="text-xs text-outline tracking-widest uppercase">
                        Marketing Dir, Lumina
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Banner */}
        <motion.section
         initial={{opacity:0, y:-50}}
              whileInView={{opacity: 1 , y:0}}
              transition={{
                duration: 0.9,
                ease: "linear",
              }}
        className="py-20 px-8">
          <div className="max-w-screen-2xl mx-auto bg-agency-gradient rounded-4xl p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 h-full w-full">
                <div className="border-r border-on-surface/30" />
                <div className="border-r border-on-surface/30" />
                <div className="border-r border-on-surface/30" />
                <div className="border-r border-on-surface/30" />
                <div className="border-r border-on-surface/30" />
                <div />
              </div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none">
                Ready to Build <br />
                Your Future?
              </h2>
              <p className="text-xl text-on-surface/90 max-w-xl mx-auto mb-12">
                Join the elite brands architected by NZM. Let's start your
                digital transformation today.
              </p>
              <Link href={'/contact'} className="secondBtn md:text-[20px] cursor-pointer px-6 py-2.5 md:px-10 md:py-4 md:mx-0  md:w-auto  rounded text-white font-bold scale-95 active:scale-90 transition-transform  hover:shadow-[0_0_30px_rgba(186,171,255,0.2)]">
                Start Project
              </Link>
            </div>
          </div>
        </motion.section>
      </main>

      {/* end home */}
    </>
  );
}
