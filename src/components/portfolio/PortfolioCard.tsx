import { Badge, Card, Flex, Group, Image, Text } from "@mantine/core";
import React from "react";
import { Coolbutton } from "../Coolbutton";

export const PortfolioCard = ({
  title,
  imageAlt,
  image,
  children,
  latest,
  onClick,
  skills,
}: {
  title: string;
  imageAlt?: string;
  image?: string;
  latest?: boolean;
  children: React.ReactNode;
  skills?: string[];
  onClick?: () => void;
}) => {
  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      sx={{
        maxWidth: "35em",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s",
        "&:hover": {
          transform: "scale(1.1)",
          zIndex: 5,
        },
      }}
    >
      <Card.Section>
        <Image
          src={image}
          height={300}
          placeholder={<Text align="center">Cool portfolio image</Text>}
          withPlaceholder
          alt={imageAlt ? imageAlt : "Cool portfolio image"}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} sx={{ fontFamily: "Roboto Bold", color: "#001122" }}>
          {title}
        </Text>
        {latest && (
          <Badge color="pink" variant="light">
            Latest
          </Badge>
        )}
      </Group>

      {skills && (
        <Group sx={{ maxWidth: "20em" }} spacing="xs">
          {skills.map((skill) => {
            return (
              <Badge color="blue" variant="light" key={skill}>
                {skill}
              </Badge>
            );
          })}
        </Group>
      )}

      <Text
        size="sm"
        color="dimmed"
        sx={{ fontFamily: "Roboto Regular", marginTop: "2em", flex: "1" }}
      >
        {children}
      </Text>

      {onClick && (
        <Flex
          direction="column"
          sx={{
            marginTop: "2em",
            alignItems: "flex-end",
            "@media (max-width:1350px)": {
              width: "100%",
              alignItems: "center",
            },
          }}
        >
          <Coolbutton
            onClick={onClick}
            backgroundColor="#F64740"
            hoverColor="#001122"
            sx={{
              marginTop: "auto",
            }}
          >
            View Project
          </Coolbutton>
        </Flex>
      )}
    </Card>
  );
};
