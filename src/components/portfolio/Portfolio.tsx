import { Flex, Text } from "@mantine/core";
import { Overlay } from "../Overlay";

export const Portfolio = ({
  togglePortfolio,
}: {
  togglePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Overlay
      onClose={() => {
        togglePortfolio(false);
      }}
    >
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
