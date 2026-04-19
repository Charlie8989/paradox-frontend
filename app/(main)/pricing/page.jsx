import Card from "@/app/components/CardAnimation";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const pricing = () => {
  return (
    <>
      <Navbar />
      <section className="w-full min-h-screen flex items-center justify-center py-12">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl px-6 md:px-12 gap-6">
         <Card>
          <div className="min-w-[280px] sm:min-w-[320px] lg:min-h-[70vh] rounded-2xl bg-white border-2 border-[#AB9FF2] flex flex-col items-center p-6 md:p-8 justify-between">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xl text-[#504688] font-semibold">
                Starter
              </span>

              <span className="text-xs bg-[#F3F0FF] text-[#504688] px-3 py-1 rounded-full">
                Best for beginners
              </span>

              <p className="text-sm text-gray-500">
                Perfect for beginners getting started with basic tools.
              </p>

              <span className="text-4xl md:text-5xl text-[#504688]">$5</span>
              <span className="text-sm text-gray-500">per month</span>

              <p className="text-xs text-gray-400">
                Cancel anytime. No hidden fees.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[#504688] text-center text-sm mt-4">
              <li>
                <span className="font-medium">Basic Tools Access</span>
                <p className="text-xs text-gray-500">
                  Access essential AI tools to get started quickly.
                </p>
              </li>
              <li>
                <span className="font-medium">Limited Usage</span>
                <p className="text-xs text-gray-500">
                  Ideal for light usage and personal projects.
                </p>
              </li>
              <li>
                <span className="font-medium">Email Support</span>
                <p className="text-xs text-gray-500">
                  Get help within 24–48 hours.
                </p>
              </li>
            </ul>

            <button className="mt-6 w-full py-2.5 rounded-full bg-[#AB9FF2] text-white font-semibold text-sm">
              Get Started
            </button>
          </div>
          </Card>

          <Card>
          <div className="min-w-[280px] sm:min-w-[320px] lg:min-h-[70vh] rounded-2xl bg-white border-2 border-[#AB9FF2] flex flex-col items-center p-6 md:p-8 justify-between">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xl text-[#504688] font-semibold">Pro</span>

              <span className="text-xs bg-[#AB9FF2] text-white px-3 py-1 rounded-full">
                Most Popular
              </span>

              <p className="text-sm text-gray-500">
                Best for professionals who need full power and speed.
              </p>

              <span className="text-4xl md:text-5xl text-[#504688]">$15</span>
              <span className="text-sm text-gray-500">per month</span>

              <p className="text-xs text-gray-400">
                Cancel anytime. No hidden fees.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[#504688] text-center text-sm mt-4">
              <li>
                <span className="font-medium">All Tools Access</span>
                <p className="text-xs text-gray-500">
                  Unlock every AI tool available on the platform.
                </p>
              </li>
              <li>
                <span className="font-medium">Unlimited Usage</span>
                <p className="text-xs text-gray-500">
                  No limits—build and experiment freely.
                </p>
              </li>
              <li>
                <span className="font-medium">Priority Support</span>
                <p className="text-xs text-gray-500">
                  Faster responses with dedicated assistance.
                </p>
              </li>
            </ul>

            <button className="mt-6 w-full py-2.5 rounded-full bg-[#AB9FF2] text-white font-semibold text-sm">
              Get Started
            </button>
          </div>
          </Card>

          <Card>
          <div className="min-w-[280px] sm:min-w-[320px] lg:min-h-[70vh] rounded-2xl bg-white border-2 border-[#AB9FF2] flex flex-col items-center p-6 md:p-8 justify-between">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-xl text-[#504688] font-semibold">
                Enterprise
              </span>

              <span className="text-xs bg-[#F3F0FF] text-[#504688] px-3 py-1 rounded-full">
                For teams & scale
              </span>

              <p className="text-sm text-gray-500">
                Built for businesses that need advanced control and scalability.
              </p>

              <span className="text-4xl md:text-5xl text-[#504688]">$29</span>
              <span className="text-sm text-gray-500">per month</span>

              <p className="text-xs text-gray-400">
                Custom billing & dedicated support.
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-[#504688] text-center text-sm mt-4">
              <li>
                <span className="font-medium">Custom Solutions</span>
                <p className="text-xs text-gray-500">
                  Tailored AI workflows for your business needs.
                </p>
              </li>
              <li>
                <span className="font-medium">Team Access</span>
                <p className="text-xs text-gray-500">
                  Collaborate with your entire team seamlessly.
                </p>
              </li>
              <li>
                <span className="font-medium">24/7 Support</span>
                <p className="text-xs text-gray-500">
                  круглосуточная помощь whenever you need it.
                </p>
              </li>
            </ul>

            <button className="mt-6 w-full py-2.5 rounded-full bg-[#AB9FF2] text-white font-semibold text-sm">
              Contact Us
            </button>
          </div>
          </Card>
        </div>
      </section>
      <div className="mx-4 mb-4">
        <Footer />
      </div>
    </>
  );
};

export default pricing;
