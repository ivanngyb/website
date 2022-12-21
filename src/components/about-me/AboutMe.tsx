import { Flex, Text } from "@mantine/core";
import { Overlay } from "../Overlay";

export const AboutMe = () => {
  return (
    <Overlay>
      <Flex justify={"center"} align="center" sx={{ height: "100%" }}>
        <Text>About Me</Text>
      </Flex>
    </Overlay>
  );
};
