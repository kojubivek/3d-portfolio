import React from "react";
import styled from "styled-components";
const Section = styled.div`
  display: flex;
  justify-content: center;
  min-height: 30vh
  align-items: center;
  
`;
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Lists = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  font-size: 20px;
  background-color: fuchsia;
  border: none;
  color: white;
  border-radius: 20px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="../img/logo.png"></Logo>
          <Lists>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </Lists>
        </Links>
        <Icons>
          <Icon src="../img/search.png"></Icon>
          <Button>Hire Me</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
