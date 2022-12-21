import { Flex, Text } from "@mantine/core";
import { Overlay } from "../Overlay";

export const Portfolio = () => {
  return (
    <Overlay>
      {/* <CloseButton
   sx={{
     position: "fixed",
   }}
   size="xl"
   color="black"
 /> */}

      <Flex
        justify={"center"}
        align="center"
        sx={{ height: "100%", overflow: "auto" }}
      >
        <Text>Portfolio</Text>
      </Flex>
    </Overlay>
  );
};
