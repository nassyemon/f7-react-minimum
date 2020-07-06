import React from "react";
import { Route, Switch } from "react-router";
import MainLayout from "../layouts/MainLayout";
import DocumentCollectionsLayout from "../layouts/subLayouts/DocumentCollectionsLayout";
import DocumentDetail from "../components/right/DocumentDetail";
import EditControl from "../components/control/EditControl";
import GoBackHeader from "../components/header/GoBackHeader";
import EditFooter from "../components/footer/EditFooter";
import DeleteFooter from "../components/footer/DeleteFooter";
import DeleteConfirm from "../components/bottom/DeleteConfirm";

export default function DocumentsRoute({
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
                mainComponent={DocumentCollectionsLayout}
                rightComponent={DocumentDetail}
                controlComponent={EditControl}
                matchProps={matchProps}
                control
              />)}
          />
          <Route exact path={`${match.path}/edit`}
            render={(matchProps) => (
              <MainLayout
                mainComponent={DocumentCollectionsLayout}
                rightComponent={DocumentDetail}
                footerComponent={EditFooter}
                matchProps={matchProps}
              />)}
          />
          <Route exact path={`${match.path}/delete`}
            render={(matchProps) => (
              <MainLayout
                mainComponent={DocumentCollectionsLayout}
                rightComponent={DocumentDetail}
                bottomComponent={DeleteConfirm}
                footerComponent={DeleteFooter}
                matchProps={matchProps}
                bottom
              />)}
          />
          <Route exact path={`${match.path}/detail/:id`}
            render={(matchProps) => (
              <MainLayout
                headerComponent={GoBackHeader}
                mainComponent={DocumentCollectionsLayout}
                rightComponent={DocumentDetail}
                matchProps={matchProps}
                right
              />)}
          />
        </Switch>
      )}
    />
  );
}
