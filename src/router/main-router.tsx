import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";

import Home from "../domain/home";
import { Layout } from "../components/layout";

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Layout>
            <Home />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
