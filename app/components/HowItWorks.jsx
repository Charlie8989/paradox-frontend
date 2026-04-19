"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Connect your data",
    desc: "Paradox links with your documents, APIs, or databases, turning raw information into a structured knowledge layer ready for retrieval.",
  },
  {
    title: "Retrieve the right context",
    desc: "Instead of guessing, Paradox fetches the most relevant pieces of information in real-time based on the query.",
  },
  {
    title: "Balance AI models",
    desc: "Different models are evaluated and combined dynamically to optimize for accuracy, reasoning, and speed.",
  },
  {
    title: "Generate reliable output",
    desc: "The final response is built using grounded context, reducing hallucinations and improving trust.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.8; // when animation should start
      const end = rect.height + windowHeight * 0.2;

      const current = start - rect.top;
      const p = Math.min(Math.max(current / end, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} className="w-full py-40">
      <div className="w-[90vw] max-w-5xl mx-auto relative">
        <h2 className="text-5xl md:text-6xl cabinet mb-32">
          How <span className="text-[#AB9FF2]">Paradox</span> works
        </h2>

        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-white/10" />

        <div
          style={{ height: `${progress * 100}%` }}
          className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#AB9FF2]"
        />

        <div className="flex flex-col gap-40">
          {steps.map((step, i) => {
            const trigger = (i + 1) / steps.length;
            const active = progress > trigger - 0.2;

            return (
              <div
                key={i}
                className={`relative flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 transition-all duration-300
                  ${
                    active
                      ? "bg-[#AB9FF2] border-[#AB9FF2] scale-125"
                      : "bg-transparent border-white/30"
                  }`}
                />

                <div
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0px)" : "translateY(40px)",
                  }}
                  className="w-[45%] transition-all duration-500"
                >
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#504688] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
