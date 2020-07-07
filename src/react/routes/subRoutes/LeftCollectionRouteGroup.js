import React from "react";
import { Route } from "react-router";
import BaseLayout from "../../layouts/DocumentsCollectionLayoutBase";
import EditControl from "../../components/control/EditControl";
import GoBackHeader from "../../components/header/GoBackHeader";
import EditFooter from "../../components/footer/EditFooter";
import DeleteFooter from "../../components/footer/DeleteFooter";
import DeleteConfirm from "../../components/bottom/DeleteConfirm";

const defaultTabIndex = 1;

export default function RouteGroup(paths) {
  const arrayEnsured = Array.isArray(paths) ? paths : [paths];
  return arrayEnsured.map(path => [
    <Route exact path={`${path}/edit`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          footerComponent={EditFooter}
          mainProps={getMainProps(defaultTabIndex)}
        />)}
    />,
    <Route exact path={`${path}/delete`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          bottomComponent={DeleteConfirm}
          footerComponent={DeleteFooter}
          mainProps={getMainProps(defaultTabIndex)}
          bottom
        />)}
    />,
    <Route exact path={`${path}/detail/:id`}
      render={(matchProps) => (
        <BaseLayout
          headerComponent={GoBackHeader}
          matchProps={matchProps}
          mainProps={getMainProps(defaultTabIndex)}
          right
        />)}
    />,
    <Route exact path={`${path}/item1`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          mainProps={getMainProps(0)}
        />)}
    />,
    <Route exact path={[`${path}/`, `${path}/item2`]}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          controlComponent={EditControl}
          mainProps={getMainProps(1)}
          control
        />)}
    />,
    <Route exact path={`${path}/item3`}
      render={(matchProps) => (
        <BaseLayout
          matchProps={matchProps}
          mainProps={getMainProps(2)}
        />)}
    />,
  ]).reduce((acc, value) => [...acc, ...value], []);
}

function getMainProps(tabIndex) {
  return {
    collectionIndex: 0,
    tabIndex,
  }
}
