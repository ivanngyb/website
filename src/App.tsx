import { Box, Transition } from "@mantine/core";
import React from "react";
import { Header } from "./components/Header";
function App() {
  return (
    <Box>
      <Transition
        transition="scale"
        duration={400}
        timingFunction="ease"
        mounted={true}
      >
        {() => <Header />}
      </Transition>

      <Box sx={{ height: "100vh" }}></Box>
    </Box>
  );
}

export default App;
