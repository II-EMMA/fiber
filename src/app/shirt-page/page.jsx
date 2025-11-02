"use client";

import Overlay from "@/components/shirt/Overlay";
import ShirtScene from "@/components/shirt/ShirtScene";
import { useState } from "react";

export default function Page() {
  const [shirtColor, setShirtColor] = useState("#FFFFFF");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ShirtScene color={shirtColor} />
      <Overlay onColorChange={setShirtColor} />
    </div>
  );
}
