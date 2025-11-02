"use client";

import { Logo } from "@pmndrs/branding";
import {
  AiOutlineHighlight,
  AiOutlineShopping,
  AiFillCamera,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { useSnapshot } from "valtio";
import { motion, AnimatePresence } from "framer-motion";
import { state } from "./store";

export default function Overlay() {
  const snap = useSnapshot(state);

  const transition = { type: "spring", duration: 0.8 };
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="w-full h-full pointer-events-auto">
        <motion.header
          initial={{ opacity: 0, y: -120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1.8, delay: 1 }}
          className="fixed top-0 left-0 w-full p-10 flex justify-between items-center"
        >
          <Logo width="40" height="40" />
          <AiOutlineShopping size="3em" />
        </motion.header>

        <AnimatePresence>
          {snap.intro ? (
            <Intro key="main" config={config} />
          ) : (
            <Customizer key="custom" config={config} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Intro({ config }) {
  return (
    <motion.section
      {...config}
      className="absolute inset-0 flex flex-col justify-center items-start px-[5vw] pt-[5vh]"
    >
      <div className="mt-[5vh]">
        <h1 className="font-extrabold italic text-[20vh] leading-[15vh] tracking-[-6px] w-[30%] font-['Nunito_Sans']">
          LET'S DO IT.
        </h1>
      </div>
      <div className="relative -top-[25%] left-[300px]">
        <p className="w-[350px] mb-12 leading-6">
          Create your unique and exclusive shirt with our brand-new 3D
          customization tool. <strong>Unleash your imagination</strong> and
          define your own style.
        </p>
        <button
          className="bg-black text-white font-bold uppercase rounded px-6 py-4 flex items-center gap-4 transition-all duration-300 hover:scale-110 hover:shadow-inner hover:shadow-black"
          onClick={() => (state.intro = false)}
        >
          CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
        </button>
      </div>
    </motion.section>
  );
}

function Customizer({ config }) {
  const snap = useSnapshot(state);

  return (
    <motion.section
      {...config}
      className="absolute inset-0 flex flex-col justify-end items-center mb-[25px]"
    >
      {/* Color Picker */}
      <div className="absolute bottom-[20px] flex gap-[10px] mb-[20px]">
        {snap.colors.map((color) => (
          <div
            key={color}
            className="w-[30px] h-[30px] rounded-full border-2 border-white transition-transform duration-[600ms] ease-[cubic-bezier(0.85,0,0.15,1)] hover:scale-125 cursor-pointer"
            style={{ background: color }}
            onClick={() => (state.selectedColor = color)}
          />
        ))}
      </div>

      {/* Decal Picker */}
      <div className="absolute left-[50px] bottom-[40px] flex gap-[20px]">
        {snap.decals.map((decal) => (
          <div
            key={decal}
            className="w-[24px] cursor-pointer transition-all duration-200 ease-in-out hover:scale-125"
            onClick={() => (state.selectedDecal = decal)}
          >
            <img
              src={`/${decal}_thumb.png`}
              alt="brand"
              className="filter grayscale invert brightness-[5.5] hover:filter-none"
            />
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <button
        className="absolute bottom-[40px] right-[40px] text-white px-6 py-3 rounded flex items-center gap-2"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          const link = document.createElement("a");
          link.setAttribute("download", "canvas.png");
          link.setAttribute(
            "href",
            document
              .querySelector("canvas")
              .toDataURL("image/png")
              .replace("image/png", "image/octet-stream")
          );
          link.click();
        }}
      >
        DOWNLOAD <AiFillCamera size="1.3em" />
      </button>

      <button
        className="absolute top-[40px] right-[40px] text-white px-6 py-3 rounded flex items-center gap-2 shadow-inner hover:shadow-[inset_-250px_0_0_0_black]"
        style={{ background: snap.selectedColor }}
        onClick={() => (state.intro = true)}
      >
        GO BACK <AiOutlineArrowLeft size="1.3em" />
      </button>
    </motion.section>
  );
}
