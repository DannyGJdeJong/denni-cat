import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { DenniGlare } from "../../assets/denni";

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const AD = (): React.ReactElement => {
  return (
    <PageContainer>
      <img style={{ maxWidth: "100%", height: "auto", width: "auto" }} src={DenniGlare} alt="" />
    </PageContainer>
  );
};

export default AD;
