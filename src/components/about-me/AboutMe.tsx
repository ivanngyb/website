import { Flex, Text } from "@mantine/core";
import { Overlay } from "../Overlay";

export const AboutMe = ({
  toggleAbout,
}: {
  toggleAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Overlay
      onClose={() => {
        toggleAbout(false);
      }}
    >
      <Flex justify={"center"} align="center" sx={{ height: "100%" }}>
        <Text>About Me</Text>
      </Flex>
    </Overlay>
  );
};
