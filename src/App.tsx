import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { StateProvider } from "./context/store";
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
  <StateProvider>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  </StateProvider>
);

export default App;
