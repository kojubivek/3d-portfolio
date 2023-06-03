import React from "react";
import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import Test from "../test/Test";
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
  flex: 1;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px;
`;
const Title = styled.h1`
  font-size: 70px;
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
  background-color: darkmagenta;
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: 400;
  cursor: pointer;
  width: 200px;
  height: 50px;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: 
  align-items: center;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Test />
        </Left>
        <Right>
          {" "}
          <TitleContainer>
            {" "}
            <Title>What Outside the Square Space</Title>
          </TitleContainer>
          <WhatWeDo>
            <Line src="../public/img/line.png" />
            <Subtitle>Who Am I</Subtitle>
          </WhatWeDo>
          <Desc>A passionate Builder and Creator.</Desc>
          <Button>See My Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
