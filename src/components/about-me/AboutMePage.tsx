import { Flex } from "@mantine/core";
import { FancyOverlay } from "../FancyOverlay";
import { AboutMe } from "./AboutMe";
import { AboutMeSkills } from "./AboutMeSkills";

export const AboutMePage = ({
  toggleAbout,
}: {
  toggleAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <FancyOverlay
      onClose={() => {
        toggleAbout(false);
      }}
      sx={{ overflowY: "auto" }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        sx={{ padding: "1rem 1rem" }}
      >
        <AboutMe />
        <AboutMeSkills />
      </Flex>
    </FancyOverlay>
  );
};
