"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Real-Time 3D",
    description: "Powered by Three.js and HDR lighting for immersive visuals.",
  },
  {
    title: "Interactive Motion",
    description: "GSAP and Framer Motion bring your interface to life.",
  },
  {
    title: "Responsive Design",
    description: "Tailwind ensures pixel-perfect layout across all devices.",
  },
];

export default function Features() {
  return (
    <section className="py-32 px-8 text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 p-6 rounded-xl backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
            <p className="text-sm">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
