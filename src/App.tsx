import React from "react";
import { StateProvider } from "./context/store";
import Router from "./router/main-router";

const App = (): React.ReactElement => (
  <StateProvider>
    <Router />
  </StateProvider>
);

export default App;
