import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-[#AB9FF2] sm:rounded-[40px]">
      <div className="w-[90vw] max-w-6xl mx-auto text-[#2f2a4a]">
        <div className="bg-white/30 backdrop-blur-md rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <div className="w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-4xl md:text-5xl cabinet 
                 outline-none placeholder:text-[#2f2a4a]/60"
            />
            <p className="text-[#2f2a4a]/70 mt-4">
              Sign up and join the growing Paradox community.
            </p>
          </div>

          <Link href={"/sign-in"}>
            <button
              className="px-8 py-4 rounded-full bg-white/60 hover:bg-white transition whitespace-nowrap"
            >
              Sign up
            </button>
          </Link>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-[#2f2a4a]/70">
              <li>Download</li>
              <li>Security</li>
              <li>Support</li>
              <li>Feature Requests</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-[#2f2a4a]/70">
              <li>Explore</li>
              <li>Learn</li>
              <li>Blog</li>
              <li>Docs</li>
              <li>Taxes</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#2f2a4a]/70">
              <li>About</li>
              <li>Careers</li>
              <li>Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Socials</h4>
            <ul className="space-y-2 text-[#2f2a4a]/70">
              <li>X.com</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Reddit</li>
              <li>Podcast</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#2f2a4a]/60">© 2026 Paradox</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
