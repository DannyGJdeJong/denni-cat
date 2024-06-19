import React, { Suspense } from "react";
import {
  Box,
  Button,
  CircularProgress,
  SvgIconProps,
  Switch,
  Typography,
} from "@mui/material";
import { Cloud, Telegram, Twitter } from "@mui/icons-material";
import styled from "@emotion/styled";
import { createFileRoute, Link } from "@tanstack/react-router";

import { Dennis, Dennis3D } from "../assets/denni";
import { Barq, Discord, Mastodon, TikTok } from "../assets/logos";
import {
  BARQ_URL,
  BLUESKY_URL,
  DISCORD_URL,
  MASTODON_URL,
  TELEGRAM_URL,
  TIKTOK_URL,
  TWITTER_URL,
} from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const Row = styled(Box)`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const LinkButton: React.FunctionComponent<{
  href: string;
  text: string;
  icon: React.FunctionComponent<SvgIconProps>;
}> = ({ href, text, icon }) => {
  const Icon = icon;

  return (
    <Link to={href}>
      <Button variant="contained">
        <Icon sx={{ mr: 1 }} />
        {text}
      </Button>
    </Link>
  );
};

const Index: React.FunctionComponent = () => {
  const [show3D, setShow3D] = React.useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShow3D(event.target.checked);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row>
        <div style={{ width: "400px", height: "400px" }}>
          {show3D ? (
            <Suspense fallback={<CircularProgress />}>
              <Canvas style={{ width: "100%" }}>
                <Suspense fallback={null}>
                  {Dennis3D[Math.floor(Math.random() * Dennis3D.length)]({
                    scale: new THREE.Vector3(7, 7, 7),
                  })}
                </Suspense>
                <OrbitControls />
              </Canvas>
            </Suspense>
          ) : (
            <img
              style={{ width: "100%" }}
              src={Dennis[Math.floor(Math.random() * Dennis.length)]}
              alt=""
            />
          )}
        </div>
      </Row>
      <Row>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ color: "white" }}>
            3D
          </Typography>
          <Switch
            checked={show3D}
            onChange={handleSwitchChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      </Row>
      <Row>
        <LinkButton href={TELEGRAM_URL} text="Telegram" icon={Telegram} />
      </Row>
      <Row>
        <LinkButton href={DISCORD_URL} text="Discord" icon={Discord} />
      </Row>
      <Row>
        <LinkButton href={TWITTER_URL} text="Twitter" icon={Twitter} />
      </Row>
      <Row>
        <LinkButton href="/ad" text="AD Twitter" icon={Twitter} />
      </Row>
      <Row>
        <LinkButton href={MASTODON_URL} text="Mastodon" icon={Mastodon} />
      </Row>
      <Row>
        <LinkButton href={BLUESKY_URL} text="Bluesky" icon={Cloud} />
      </Row>
      <Row>
        <LinkButton href={TIKTOK_URL} text="TikTok" icon={TikTok} />
      </Row>
      <Row>
        <LinkButton href={BARQ_URL} text="barq" icon={Barq} />
      </Row>
    </Box>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
