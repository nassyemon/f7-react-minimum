import React, { Fragment } from "react";
import styled from "styled-components";
import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";


export default function DefautlRoute({ component, rightComponent, onSwiped, onRightSwiped, ...rest }) {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout
          component={component}
          rightComponent={rightComponent}
          onSwiped={onSwiped}
          onRightSwiped={onRightSwiped}
          matchProps={matchProps}
        />
      )}
    />
  );
}
