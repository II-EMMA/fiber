import { proxy } from "valtio";

export const state = proxy({
  pointer: { x: 0, y: 0 },
  cameraTarget: [0, 0, 5],
});
