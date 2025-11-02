"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";

export default function FiberScene({ position = [0, 0, 20], fov = 35 }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Canvas
        shadows
        camera={{ position, fov }}
        eventSource={
          typeof window !== "undefined"
            ? document.getElementById("root")
            : undefined
        }
        eventPrefix="client"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <Center>
          <Shirt />
        </Center>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

function Shirt() {
  return (
    <mesh scale={[5, 5, 5]}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshNormalMaterial />
    </mesh>
  );
}
