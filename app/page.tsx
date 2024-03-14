import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";

import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function page() {
  return (
    <>
      <div className="min-h-[400vh] bg-black">
        <div className="max-w-7xl mx-auto p-5 overflow-hidden">
          <div className="w-full absolute inset-0 h-screen">
            <BackgroundBeams />
          </div>
          <Navbar />
          <HeroSection />
        </div>
        <div className="max-w-7xl mx-auto p-5 overflow-hidden mt-2">
          <Skills />
        </div>
        <div className="max-w-7xl mx-auto p-5 overflow-hidden mt-2">
          <Projects />
        </div>
      </div>
    </>
  );
}
