"use client";

import dynamic from "next/dynamic";
import Overlay from "@/components/shirt/Overlay";

// Dynamically import Canvas with SSR disabled
const Canvas = dynamic(() => import("@/components/shirt/Canvas"), {
  ssr: false,
});

export const ssr = false; // or: export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Canvas />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <Overlay />
      </div>
    </div>
  );
}
