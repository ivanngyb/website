import { Flex, Text } from "@mantine/core";
import { FancyOverlay } from "../FancyOverlay";

export const Portfolio = ({
  togglePortfolio,
}: {
  togglePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <FancyOverlay
      onClose={() => {
        togglePortfolio(false);
      }}
    >
      <Flex
        justify={"center"}
        align="center"
        sx={{ height: "100%", overflow: "auto" }}
      >
        <Text>Portfolio</Text>
      </Flex>
    </FancyOverlay>
  );
};
