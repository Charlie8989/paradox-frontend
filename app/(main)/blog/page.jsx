"use client";
import Navbar from "@/app/components/Navbar";
import { ArrowDown } from "lucide-react";
import React from "react";

const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-[#F5F2FF] px-6 md:px-16 py-20">

      <div className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl md:text-6xl cabinet text-[#504688] mb-4">
          Blog
        </h1>
        <p className="text-gray-500 max-w-xl">
          Thoughts, updates and deep dives into AI systems, tools and building smarter workflows.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-16">

        <div className="border-b border-[#AB9FF2]/30 pb-10 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl cabinet text-[#504688] mb-2">
              Building an AI Load Balancer from Scratch
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Learn how to route requests across multiple models for better cost, speed and reliability.
            </p>
            <p className="text-xs text-gray-400">
              April 2026 • 6 min read
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#AB9FF2] text-white hover:bg-[#978BEB] transition whitespace-nowrap">
            Read  <ArrowDown className=" -rotate-125" />
          </button>
        </div>

        <div className="border-b border-[#AB9FF2]/30 pb-10 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl cabinet text-[#504688] mb-2">
              How RAG Works with PDFs
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              A practical guide to embeddings, vector search and building document-aware AI systems.
            </p>
            <p className="text-xs text-gray-400">
              April 2026 • 5 min read
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#AB9FF2] text-white hover:bg-[#978BEB] transition whitespace-nowrap">
            Read  <ArrowDown className=" -rotate-125" />
          </button>
        </div>

        <div className="border-b border-[#AB9FF2]/30 pb-10 flex flex-col md:flex-row md:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl cabinet text-[#504688] mb-2">
              Choosing the Right AI Model for Your App
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Compare performance, cost and use-cases across modern AI providers.
            </p>
            <p className="text-xs text-gray-400">
              March 2026 • 4 min read
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#AB9FF2] text-white hover:bg-[#978BEB] transition whitespace-nowrap">
            Read  <ArrowDown className=" -rotate-125" />
          </button>
        </div>

      </div>

    </div>
    </>
  );
};

export default BlogPage;