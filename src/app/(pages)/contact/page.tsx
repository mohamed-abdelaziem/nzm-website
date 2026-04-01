"use client";
import { useForm } from "react-hook-form";
import Loader from "../../RouterLoading";
import { motion } from "framer-motion";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const scheme = z.object({
    name: z.string({ message: "Name Is Required" }).min(1, { message: "Name Must Be At Least 4 Chars" }),
  email: z.string().min(1,{message:'Email Is Required'}).email({ message: "Please Enter Valid Email" }),
  phone: z
    .string()
    .min(1, { message: "Phone Number Is Required" })
    .min(7, { message: "Please Enter Valid Phone Number" }),
  message: z
    .string({ message: "Message Is Required" })
    .min(1, { message: "Message Is Required" })
    .min(3, { message: "Message Must Be At Least 3 Chars" }),
  projectType: z
    .string({ message: "Project Type Is Required" })
    .min(1, { message: "Project Type Is Required" }),
});

type Input = {
  name: string;
  email: string;
  phone: string;
  message: string;
  projectType: string;
};

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { register, formState, handleSubmit } = useForm<Input>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      projectType: "Brand Identity",
    },
    resolver: zodResolver(scheme),
    mode: "all",
  });

  async function onSubmit(data: Input) {
    setIsLoading(true);
    const dataValue = data;
    try {
      const response = await axios.post(
        "https://nzm-back-end.vercel.app/api/contact",
        dataValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (response.status == 200) {
        setIsLoading(false);
        toast.success("Message sent successfully!", {
          style: {
            background: "var(--color-agency-gradiant)",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: "0 0 20px rgba(95,15,185,0.4)",
          },
        });
      } else {
        setIsLoading(false);
        toast.error("Something went wrong!", {
          style: {
            background: "var(--color-surface-container)",
            color: "var(--color-on-error-container)",
            border: "1px solid var(--color-error)",
            borderRadius: "12px",
            padding: "12px 16px",
          },
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-surface)",
          },
        });
      }
    } catch (err: any) {
      setIsLoading(false);
      toast.error("Something went wrong!", {
        style: {
          background: "var(--color-surface-container)",
          color: "var(--color-on-error-container)",
          border: "1px solid var(--color-error)",
          borderRadius: "12px",
          padding: "12px 16px",
        },
        iconTheme: {
          primary: "var(--color-error)",
          secondary: "var(--color-surface)",
        },
      });
    }
  }

  return (
    <>
      <Loader />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Header Section */}
        <header className="mb-20">
          <span className="text-primary font-label text-xs tracking-[0.2em] uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter text-on-surface mb-6 leading-tight">
            Let's architect your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary-container">
              digital legacy.
            </span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
            Whether you have a fully-formed brief or just the spark of an idea,
            we're here to translate your vision into a premium digital
            experience.
          </p>
        </header>
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Form Section */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "linear",
            }}
            className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-4xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full" />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* name input */}
                <div className="space-y-2 w-full">
                  <label className="text-xs font-label uppercase tracking-widest text-outline ml-1">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary/50 text-on-surface rounded-xl py-4 px-5 transition-all outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                  {/* Name Error */}
                  {formState.errors?.name && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm animate-fadeIn">
                      <svg
                        className="w-5 h-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                        />
                      </svg>
                      <span>{formState.errors?.name.message}</span>
                    </div>
                  )}
                </div>

                {/* email input */}
                <div className="space-y-2">
                  <label className="text-xs font-label uppercase tracking-widest text-outline ml-1">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary/50 text-on-surface rounded-xl py-4 px-5 transition-all outline-none"
                    placeholder="john@example.com"
                    type="email"
                  />
                  {/* Email Error */}
                  {formState?.errors?.email && (
                    <div className="flex items-center gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm animate-fadeIn">
                      <svg
                        className="w-5 h-5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                        />
                      </svg>
                      <span>{formState?.errors?.email?.message}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* phone input */}
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-outline ml-1">
                  Phone
                </label>
                <input
                  {...register("phone")}
                  name="phone"
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary/50 text-on-surface rounded-xl py-4 px-5 transition-all outline-none"
                  placeholder="Please Enter Your Phone Number"
                  type="tel"
                />
                {/* Phone Error */}
                {formState.errors.phone && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm animate-fadeIn">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      />
                    </svg>
                    <span>{formState.errors.phone?.message}</span>
                  </div>
                )}
              </div>

              {/* project type input */}
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-outline ml-1">
                  Project Type
                </label>
                <select
                  {...register("projectType")}
                  
                  defaultValue='Digital Architecture & Web'
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary/50 text-on-surface rounded-xl py-4 px-5 transition-all outline-none appearance-none">
                  <option  value={`Digital Architecture & Web`}>Digital Architecture &amp; Web</option>
                  <option value={`Brand Identity`}>Brand Identity</option>
                  <option value={`Mobile Experiences`}>Mobile Experiences</option>
                  <option value={`Full Scale Consulting`}>Full Scale Consulting</option>
                </select>
                {/* Project Type Error */}
                {formState.errors?.projectType && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm animate-fadeIn">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      />
                    </svg>
                    <span>{formState.errors?.projectType.message}</span>
                  </div>
                )}
              </div>

              {/* message input */}
              <div className="space-y-2">
                <label className="text-xs font-label uppercase tracking-widest text-outline ml-1">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  className="w-full bg-surface-container-lowest border-none ring-1 ring-outline-variant/30 focus:ring-primary/50 text-on-surface rounded-xl py-4 px-5 transition-all outline-none resize-none"
                  placeholder="Tell us about your vision..."
                />
                {/* Project Type Error */}
                {formState.errors.message && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-red-700 bg-red-50 border border-red-200 p-3 rounded-lg shadow-sm animate-fadeIn">
                    <svg
                      className="w-5 h-5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                      />
                    </svg>
                    <span>{formState.errors.message.message}</span>
                  </div>
                )}
              </div>

              <button
              disabled={isLoading || !formState.isValid}
                className={`w-full cursor-pointer md:w-auto bg-linear-to-r from-primary-container to-secondary-container text-on-surface font-bold py-5 px-12 rounded-xl scale-95 active:scale-90 transition-transform shadow-xl hover:shadow-primary-container/20 group flex items-center justify-center gap-3 disabled:opacity-50`}
                type="submit">
                {isLoading == true ? 'Loading....' :
                <>
                <span>Send Message</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
                </>
                }
              </button>
              
            
            
            </form>
          </motion.section>
          {/* Sidebar Info Section */}
          <motion.aside
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: "linear",
            }}
            className="lg:col-span-5 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-surface-container-high p-8 rounded-4xl space-y-10 border border-outline-variant/10">
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">
                        <i className="fa-solid fa-envelope"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-label uppercase tracking-widest text-outline mb-1">
                        Email Us
                      </p>
                      <p className="text-on-surface font-medium selection:bg-primary/30">
                        hello@nzm-architects.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-label uppercase tracking-widest text-outline mb-1">
                        Call Us
                      </p>
                      <p className="text-on-surface font-medium">
                        +1 (555) 892-0192
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-surface transition-colors">
                      <span className="material-symbols-outlined">
                        <i className="fa-solid fa-location-dot"></i>
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-label uppercase tracking-widest text-outline mb-1">
                        Our Studio
                      </p>
                      <p className="text-on-surface font-medium">
                        128 Midnight Plaza, Suite 402
                        <br />
                        New York, NY 10013
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Integration Mockup */}
            <div className="relative h-64 rounded-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer group shadow-2xl">
              <img
                className="w-full h-full object-cover"
                data-alt="Dark aesthetic stylized satellite map view of New York City with purple glowing location pin marker"
                data-location="New York City"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPAmd837J0FxVV3bMnYo_eIB2R3-5sOpRKntnXpM-JFnHiVKPhIruN-tTucDAh0JYzbfcR6bqJPenUSoXPqVN0QlVcbJxpZ6NO2Wc7VLGZb9SlS34tpWIH4zNyGfn_h3uibD6Q-knerGhbQVt_PfQrc3qLxY4WhWksyjq1MZuzGuZ0Zm7mOAxa1Nd2gCmd1OablzFhBOHIixI3TFYQRO7RURmp306SJUSzfL6fJa9aA1UEQaC2WlSJCyxlxtQJAhOpeWtD_PmZ0qg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="bg-primary-container/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-on-surface">
                    Main Studio
                  </span>
                  <h4 className="text-lg font-bold mt-1">Lower Manhattan</h4>
                </div>
                <div className="w-10 h-10 bg-on-surface text-surface rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined">
                    <i className="fa-solid fa-up-right-from-square"></i>
                  </span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </main>
    </>
  );
}
