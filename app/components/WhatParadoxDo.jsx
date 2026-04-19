import ScrollReveal from "@/components/ScrollReveal";
import { ArrowDown } from "lucide-react";

export default function WhatSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl cabinet mb-20 leading-tight">
          What <span className="text-[#AB9FF2]">Paradox</span> does
        </h2>

        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={10}
          rotationEnd="center center"
          wordAnimationEnd="center center"
          containerClassName="w-full max-w-5xl"
          textClassName="text-[#2f2a4a] text-3xl md:text-5xl leading-relaxed"
        >
          Paradox grounds AI in real data, intelligently balances multiple
          models, and delivers reliable, context-aware answers you can actually
          trust.
        </ScrollReveal>

        <div className="mt-16 max-w-3xl space-y-6 text-lg md:text-xl text-[#504688] leading-relaxed">
          <p>
            <ArrowDown className="inline mr-3 -rotate-90" />
            Instead of relying on a single model, Paradox dynamically routes and
            combines models to optimize for accuracy, reasoning, and speed.
          </p>
          <p>
            <ArrowDown className="inline mr-3 -rotate-90" />
            It retrieves only the most relevant context from your data, ensuring
            every response is grounded and meaningful.
          </p>
          <p>
            <ArrowDown className="inline mr-3 -rotate-90" />
            The result is AI that feels less like a guess and more like a system
            you can depend on.
          </p>
        </div>
      </div>
    </section>
  );
}
