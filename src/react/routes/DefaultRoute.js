import React, { Fragment } from "react";
import styled from "styled-components";
import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";


export default function DefautlRoute({
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
      render={matchProps => (
        <MainLayout
          component={component}
          rightComponent={rightComponent}
          controlComponent={controlComponent}
          footerComponent={footerComponent}
          onSwiped={onSwiped}
          show={show}
          showControl={showControl}
          matchProps={matchProps}
        />
      )}
    />
  );
}
