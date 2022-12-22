import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Global, MantineProvider } from "@mantine/core";
import regular from "./assets/fonts/liquido-reg.otf";
import fluid from "./assets/fonts/liquido-fluid.otf";
import munich from "./assets/fonts/munich.ttf";

function GlobalStyles() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Liquido Regular",
            src: `url('${regular}')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Liquido Fluid",
            src: `url('${fluid}')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Munich",
            src: `url('${munich}')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Munich",
      }}
    >
      <GlobalStyles />
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
        <App />
      </div>
    </MantineProvider>
  </React.StrictMode>
);
