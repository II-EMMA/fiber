"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-6xl font-extrabold mb-6 leading-tight">
          Explore the Galaxy of Innovation
        </h1>
        <p className="text-xl mb-8">
          A cosmic experience powered by 3D, motion, and imagination. Scroll to
          discover.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}
