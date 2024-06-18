import { createRootRoute, Navigate, Outlet } from "@tanstack/react-router";
import { Layout } from "../components/layout";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
  notFoundComponent: () => <Navigate to="/" />,
});
