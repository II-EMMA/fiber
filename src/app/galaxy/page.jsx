"use client";

import CTA from "@/components/galaxy/content/CTA";
import Features from "@/components/galaxy/content/Features";
import Footer from "@/components/galaxy/content/Footer";
import Hero from "@/components/galaxy/content/Hero";
import GalaxyScene from "@/components/galaxy/GalaxyScene";
import { state } from "@/components/galaxy/store";

export default function GalaxyPage() {
  return (
    <div
      className="relative w-full bg-black min-h-screen"
      onPointerMove={(e) => {
        state.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
        state.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
      }}
    >
      <GalaxyScene />
      <main className="relative z-10 text-white">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
