import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Router from "./router/main-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f8c046",
    },
  },
});

const queryClient = new QueryClient();

const App = (): React.ReactElement => (
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);

export default App;
