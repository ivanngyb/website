import { Box, Flex, Text } from "@mantine/core";
import { CoolHeader } from "../Coolheader";

export const AboutMe = () => {
  return (
    <Box sx={{ maxWidth: "70em" }}>
      <CoolHeader>AboutMe</CoolHeader>

      <Flex
        gap={"lg"}
        align="center"
        sx={{
          "@media (max-width:1024px)": {
            flexDirection: "column",
          },
        }}
      >
        <Flex direction={"column"}>
          <Text
            sx={{
              fontSize: "1.5em",
              color: "#001122",
              textAlign: "justify",
            }}
          >
            I'm a Full Stack Developer from Perth, Australia with a love for
            creating community-engaging features using Go. I have experience in
            front-end and back-end development, and am always looking for ways
            to improve my skills.
          </Text>
          <br />
          <Text
            sx={{
              fontSize: "1.5em",
              color: "#001122",
              textAlign: "justify",
            }}
          >
            I'm a great team player and love working with others to bring the
            best possible product to life. In short, I'm passionate about using
            my skills to create exciting and innovative products and always
            looking for new challenges.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
