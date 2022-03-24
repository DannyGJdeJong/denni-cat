import React from "react";
import { createGlobalStyle } from "styled-components";

import Background from "../assets/background.svg";

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${Background}) no-repeat center center fixed;
    background-size: cover;
    height: 100%;
    overflow: hidden;
  }
`;

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {/* Header */}
      {children}
      {/* Footer */}
    </>
  );
};
