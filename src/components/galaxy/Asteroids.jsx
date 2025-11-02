import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Asteroids() {
  const { scene } = useGLTF("/textures/asteroid.glb"); // optional
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.005;
    ref.current.rotation.x += 0.002;
  });

  return (
    <primitive object={scene} ref={ref} scale={0.5} position={[0, 0, -2]} />
  );
}
