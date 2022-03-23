import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";

import Example from "../domain/example";
import { Layout } from "../components/layout";

export const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.EXAMPLE}>
          <Layout>
            <Example />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
