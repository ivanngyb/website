import { Box, Flex, Tooltip } from "@mantine/core";
import { SvgGithubIcon, SvgLinkedinIcon, SvgMailIcon } from "../assets";

export const SocialIcons = () => {
  return (
    <Flex justify={"center"} gap={"xl"} sx={{ marginTop: "3em" }}>
      <SvgGithubIcon
        size="3em"
        fill="#F64740"
        onClick={() => {
          window.open("https://github.com/ivanngyb", "_blank");
        }}
        sx={{
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
      <SvgLinkedinIcon
        size="3em"
        fill="#F64740"
        onClick={() => {
          window.open("https://www.linkedin.com/in/ivanngyb/", "_blank");
        }}
        sx={{
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
      <Tooltip
        label={
          'Masked email for protection. Go to my resume in "About Me" section for real email'
        }
        position="top"
        withArrow
        sx={{
          fontFamily: "Roboto Regular",
        }}
      >
        <Box>
          <SvgMailIcon
            size="3em"
            fill="#F64740"
            onClick={() => {
              window.open("mailto:fresh.moon7884@fastmail.com");
            }}
            sx={{
              cursor: "pointer",
              transition: "all 0.2s",
              "&:hover": {
                transform: "scale(1.2)",
              },
            }}
          />
        </Box>
      </Tooltip>
    </Flex>
  );
};
