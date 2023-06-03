import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "../cube/Cube";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Test = () => {
  return (
    <Container>
      <Canvas camera={{ fov: 35, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
};

export default Test;
