import React from "react";
import { Route } from "react-router";
import EmptyLayout from "../layouts/EmptyLayout";

export default function EmptyRoute({ component: RouteComponent, onSwiped, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout onSwiped={onSwiped}>
          <RouteComponent {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
}
