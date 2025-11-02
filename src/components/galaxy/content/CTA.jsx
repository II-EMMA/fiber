"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 px-8 text-white text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to launch your vision?
        </h2>
        <p className="mb-8 text-lg">
          This platform is built for creators, innovators, and dreamers. Let’s
          build something stellar.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}
