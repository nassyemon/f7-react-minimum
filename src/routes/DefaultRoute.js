import React from "react";
import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";

export default function DefautlRoute({ component: RouteComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
            <MainLayout>
          <RouteComponent {...matchProps} />
        </MainLayout>
      )}
      />
  );
}
