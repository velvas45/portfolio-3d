import Hero from "./components/Pages/Hero";
import Who from "./components/Pages/Who";
import Works from "./components/Pages/Works";
import Contact from "./components/Pages/Contact";
import styled from "styled-components";
// import Test from "./components/Pages/Test";

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

function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      {/* <Test /> */}
    </Container>
  );
}

export default App;
