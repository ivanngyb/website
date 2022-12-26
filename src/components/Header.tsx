import { Box, Flex, Modal, Text, Tooltip } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { SvgMailIcon } from "../assets";
import { API_ENDPOINT } from "../const";
import { ContactMe } from "../ContactMe";
import { Coolbutton } from "./Coolbutton";
import { SocialIcons } from "./SocialIcons";

export const Header = ({
  togglePortfolio,
  toggleAbout,
}: {
  togglePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAbout: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [canForm, setCanForm] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios({
          method: "get",
          url: `${API_ENDPOINT}/check`,
        });

        if (resp.status === 200) {
          setCanForm(true);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Flex
      justify={"center"}
      align={"center"}
      sx={{
        height: "100%",
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

        <Flex direction={"column"}>
          {sendSuccess ? (
            <Box
              sx={{
                animationDelay: "0.5s",
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
                Thank You
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
                  "@media (max-width:540px)": {
                    fontSize: "3em",
                  },
                  "@media (max-width:330px)": {
                    fontSize: "2em",
                  },
                }}
              >
                Will Reach Out Soon
              </Text>
            </Box>
          ) : (
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
                  "@media (max-width:540px)": {
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
          )}

          <SocialIcons />
        </Flex>
        {canForm ? (
          <>
            <Coolbutton
              onClick={() => {
                setShowForm(true);
              }}
            >
              ContactMe
            </Coolbutton>
          </>
        ) : (
          <Tooltip
            label={
              'Masked email for protection. Go to my resume in "About Me" section for real email'
            }
            withArrow
            position="top"
            sx={{
              fontFamily: "Roboto Regular",
            }}
          >
            <Box>
              <Coolbutton
                rightIcon={
                  <SvgMailIcon
                    sx={{
                      fill: "#fff4e0",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                }
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  window.location.href = "mailto:fresh.moon7884@fastmail.com";
                  e.preventDefault();
                }}
              >
                ContactMe
              </Coolbutton>
            </Box>
          </Tooltip>
        )}
      </Flex>

      {showForm && (
        <Modal
          radius={"xl"}
          size={"xl"}
          centered
          opened={showForm}
          onClose={() => {
            setShowForm(false);
          }}
          title="Send me a personal message"
          styles={() => ({
            title: {
              fontFamily: "Liquido Regular",
              fontSize: "3.5em",
              "@media (max-width:600px)": {
                fontSize: "2em",
              },
              color: "#F64740",
            },
            modal: {
              backgroundColor: "#fff4e0",
              padding: "5em 5em",
            },
            close: {
              minHeight: "3em",
              minWidth: "3em",
              marginRight: "2em",
              "& > svg": {
                width: "30em",
                height: "30em",
              },
            },
          })}
        >
          <ContactMe
            setShowSuccess={setSendSuccess}
            setShowForm={setShowForm}
          />
        </Modal>
      )}
    </Flex>
  );
};
