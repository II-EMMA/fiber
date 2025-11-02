"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Stars from "./Stars";
import Asteroids from "./Asteroids";
import { Suspense } from "react";

export default function GalaxyScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Environment files="/textures/HDR_multi_nebulae.hdr" background />
        </Suspense>

        <CameraRig>
          <Stars />
          <Asteroids />
        </CameraRig>
      </Canvas>
    </div>
  );
}
