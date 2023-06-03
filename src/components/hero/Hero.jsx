import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;

  align-items: center;
  gap: 50px;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: 
  align-items: center;
  gap:20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 74px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  margin: 10px;
  color: mediumorchid;
`;

const Desc = styled.p`
  margin: 20px;
  color: gray;
`;

const Button = styled.button`
  background-color: orchid;
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: 400;
  cursor: pointer;

  height: 50px;
`;

const Right = styled.div`
  flex: 3;

  position: relative;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
  width: 100%;
`;
const Img = styled.img`
  widht: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translateY(20px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <TitleContainer>
            {" "}
            <Title>Think. Make. Solve.</Title>
          </TitleContainer>

          <WhatWeDo>
            <Line src="../public/img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy creating Awesome interactive website.</Desc>
          <Button>Explore</Button>
        </Left>
        <Right>
          <Canvas camera={{ fov: 35, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={5} />
            <directionalLight position={[5, 5, 5]} />
            <Sphere args={[1, 100, 200]} scale={1.9}>
              <MeshDistortMaterial
                color="blueviolet"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          {}
          <Img src="./img/moon.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
