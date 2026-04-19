"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const [style, setStyle] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const itemsRef = useRef([]);
  const router = useRouter();

  const items = [
    { name: "Tools", path: "/tools" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Affiliate", path: "/affiliate" },
  ];

  const handleHover = (index) => {
    const el = itemsRef.current[index];
    setStyle({
      width: el.offsetWidth,
      height: el.offsetHeight,
      transform: `translateX(${el.offsetLeft}px)`,
      top: el.offsetTop,
    });
  };

  return (
    <div className="w-full sm:mt-5 sticky top-0 z-50 h-[8vh] flex justify-between items-center px-4 md:px-8">
      <Link href={"/"}>
        <span className="text-2xl md:text-3xl cabinet text-[#504688] px-6 py-1 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm">
          Paradox
        </span>
      </Link>

      <div
        className="relative hidden md:block"
        onMouseLeave={() => setStyle({ width: 0 })}
      >
        <div className="absolute inset-0 bg-[#FDFCFE] rounded-full"></div>

        <div
          className="absolute left-0 bg-[#e0dbfa] rounded-full transition-all duration-300"
          style={style}
        />

        <ul className="gap-8 px-8 py-2 flex relative z-20">
          {items.map((item, index) => (
            <li
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              onMouseEnter={() => handleHover(index)}
              className="px-4 py-2 cursor-pointer"
              onClick={() => router.push(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {isSignedIn ? (
        <button
          onClick={() => router.push("/profile")}
          className="hidden md:block p-2 hover:opacity-80 rounded-full transition-opacity"
          title="Profile"
        >
          <img
            src={user?.imageUrl}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </button>
      ) : (
        <button
          onClick={() => router.push("/sign-in")}
          className="hidden md:block py-3 px-5 text-[#100819] bg-[#AB9FF2] rounded-full font-semibold"
        >
          Get Started
        </button>
      )}

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-4 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm md:hidden flex flex-col gap-1.5 cursor-pointer"
      >
        <span
          className={`w-6 h-0.5 bg-[#504688] ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-[#504688] ${mobileMenuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-[#504688] ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="absolute top-[8vh] left-0 right-0 bg-[#FDFCFE] border-t-2 border-[#e0dbfa] md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 p-6">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 cursor-pointer text-[#504688] font-medium hover:bg-[#e0dbfa] rounded-lg"
              >
                {item.name}
              </li>
            ))}

            {isSignedIn ? (
              <button
                onClick={() => router.push("/profile")}
                className="w-full py-3 px-5 text-[#100819] bg-[#AB9FF2] rounded-full font-semibold mt-2"
              >
                Visit Profile
              </button>
            ) : (
              <button
                onClick={() => router.push("/sign-in")}
                className="w-full py-3 px-5 text-[#100819] bg-[#AB9FF2] rounded-full font-semibold mt-2"
              >
                Get Started
              </button>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
