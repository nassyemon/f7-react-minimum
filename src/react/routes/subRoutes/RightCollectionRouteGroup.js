import React from "react";
import { Route } from "react-router";
import BaseLayout from "../../layouts/DocumentsCollectionLayoutBase";
import EditControl from "../../components/control/EditControl";
import GoBackHeader from "../../components/header/GoBackHeader";
import EditFooter from "../../components/footer/EditFooter";
import DeleteFooter from "../../components/footer/DeleteFooter";
import DeleteConfirm from "../../components/bottom/DeleteConfirm";

export default function RouteGroup(paths) {
  const arrayEnsured = Array.isArray(paths) ? paths : [paths];
  return arrayEnsured.map(path => [
    <Route exact path={`${path}/edit`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          footerComponent={EditFooter}
          mainProps={getMainProps()}
        />)}
    />,
    <Route exact path={`${path}/delete`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          bottomComponent={DeleteConfirm}
          footerComponent={DeleteFooter}
          mainProps={getMainProps()}
          bottom
        />)}
    />,
    <Route exact path={`${path}/detail/:id`}
      render={(matchProps) => (
        <BaseLayout
          headerComponent={GoBackHeader}
          matchProps={matchProps}
          mainProps={getMainProps()}
          right
        />)}
    />,
    <Route exact path={`${path}/`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          controlComponent={EditControl}
          control
          mainProps={getMainProps()}
        />)}
    />
  ]).reduce((acc, value) => [...acc, ...value], []);
}

function getMainProps() {
  return {
    collectionIndex: 1,
  }
}
