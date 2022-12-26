import { Text } from "@mantine/core";
import React from "react";

export const CoolHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      sx={{
        fontSize: "15em",
        color: "#F64740",
        lineHeight: "1em",
        textAlign: "center",
        fontFamily: "Liquido Regular",
        "@media (max-width:640px)": {
          fontSize: "10em",
        },
        "@media (max-width:480px)": {
          fontSize: "7em",
        },
      }}
    >
      {children}
    </Text>
  );
};
