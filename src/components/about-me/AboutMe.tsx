import { Box, Flex, Text } from "@mantine/core";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "fixed",
        zIndex: 99,
        clipPath: "circle(75%)",
        background: "#fff4e0",
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
      <Flex justify={"center"} align="center" sx={{ height: "100%" }}>
        <Text>About Me</Text>
      </Flex>
    </Box>
  );
};
