import { Button, ButtonProps } from "@mantine/core";
import React from "react";

type CoolButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
} & ButtonProps;

export const Coolbutton = ({
  children,
  onClick,
  disabled,
  ...props
}: CoolButtonProps) => {
  return (
    <Button
      {...props}
      disabled={disabled}
      onClick={onClick}
      sx={{
        fontSize: "3em",
        color: "#fff4e0",
        lineHeight: "1em",
        textAlign: "center",
        fontFamily: "Liquido Regular",
        fontWeight: "lighter",
        height: "auto",
        background: "#F6474000",
        width: "5em",
        borderRadius: "0",
        transition: "all .1s linear",
      }}
      styles={() => ({
        root: {
          "&:hover": {
            backgroundPosition: "bottom",
            background: "#F64740",
            color: "#fffbf4",
          },
        },
      })}
    >
      {children}
    </Button>
  );
};
