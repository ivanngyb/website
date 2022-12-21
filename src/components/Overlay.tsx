import { Box } from "@mantine/core";
import React from "react";

export const Overlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: 99,
        clipPath: "circle(75%)",
        background: "#fff4e0",
        top: 0,
        left: 0,
        animation: "circle 1s infinite",
        animationIterationCount: 1,
        "@keyframes circle": {
          "100%": {
            clipPath: "circle(75%)",
          },
          "0%": {
            clipPath: "circle(0%)",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};
