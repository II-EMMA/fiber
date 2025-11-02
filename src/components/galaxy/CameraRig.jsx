import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { state } from "./store";

export default function CameraRig({ children }) {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    state.camera.position.lerp(
      { x: snap.pointer.x * 2, y: snap.pointer.y * 2, z: 5 },
      0.05
    );
    group.current.rotation.y = snap.pointer.x * 0.2;
    group.current.rotation.x = snap.pointer.y * 0.2;
  });

  return <group ref={group}>{children}</group>;
}
