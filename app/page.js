"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import { ArrowDown } from "lucide-react";
import WhatSection from "./components/WhatParadoxDo";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }, 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const opacity = Math.min(scrollY / 400, 1);
  const scaleHero = Math.max(1 - scrollY / 1000, 0.85);
  const translateY = scrollY * 0.15;

  return (
    <div className="mx-auto">
    <Navbar />
      {/* HERO */}
      <section
        style={{
          transform: `scale(${scaleHero}) translateY(-${translateY}px)`,
        }}
        className="h-screen relative z-10 origin-top transition-transform duration-200"
      >
        <Hero />
      </section>

      {/* TEXT SECTION */}
      <section
        style={{ opacity }}
        className="flex flex-col items-center justify-center text-center w-[95vw] h-[80vh] mx-auto -mt-[40vh] relative z-0 transition-all duration-300 cabinet text-7xl rounded-2xl"
      >
        <span>Better responses</span>
        <span className="group cursor-pointer inline-block">
          with{" "}
          <span className="inline-block text-[#AB9FF2] transition-all duration-300 group-hover:scale-110 group-hover:rotate-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:drop-shadow-[0_0_20px_rgba(171,159,242,0.8)]">
            RAG
          </span>{" "}
          precision
        </span>
        <button className="flex items-center justify-center text-2xl text-[#363151] bg-[#AB9FF2] rounded-full font-semibold px-6 py-3 mt-10 gap-3">
          See More
          <ArrowDown className=" -rotate-125" />
        </button>
      </section>

      <section
        ref={sectionRef}
        className={`sm:m-0 w-full py-32 mb-20 rounded-4xl bg-white relative transition-all duration-700 ease-out
        ${isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
      >
        <WhatSection />
      </section>

      <section>
        <HowItWorks />
      </section>

      <section className="mb-0 sm:mb-10">
     <Footer/>
      </section>
    </div>
  );
};

export default Page;
