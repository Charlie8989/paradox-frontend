"use client";
import Navbar from "@/app/components/Navbar";
import { ArrowDown } from "lucide-react";
import React from "react";

const ToolsPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#F5F2FF] px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl cabinet text-[#504688] mb-4">
            AI <span className="text-[#AB9FF2]">Tools</span>
          </h1>
          <p className="text-gray-500 max-w-xl">
            A unified platform to route, retrieve, and understand AI responses.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="border-b border-[#AB9FF2]/30 pb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl cabinet text-[#504688] mb-4">
                AI Load Balancer
              </h2>
              <p className="text-gray-500 mb-6">
                Intelligently route user queries to the most optimal AI model
                based on cost, speed and performance.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  OpenAI
                </span>
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  Anthropic
                </span>
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  Groq
                </span>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Smart model selection</li>
                <li>Latency-aware routing</li>
                <li>Cost optimization</li>
              </ul>
            </div>

            <button className="flex gap-2 px-8 py-4 rounded-full bg-[#AB9FF2] text-white hover:bg-[#978BEB] transition whitespace-nowrap">
              Use Tool
              <ArrowDown className=" -rotate-125" />
            </button>
          </div>

          <div className="border-b border-[#AB9FF2]/30 pb-12 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="text-3xl cabinet text-[#504688] mb-4">
                PDF RAG Analyzer
              </h2>
              <p className="text-gray-500 mb-6">
                Upload PDFs and chat with your documents using retrieval-based
                AI with full transparency.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  Embeddings
                </span>
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  Vector DB
                </span>
                <span className="px-3 py-1 bg-[#AB9FF2]/20 text-[#504688] rounded-full text-sm">
                  Semantic Search
                </span>
              </div>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Upload and index PDFs</li>
                <li>Ask contextual questions</li>
                <li>View sources and citations</li>
              </ul>
            </div>

            <button className="flex gap-2 px-8 py-4 rounded-full bg-[#AB9FF2] text-white hover:bg-[#978BEB] transition whitespace-nowrap">
              Analyze
              <ArrowDown className=" -rotate-125" />
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-24 text-center">
          <h2 className="text-3xl cabinet text-[#504688] mb-4">
            One Platform. Total Control.
          </h2>
          <p className="text-gray-500">
            Route queries intelligently, retrieve answers from your data, and
            stay transparent with model usage and cost.
          </p>
        </div>
      </div>
    </>
  );
};

export default ToolsPage;
