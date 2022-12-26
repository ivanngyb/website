import { Box, CloseButton, Sx } from "@mantine/core";
import React from "react";

export const Overlay = ({
  children,
  onClose,
  sx,
}: {
  children: React.ReactNode;
  onClose: () => void;
  sx?: Sx;
}) => {
  const escFunction = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  document.addEventListener("keydown", escFunction, false);
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
        padding: "1rem 1rem",
        ...sx,
      }}
    >
      <CloseButton
        size={50}
        color="dark"
        onClick={onClose}
        sx={{ position: "fixed", zIndex: 99 }}
      />
      {children}
    </Box>
  );
};
