import { Box } from "@mantine/core";
import { useState } from "react";
import { AboutMe } from "./components/about-me/AboutMe";
import { Header } from "./components/Header";
import { Portfolio } from "./components/portfolio/Portfolio";

function App() {
  const [togglePortfolio, setTogglePortfolio] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  return (
    <Box>
      {toggleAbout && <AboutMe />}
      {togglePortfolio && <Portfolio />}
      <Header
        togglePortfolio={setTogglePortfolio}
        toggleAbout={setToggleAbout}
      />
    </Box>
  );
}

export default App;
