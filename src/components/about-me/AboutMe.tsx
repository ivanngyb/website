import { Flex, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Overlay } from "../Overlay";

export const AboutMe = ({
  toggleAbout,
}: {
  toggleAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const matches = useMediaQuery("(max-width: 1024px)");
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
        <Text
          sx={{
            maxWidth: "20em",
            textAlign: "center",
            fontSize: "1.7em",
            color: "#001122",
            fontWeight: "bold",
            "@media (max-width:640px)": {
              fontSize: "1.3em",
            },
            "@media (max-width:330px)": {
              fontSize: "1em",
            },
          }}
        >
          I'm committed to driving successful projects from concept to
          deployment and beyond
        </Text>
        <br />
        <Flex
          gap={"lg"}
          align="center"
          sx={{
            "@media (max-width:1024px)": {
              flexDirection: "column",
            },
          }}
        >
          <Image
            fit="none"
            src="/profile-picture.jpg"
            alt="Hey Thats Me"
            width={matches ? "100%" : "20em"}
            height={matches ? "10em" : "100%"}
          />
          <Flex
            direction={"column"}
            sx={{
              maxWidth: "25em",
              "@media (max-width:1024px)": {
                maxWidth: "31em",
              },
            }}
          >
            <Text
              sx={{
                fontSize: "1.3em",
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
                fontSize: "1.3em",
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
          }}
        >
          Skills
        </Text>
      </Flex>
    </Overlay>
  );
};
