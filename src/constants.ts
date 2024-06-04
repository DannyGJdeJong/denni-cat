import dotenv from "dotenv";

dotenv.config();

export const API = process.env.REACT_APP_BACKEND_API || "http://localhost:5000/";

export const BARQ_URL = process.env.REACT_APP_BARQ_URL || "";
export const TELEGRAM_URL = process.env.REACT_APP_TELEGRAM_URL || "";
export const DISCORD_URL = process.env.REACT_APP_DISCORD_URL || "";
export const TWITTER_URL = process.env.REACT_APP_TWITTER_URL || "";
export const MASTODON_URL = process.env.REACT_APP_MASTODON_URL || "";
export const BLUESKY_URL = process.env.REACT_APP_BLUESKY_URL || "";
export const TIKTOK_URL = process.env.REACT_APP_TIKTOK_URL || "";
export const API_URL = process.env.REACT_APP_API_URL || "";
