import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ParticleBG from "./components/ParticleBG";
import Portfolio from "./components/Portfolio";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <NavBar />
      <Parallax pages={2.5}>
        <ParallaxLayer offset={0} factor={2} speed={0.5}>
          <ParticleBG />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.1}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.25}
          factor={2}
          style={{
            backgroundImage:
              "radial-gradient(circle at bottom, #1b2735 50%, #090a0f 75%)",
          }}
        >
          <Portfolio />
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} factor={0.25}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
