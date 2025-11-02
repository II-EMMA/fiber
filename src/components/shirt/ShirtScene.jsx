// "use client";

// import { Canvas } from "@react-three/fiber";
// import {
//   Environment,
//   Center,
//   AccumulativeShadows,
//   RandomizedLight,
// } from "@react-three/drei";
// import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { easing } from "maath";
// import { useSnapshot } from "valtio";
// import { state } from "./store";
// import Shirt from "./Shirt";

// export default function ShirtScene({ color }) {
//   return (
//     <div className="fixed inset-0 z-50">
//       <Canvas
//         shadows
//         gl={{ preserveDrawingBuffer: true }}
//         camera={{ position: [0, 0, 2.5], fov: 25 }}
//       >
//         <ambientLight intensity={0.5} />
//         <Environment
//           files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr"
//           background={false}
//         />
//         <CameraRig>
//           <Backdrop />
//           <Center>
//             <Shirt color={color} />
//           </Center>
//         </CameraRig>
//       </Canvas>
//     </div>
//   );
// }

// function CameraRig({ children }) {
//   const group = useRef();
//   const snap = useSnapshot(state);

//   useFrame((state, delta) => {
//     easing.damp3(
//       state.camera.position,
//       [snap.intro ? -state.viewport.width / 4 : 0, 0, 2],
//       0.25,
//       delta
//     );
//     easing.dampE(
//       group.current.rotation,
//       [state.pointer.y / 10, -state.pointer.x / 5, 0],
//       0.25,
//       delta
//     );
//   });

//   return <group ref={group}>{children}</group>;
// }

// function Backdrop() {
//   const shadows = useRef();
//   const snap = useSnapshot(state);

//   useFrame((state, delta) =>
//     easing.dampC(
//       shadows.current.getMesh().material.color,
//       snap.selectedColor,
//       0.25,
//       delta
//     )
//   );

//   return (
//     <AccumulativeShadows
//       ref={shadows}
//       temporal
//       frames={60}
//       alphaTest={0.85}
//       scale={10}
//       rotation={[Math.PI / 2, 0, 0]}
//       position={[0, 0, -0.14]}
//     >
//       <RandomizedLight
//         amount={4}
//         radius={9}
//         intensity={0.55}
//         ambient={0.25}
//         position={[5, 5, -10]}
//       />
//       <RandomizedLight
//         amount={4}
//         radius={5}
//         intensity={0.25}
//         ambient={0.55}
//         position={[-5, 5, -9]}
//       />
//     </AccumulativeShadows>
//   );
// }
