import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Dennis } from "../../assets/denni";
import { BARQ_URL, DISCORD_URL, TELEGRAM_URL, TWITTER_URL } from "../../constants";

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

export const Link = ({ href, text }: { href: string; text: string }): React.ReactElement => {
  return (
    <Button href={href} variant="contained">
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
        <Link href={TELEGRAM_URL} text="Telegram" />
      </Row>
      <Row>
        <Link href={DISCORD_URL} text="Discord" />
      </Row>
      <Row>
        <Link href={TWITTER_URL} text="Twitter" />
      </Row>
      <Row>
        <Link href={BARQ_URL} text="barq" />
      </Row>
    </PageContainer>
  );
};

export default Home;
