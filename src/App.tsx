import { Box } from "@mantine/core";
import { useState } from "react";
import { SvgMailIcon } from "./assets";
import { AboutMe } from "./components/about-me/AboutMe";
import { Header } from "./components/Header";
import { Portfolio } from "./components/portfolio/Portfolio";

function App() {
  const [togglePortfolio, setTogglePortfolio] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  return (
    <Box sx={{ background: "#F64740" }}>
      {toggleAbout && <AboutMe toggleAbout={setToggleAbout} />}
      {togglePortfolio && <Portfolio togglePortfolio={setTogglePortfolio} />}
      <Header
        togglePortfolio={setTogglePortfolio}
        toggleAbout={setToggleAbout}
      />
    </Box>
  );
}

export default App;
