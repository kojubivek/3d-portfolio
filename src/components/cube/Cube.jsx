import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5)
  );
  return (
    <mesh>
      <boxGeometry ref={textRef} attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="violet">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["pink"]} />
          <Text ref={textRef} fontSize={1.5} color="dimgray">
            Think
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
