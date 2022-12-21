import { Box } from "@mantine/core";
import { AboutMe } from "./components/about-me/AboutMe";
import { Header } from "./components/Header";
function App() {
  return (
    <Box>
      <Header />
      <AboutMe />
    </Box>
  );
}

export default App;
