import MuxPlayer from "@mux/mux-player-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <main className="flex items-center sm:w-full w-full justify-center h-[86vh]">
        <div className="w-[98vw] flex justify-center items-center sm:w-[90vw] mt-7 bg-[#FDFCFE] h-[86vh] sm:p-8 p-5 rounded-2xl">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <div className="w-full sm:scale-180 md:scale-200 lg:scale-130 scale-380 h-full">
              <MuxPlayer
                playbackId="VQ19gKYWGLQ6cmnX9OtoTahgu003LUlciGPc3XjVrkrE"
                autoPlay="muted"
                loop
                muted
                playsInline
                controls={false}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            <div className="absolute inset-0 bg-black/30 z-5" />

            <div className="absolute inset-0 z-6 pointer-events-none opacity-20 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [bg-size:3px_3px]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white px-6">
              <p className="text-md md:text-lg text-white/70 mb-4">
                AI Workspace that actually understands
              </p>

              <h1 className="text-4xl md:text-8xl font-bold leading-tight max-w-5xl cabinet">
                Stop Guessing <br className="hidden md:block" />
                Start Knowing
              </h1>

              <p className="text-lg md:text-3xl text-white/80 mt-6 max-w-2xl">
                RAG-powered search, smart routing, and instant doubt solving,
                all in one place.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
