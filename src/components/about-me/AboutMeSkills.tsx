import { Box, Button, Flex, Text } from "@mantine/core";
import React from "react";

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

export const AboutMeSkills = () => {
  return (
    <Box sx={{ maxWidth: "70rem" }}>
      <Text
        sx={{
          fontSize: "15em",
          color: "#F64740",
          lineHeight: "1em",
          textAlign: "center",
          fontFamily: "Liquido Regular",
          "@media (max-width:640px)": {
            fontSize: "10em",
          },
          "@media (max-width:330px)": {
            fontSize: "7em",
          },
          marginBottom: "0.25em",
        }}
      >
        Skills
      </Text>
      <Flex direction="column" gap={"xl"}>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Languages</SkillsHeaderText>
          <SkillsBodyText>Golang, Typescript, Bash </SkillsBodyText>
        </Flex>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Frameworks and Technologies</SkillsHeaderText>
          <SkillsBodyText>
            PostgreSQL, Docker, AWS, Cloudflare, React, REST, WebSocket, Mantine
          </SkillsBodyText>
        </Flex>
        <Flex sx={{ width: "100%" }} direction="column">
          <SkillsHeaderText>Tools</SkillsHeaderText>
          <SkillsBodyText>
            VS Code, IntelliJ Idea, Windows, Linux, Git, Github
          </SkillsBodyText>
        </Flex>
        <Flex justify={"center"} align={"center"} sx={{ margin: "2em 2em" }}>
          <Button
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
            sx={{
              fontSize: "3em",
              color: "#fffbf4",
              lineHeight: "1em",
              textAlign: "center",
              fontFamily: "Liquido Regular",
              fontWeight: "lighter",
              height: "auto",
              background: "#F64740",
              width: "5em",
              borderRadius: "0",
              transition: "all .1s linear",
            }}
            styles={() => ({
              root: {
                "&:hover": {
                  backgroundPosition: "bottom",
                  background: "#001122",
                  color: "#fffbf4",
                },
                "&:focus": {
                  outline: "none",
                },
              },
            })}
          >
            View Resume
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
