import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import ROUTES from "./routes";

import { Layout } from "../components/layout";
import Home from "../domain/home";

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
