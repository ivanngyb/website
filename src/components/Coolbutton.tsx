import { Button, ButtonProps } from "@mantine/core";
import React from "react";

type CoolButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  backgroundColor?: string;
  hoverColor?: string;
} & ButtonProps;

export const Coolbutton = ({
  children,
  onClick,
  disabled,
  backgroundColor,
  hoverColor,
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
        background: backgroundColor ? backgroundColor : "#F6474000",
        width: "5em",
        borderRadius: "0",
        transition: "all .1s linear",
      }}
      styles={() => ({
        root: {
          "&:hover": {
            backgroundPosition: "bottom",
            background: hoverColor ? hoverColor : "#F64740",
            color: "#fffbf4",
          },
          "&:focus": {
            outline: "none",
          },
        },
      })}
    >
      {children}
    </Button>
  );
};
