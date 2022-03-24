import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { StateProvider } from "./context/store";
import Router from "./router/main-router";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8c046",
    },
  },
});

const App = (): React.ReactElement => (
  <StateProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </StateProvider>
);

export default App;
