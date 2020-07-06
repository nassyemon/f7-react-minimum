import React from "react";
import { Route, Switch } from "react-router";
import BaseLayout from "../../layouts/DocumentsCollectionLayoutBase";
import EditControl from "../../components/control/EditControl";
import GoBackHeader from "../../components/header/GoBackHeader";
import EditFooter from "../../components/footer/EditFooter";
import DeleteFooter from "../../components/footer/DeleteFooter";
import DeleteConfirm from "../../components/bottom/DeleteConfirm";

export default function RightCollectionRoute({
  match,
  ...rest
}) {
  return (
    <Switch>
      <Route exact path={`${match.path}/`}
        render={(matchProps) => (
          <BaseLayout
            matchProps={matchProps}
            controlComponent={EditControl}
            control
            mainProps={getMainProps()}
          />)}
      />
      <Route exact path={`${match.path}/edit`}
        render={(matchProps) => (
          <BaseLayout
            matchProps={matchProps}
            footerComponent={EditFooter}
            mainProps={getMainProps()}
          />)}
      />
      <Route exact path={`${match.path}/delete`}
        render={(matchProps) => (
          <BaseLayout
            matchProps={matchProps}
            bottomComponent={DeleteConfirm}
            footerComponent={DeleteFooter}
            mainProps={getMainProps()}
            bottom
          />)}
      />
      <Route exact path={`${match.path}/detail/:id`}
        render={(matchProps) => (
          <BaseLayout
            headerComponent={GoBackHeader}
            matchProps={matchProps}
            mainProps={getMainProps()}
            right
          />)}
      />
    </Switch>
  );
}

function getMainProps() {
  return {
  }
}