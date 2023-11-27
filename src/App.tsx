import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <NavBar />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} factor={2}>
          <div className="bg-home-gradient w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.2} factor={0.2}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
