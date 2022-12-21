import { Flex, Text } from "@mantine/core";

export const AboutMe = () => {
  return (
    <Flex
      sx={{
        height: "100%",
        backgroundColor: "#fff4e0",
        padding: "2rem 2rem",
        "@media (max-width: 1023px)": {
          fontSize: "0.75rem",
          flexDirection: "column",
        },
        alignItems: "center",
        justifyContent: "center",
        minHeight: "15rem",
      }}
      gap={"lg"}
    >
      <Text
        sx={{
          fontSize: "1rem",
          textAlign: "center",
          width: "40em",
        }}
      >
        Committed to driving successful projects from concept to deployment and
        beyond, and always striving to improve my skills and knowledge to stay
        ahead in the rapidly-evolving world of software development.
      </Text>
    </Flex>
  );
};
