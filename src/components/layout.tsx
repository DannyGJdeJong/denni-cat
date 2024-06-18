import React from "react";
import { GlobalStyles } from "@mui/material";

import Background from "../assets/background.svg?url";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: {
            background: `url("${Background}") no-repeat center center fixed`,
            backgroundSize: "cover",
            height: "100%",
            overflow: "hidden",
          },
        }}
      />
      {/* Header */}
      {children}
      {/* Footer */}
    </>
  );
};
