import { SvgIcon, SvgIconProps } from "@mui/material";

import IDiscord from "./discord.svg?react";
import IBarq from "./barq.svg?react";
import IMastodon from "./mastodon.svg?react";
import ITikTok from "./tiktok.svg?react";

export const Discord: React.FunctionComponent<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <IDiscord width={24} height={24} />
  </SvgIcon>
);

export const Barq: React.FunctionComponent<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <IBarq width={24} height={24} />
  </SvgIcon>
);

export const Mastodon: React.FunctionComponent<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <IMastodon width={24} height={24} />
  </SvgIcon>
);

export const TikTok: React.FunctionComponent<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <ITikTok width={24} height={24} />
  </SvgIcon>
);
