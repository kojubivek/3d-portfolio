import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import Model from "../screen/Screen"; // Replace with the correct path to your Model component
import { OrbitControls, Stage, useTexture } from "@react-three/drei";

const WebDesign = () => {
  // Replace with the actual path to your image file

  return (
    <Canvas>
      <Stage width={1} environment="city" intensity={0.6}>
        <Model></Model>
        <OrbitControls enableZoom={false} />
      </Stage>
    </Canvas>
  );
};

export default WebDesign;
