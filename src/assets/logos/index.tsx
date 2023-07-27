import { SvgIcon, SvgIconProps } from "@mui/material";

import { ReactComponent as IDiscord } from "./discord.svg";
import { ReactComponent as IBarq } from "./barq.svg";
import { ReactComponent as IMastodon } from "./mastodon.svg";

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
