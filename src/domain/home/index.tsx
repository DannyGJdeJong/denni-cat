import { Button, SvgIconProps } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Dennis } from "../../assets/denni";
import { BARQ_URL, BLUESKY_URL, DISCORD_URL, MASTODON_URL, TELEGRAM_URL, TWITTER_URL } from "../../constants";
import { Cloud, Telegram, Twitter } from "@mui/icons-material";
import { Barq, Discord, Mastodon } from "../../assets/logos";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Link = ({
  href,
  text,
  icon,
}: {
  href: string;
  text: string;
  icon: React.FunctionComponent<SvgIconProps>;
}): React.ReactElement => {
  const Icon = icon;

  return (
    <Button href={href} variant="contained">
      <Icon sx={{ mr: 1 }} />
      {text}
    </Button>
  );
};

export const Home = (): React.ReactElement => {
  return (
    <PageContainer>
      <Row>
        <div style={{ width: "400px" }}>
          <img style={{ width: "100%" }} src={Dennis[Math.floor(Math.random() * Dennis.length)]} alt="" />
        </div>
      </Row>
      <Row>
        <Link href={TELEGRAM_URL} text="Telegram" icon={Telegram} />
      </Row>
      <Row>
        <Link href={DISCORD_URL} text="Discord" icon={Discord} />
      </Row>
      <Row>
        <Link href={TWITTER_URL} text="Twitter" icon={Twitter} />
      </Row>
      <Row>
        <Link href="/ad" text="AD Twitter" icon={Twitter} />
      </Row>
      <Row>
        <Link href={MASTODON_URL} text="Mastodon" icon={Mastodon} />
      </Row>
      <Row>
        <Link href={BLUESKY_URL} text="Bluesky" icon={Cloud} />
      </Row>
      <Row>
        <Link href={BARQ_URL} text="barq" icon={Barq} />
      </Row>
    </PageContainer>
  );
};

export default Home;
