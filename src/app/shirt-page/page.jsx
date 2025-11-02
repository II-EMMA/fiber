"use client";

import Overlay from "@/components/shirt/Overlay";
import Canvas from "@/components/shirt/Canvas";

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
