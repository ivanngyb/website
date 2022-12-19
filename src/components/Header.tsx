import { Flex, Text } from "@mantine/core";

export const Header = () => {
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
        backgroundPosition: "left bottom",
      }}
    >
      <Flex direction={"column"} align={"flex-start"}>
        <Text
          sx={{
            fontSize: "3rem",
            color: "#fff4e0",
            fontWeight: "bolder",
            lineHeight: "1em",
          }}
        >
          Hello! My Name Is
        </Text>
        <Text
          sx={{
            fontSize: "10rem",
            color: "#fbae3c",
            fontWeight: "bolder",
            lineHeight: "1em",
          }}
        >
          Ivan
        </Text>
        <Text
          sx={{
            fontSize: "3rem",
            color: "#fff4e0",
            fontWeight: "bolder",
            lineHeight: "1.5em",
          }}
        >
          I'm a Full Stack Developer
        </Text>
        {/* <Button
          radius={"xl"}
          sx={{
            marginTop: "2rem",
            background: "#44A7F2",
            width: "15em",
            height: "2.5em",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          View my portfolio
        </Button> */}
      </Flex>
    </Flex>
  );
};
