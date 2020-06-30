import React from "react";
import { Route } from "react-router";
import EmptyLayout from "../layouts/EmptyLayout";

export default function EmptyRoute({ component: RouteComponent, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
            <EmptyLayout>
          <RouteComponent {...matchProps} />
        </EmptyLayout>
      )}
      />
  );
}
