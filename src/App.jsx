import "./App.css";
import Hero from "./components/hero/Hero";
import Work from "./components/works/Work";
import Contact from "./components/contact/Contact";
import Who from "./components/who/Who";
import styled from "styled-components";
import Navbar from "./components/navbar/Navbar";
const Container = styled.div`
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  color: white;

  background: url("./img/bg.jpeg");
`;
const App = () => {
  return (
    <>
      <Container>
        <Hero />
        <Who />
        <Work />
        <Contact />
      </Container>
    </>
  );
};

export default App;
