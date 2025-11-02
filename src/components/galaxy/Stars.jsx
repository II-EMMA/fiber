import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Stars() {
  const group = useRef();
  const starGeometry = new THREE.SphereGeometry(0.02, 8, 8);
  const starMaterial = new THREE.MeshBasicMaterial({ color: "white" });

  const stars = Array.from({ length: 200 }, () => {
    const mesh = new THREE.Mesh(starGeometry, starMaterial);
    mesh.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    return mesh;
  });

  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      {stars.map((s, i) => (
        <primitive key={i} object={s} />
      ))}
    </group>
  );
}
