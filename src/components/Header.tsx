import { Box, Flex, Text } from "@mantine/core";
import { SvgMailIcon } from "../assets";
import { Coolbutton } from "./Coolbutton";

export const Header = ({
  togglePortfolio,
  toggleAbout,
}: {
  togglePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      sx={{
        height: "100vh",
        backgroundImage: "url(/header-bg.svg)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2rem",
        backgroundPosition: "center center",
        "@media (max-width:1110px)": {
          backgroundPosition: "left bottom",
        },
        animation: "circle 2s infinite",
        animationIterationCount: 1,
        clipPath: "circle(75%)",
        "@keyframes circle": {
          "100%": {
            clipPath: "circle(75%)",
          },
          "0%": {
            clipPath: "circle(0%)",
          },
        },
      }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"space-between"}
        sx={{ height: "100%" }}
      >
        <Flex
          sx={{
            "@media (max-width:660px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Coolbutton
            onClick={() => {
              toggleAbout(true);
            }}
          >
            AboutMe
          </Coolbutton>
          <Coolbutton
            onClick={() => {
              togglePortfolio(true);
            }}
          >
            Portfolio
          </Coolbutton>
        </Flex>
        <Box>
          <Text
            sx={{
              fontSize: "30em",
              color: "#fbae3c",
              lineHeight: "1em",
              textAlign: "center",
              fontFamily: "Liquido Fluid",
              "@media (max-width:1110px)": {
                fontSize: "15em",
              },
              "@media (max-width:520px)": {
                fontSize: "10em",
              },
              "@media (max-width:330px)": {
                fontSize: "7em",
              },
            }}
          >
            Ivan Ng
          </Text>
          <Text
            sx={{
              fontSize: "8rem",
              color: "#fff4e0",
              textAlign: "center",
              lineHeight: "0.5em",
              fontFamily: "Liquido Regular",
              "@media (max-width:1110px)": {
                fontSize: "5em",
              },
              "@media (max-width:520px)": {
                fontSize: "3em",
              },
              "@media (max-width:330px)": {
                fontSize: "2em",
              },
            }}
          >
            Full Stack Developer
          </Text>
        </Box>
        <Coolbutton onClick={() => {}}>ContactMe</Coolbutton>
      </Flex>
    </Flex>
  );
};
