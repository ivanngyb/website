import { Box, Button, Flex, Text } from "@mantine/core";

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
      }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"space-between"}
        sx={{ height: "100%" }}
      >
        <Button
          onClick={() => {
            togglePortfolio(true);
          }}
          sx={{
            fontSize: "3em",
            color: "#fff4e0",
            lineHeight: "1em",
            textAlign: "center",
            fontFamily: "Liquido Regular",
            fontWeight: "lighter",
            height: "auto",
            background: "#F6474000",
            width: "5em",
            borderRadius: "0",
            transition: "all .1s linear",
          }}
          styles={() => ({
            root: {
              "&:hover": {
                backgroundPosition: "bottom",
                background: "#F64740",
                color: "#fffbf4",
              },
            },
          })}
        >
          Portfolio
        </Button>
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
        <Button
          onClick={() => {
            toggleAbout(true);
          }}
          sx={{
            fontSize: "3em",
            color: "#fff4e0",
            lineHeight: "1em",
            textAlign: "center",
            fontFamily: "Liquido Regular",
            fontWeight: "lighter",
            height: "auto",
            background: "#F6474000",
            width: "5em",
            borderRadius: "0",
            transition: "all .1s linear",
          }}
          styles={() => ({
            root: {
              "&:hover": {
                backgroundPosition: "bottom",
                background: "#F64740",
                color: "#fffbf4",
              },
            },
          })}
        >
          About Me
        </Button>
      </Flex>
    </Flex>
  );
};
