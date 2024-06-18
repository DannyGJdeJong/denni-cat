import React from "react";
import { Box } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

import { DenniGlare } from "../../assets/denni";

export const AfterDark: React.FunctionComponent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        style={{ maxWidth: "100%", height: "auto", width: "auto" }}
        src={DenniGlare}
        alt=""
      />
    </Box>
  );
};

export const Route = createFileRoute("/ad/")({
  component: AfterDark,
});
