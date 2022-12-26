import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { Coolbutton } from "../Coolbutton";
import { CoolHeader } from "../Coolheader";

export const AboutMeSkills = () => {
  return (
    <Box sx={{ maxWidth: "70rem" }}>
      <CoolHeader>Skills</CoolHeader>
      <Flex direction="column" gap={"xl"}>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Languages</SkillsHeaderText>
          <SkillsBodyText>Golang, Typescript, Bash</SkillsBodyText>
        </Flex>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Frameworks and Technologies</SkillsHeaderText>
          <SkillsBodyText>
            PostgreSQL, Docker, AWS, Cloudflare, React, REST, WebSocket,
            Mantine, Material UI
          </SkillsBodyText>
        </Flex>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Tools</SkillsHeaderText>
          <SkillsBodyText>
            VS Code, IntelliJ Idea, Windows, Linux, Git, Github
          </SkillsBodyText>
        </Flex>
        <Flex justify={"center"} align={"center"} sx={{ margin: "2em 2em" }}>
          <Coolbutton
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
            backgroundColor="#F64740"
            hoverColor="#001122"
          >
            View Resume
          </Coolbutton>
        </Flex>
      </Flex>
    </Box>
  );
};

const SkillsHeaderText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      sx={{
        fontSize: "1.5em",
        color: "#082a4d",
        lineHeight: "1em",
        fontFamily: "Munich",
        "@media (max-width:640px)": {
          fontSize: "2em",
        },
      }}
    >
      {children}
    </Text>
  );
};

const SkillsBodyText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      sx={{
        fontSize: "4em",
        color: "#082a4d",
        lineHeight: "1em",
        fontFamily: "Liquido Regular",
        "@media (max-width:640px)": {
          fontSize: "4em",
        },
      }}
    >
      {children}
    </Text>
  );
};
