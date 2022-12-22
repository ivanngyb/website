import { Box, Flex, Text } from "@mantine/core";
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
      sx={{ overflowY: "auto" }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        sx={{ height: "100%", padding: "1rem 1rem" }}
      >
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
          }}
        >
          AboutMe
        </Text>

        <Flex
          gap={"lg"}
          align="center"
          sx={{
            "@media (max-width:1024px)": {
              flexDirection: "column",
            },
          }}
        >
          {/* <Image
            fit="none"
            src="/profile-picture.jpg"
            alt="Hey Thats Me"
            width={matches ? "100%" : "20em"}
            height={matches ? "10em" : "100%"}
          /> */}
          <Flex
            direction={"column"}
            sx={{
              maxWidth: "70em",
            }}
          >
            <Text
              sx={{
                fontSize: "1.5em",
                color: "#001122",
                textAlign: "justify",
              }}
            >
              I'm a Full Stack Developer from Perth, Australia with a love for
              creating community-engaging features using Go. I have experience
              in front-end and back-end development, and am always looking for
              ways to improve my skills.
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
              best possible product to life. In short, I'm passionate about
              using my skills to create exciting and innovative products and
              always looking for new challenges.
            </Text>
          </Flex>
        </Flex>
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
        <Flex sx={{ maxWidth: "70rem" }} direction="column" gap={"xl"}>
          {" "}
          <Flex sx={{ width: "100%" }} direction="column">
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
              Langauges
            </Text>
            <Box>
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
                Golang, Typescript
              </Text>
            </Box>
          </Flex>
          <Flex sx={{ width: "100%" }} direction="column">
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
              Frameworks and Technologies
            </Text>
            <Box>
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
                Postgre SQL, Docker, AWS, Cloudflare, React, REST, WebSocket,
                Mantine
              </Text>
            </Box>
          </Flex>
          <Flex sx={{ width: "100%" }} direction="column">
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
              Tools
            </Text>
            <Box>
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
                VS Code, IntelliJ Idea, Windows, Linux, Git, Github
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Overlay>
  );
};
