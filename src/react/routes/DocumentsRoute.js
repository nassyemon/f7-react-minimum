import React from "react";
import { Route, Switch } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Documents from "../components/main/Documents";
import DocumentDetail from "../components/right/DocumentDetail";
import EditControl from "../components/control/EditControl";
import GoBackHeader from "../components/headers/GoBackHeader";
import EditFooter from "../components/footers/EditFooter";

const onSwipeRight = (func) => ({ dir }) => dir === "Right" && func();

export default function DocumentsRoute({
  goBack,
  openSidePanel,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={({ match }) => (
        <Switch>
          <Route exact path={`${match.path}/`}
            render={(matchProps) => (
              <MainLayout
                mainComponent={Documents}
                rightComponent={DocumentDetail}
                controlComponent={EditControl}
                onSwiped={onSwipeRight(openSidePanel)}
                matchProps={matchProps}
                control
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
                headerComponent={GoBackHeader}
                mainComponent={Documents}
                rightComponent={DocumentDetail}
                onSwiped={onSwipeRight(goBack)}
                matchProps={matchProps}
                right
              />)}
          />
        </Switch>
      )}
    />
  );
}
