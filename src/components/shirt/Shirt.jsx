import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { useSnapshot } from "valtio";
import { easing } from "maath";
import { state } from "./store";

export function AppShirt(props) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.selectedDecal}.png`);
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");

  useFrame((_, delta) =>
    easing.dampC(materials.lambert1.color, snap.selectedColor, 0.25, delta)
  );

  return (
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry}
      material={materials.lambert1}
      material-roughness={1}
      {...props}
      dispose={null}
    >
      <Decal
        position={[0, 0.04, 0.15]}
        rotation={[0, 0, 0]}
        scale={0.15}
        opacity={0.7}
        map={texture}
        map-anisotropy={16}
      />
    </mesh>
  );
}

useGLTF.preload("/shirt_baked_collapsed.glb");
