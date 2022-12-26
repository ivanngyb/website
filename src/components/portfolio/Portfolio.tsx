import { Flex } from "@mantine/core";
import { CoolHeader } from "../Coolheader";
import { Overlay } from "../Overlay";
import { PortfolioCard } from "./PortfolioCard";

export const Portfolio = ({
  togglePortfolio,
}: {
  togglePortfolio: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Overlay
      onClose={() => {
        togglePortfolio(false);
      }}
      sx={{ overflowY: "auto" }}
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        sx={{
          padding: "1rem 1rem",
        }}
      >
        <CoolHeader>Portfolio</CoolHeader>
        <Flex
          gap={"lg"}
          sx={{
            marginTop: "2em",
            "@media (max-width:1350px)": {
              flexDirection: "column",
            },
          }}
        >
          <PortfolioCard
            image="/images/supremacy.png"
            title="Supremacy Battle Arena"
            latest
            skills={[
              "Go",
              "Python",
              "AWS",
              "Bash",
              "OvenMediaEngine",
              "PostgreSQL",
              "Cloudflare",
              "React",
              "Typescript",
            ]}
            onClick={() => {
              window.open("https://supremacy.game/", "_blank");
            }}
          >
            Supremacy is a Web3 Game where mech owners used their mechs to
            battle it out in various arenas. Battles are viewed on a Low-Latency
            video stream and can be interacted with on the web app.
            <br />
            <br />
            My time on this project has taught me so much from designing
            Frontend using React and Typescript, to writing efficient code in Go
            and even going beyond to Dev Ops where my role as Release Manager
            included releasing new versions of the product and working alongside
            many talents.
          </PortfolioCard>
          <PortfolioCard
            image="/images/supremacy-world.png"
            title="Supremacy World Sales Bot"
            skills={["Go", "AWS", "PostgreSQL", "Discord Bot API"]}
            onClick={() => {
              window.open("https://www.supremacyworld.com/", "_blank");
            }}
          >
            Supremacy World Sales Bot was a project I was assigned to for the
            Supremacy World project. A project that made Supremacy an RPG. The
            platform had a sales page which allowed users to purchase items.
            Using referral codes allowed them to get additional items.
            <br />
            <br />
            The bot I designed would allow users to generate referral codes,
            compete to see who had the most referral sales and announce
            successful referral sales. By doing so I was able to gamify sales to
            create activity and engagement within the Discord community
          </PortfolioCard>
          <PortfolioCard
            image="/images/weareninja.png"
            title="Ninja Syndicate Website"
            skills={["Prismic CMS", "NextJS", "Typescript", "Material UI"]}
            onClick={() => {
              window.open("https://weareninja.com/", "_blank");
            }}
          >
            Ninja Syndicate are the brains behind Supremacy. I was on the team
            that helped designed their website. Using React, Typescript and
            Material UI I was able to put together a responsive and fun website.
            <br />
            <br />
            Using Prismic CMS I was also able to quickly add content on the
            website without the need to recompile the website. Instead I was
            able to task content writers to use Prismic to add additional
            sections on the website or even added a new team member in the teams
            section.
          </PortfolioCard>
        </Flex>
      </Flex>
    </Overlay>
  );
};
