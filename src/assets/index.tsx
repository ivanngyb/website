import { Box, BoxProps } from "@mantine/core";
import React from "react";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MailIcon from "!@svgr/webpack!./images/mailicon.svg";
// eslint-disable-next-line import/no-webpack-loader-syntax
import ReactIcon from "!@svgr/webpack!./images/react.svg";

export interface SvgWrapperProps extends BoxProps {
  className?: string;
  size?: string;
  fill?: string;
  height?: string;
  width?: string;
  stroke?: string;
  strokeWidth?: string;
  inline?: boolean;
}

export const SvgWrapper = React.memo(function SvgWrapper({
  className,
  fill,
  stroke,
  strokeWidth,
  sx,
  size,
  width,
  height,
  inline,
  ...props
}: SvgWrapperProps) {
  return (
    <Box
      className={className}
      component="span"
      sx={{
        display: inline ? "inline-flex" : "flex",
        justifyContent: "center",
        alignItems: "center",
        pb: 0.3,
        px: inline ? 0.3 : 0,
        verticalAlign: "middle",
        "& > svg": {
          width: width || size || "2rem",
          height: height || size || "2rem",
          fill: fill,
          stroke: stroke || "unset",
          strokeWidth: strokeWidth || "1",
          verticalAlign: "middle",
        },
        ...sx,
      }}
      {...props}
    />
  );
});

export const SvgMailIcon: React.VoidFunctionComponent<SvgWrapperProps> = (
  props
) => (
  <SvgWrapper {...props}>
    <MailIcon />
  </SvgWrapper>
);

export const SvgReactIcon: React.VoidFunctionComponent<SvgWrapperProps> = (
  props
) => (
  <SvgWrapper {...props}>
    <ReactIcon />
  </SvgWrapper>
);
