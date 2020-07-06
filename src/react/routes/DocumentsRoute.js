import React from "react";
import { Route, Switch } from "react-router";
import LeftCollectionRouteGroup from "./subRoutes/LeftCollectionRouteGroup";
import RightCollectionRouteGroup from "./subRoutes/RightCollectionRouteGroup";

export default function DocumentsRoute({
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ match }) => (
        <Switch>
          {LeftCollectionRouteGroup([`${match.path}/left`, `${match.path}`])}
          {RightCollectionRouteGroup(`${match.path}/right`)}
        </Switch>
      )}
    />
  );
}
