import React, { useState } from "react";
import styled from "styled-components";
import WebDesign from "../webDesign/WebDesign";
import WebDevelopment from "../WebDevelopment/WebDevelopment";
import ProductDesign from "../ProductDesign/ProductDesign";
import { Canvas } from "@react-three/fiber";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justide-content: start;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 50px;
`;
const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const Right = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;
const data = ["Web Design", "Development", "Product Design"];
const Work = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <Title text="Projexts">Projects</Title>
          <List>
            {data.map((item, index) => (
              <ListItem text={item} key={index} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <WebDevelopment />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Work;
