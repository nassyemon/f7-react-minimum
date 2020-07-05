import React from "react";
import { Route, Switch } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Documents from "../components/Documents";
import DocumentDetail from "../components/DocumentDetail";
import EditControl from "../components/EditControl";
import { goBack } from "../../redux/actions/navigation";
import { openSidePanel } from "../../redux/actions/sidepanel";

import EditFooter from "../components/EditFooter";

const onSwipeRight = (func) => ({ dir }) => dir === "Right" && func();

export default function DocumentsRoute({
  component,
  rightComponent,
  controlComponent,
  footerComponent,
  onSwiped,
  show,
  showControl,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ match }) =>
        console.log(match) || (
          <Switch>
            <Route exact path={`${match.path}/`}
              render={(matchProps) => (
                <MainLayout
                  mainComponent={Documents}
                  rightComponent={DocumentDetail}
                  controlComponent={EditControl}
                  showControl={true}
                  onSwiped={onSwipeRight(openSidePanel)}
                  matchProps={matchProps}
                />)}
            />
            <Route exact path={`${match.path}/edit`}
              render={(matchProps) => (
                <MainLayout
                  mainComponent={Documents}
                  rightComponent={DocumentDetail}
                  onSwiped={onSwipeRight(openSidePanel)}
                  footerComponent={EditFooter}
                  matchProps={matchProps}
                />)}
            />
            <Route exact path={`${match.path}/detail/:id`}
              render={(matchProps) => (
                <MainLayout
                  mainComponent={Documents}
                  rightComponent={DocumentDetail}
                  show="right"
                  onSwiped={onSwipeRight(goBack)}
                  matchProps={matchProps}
                />)}
            />
          </Switch>
        )}
    />
  );
}
