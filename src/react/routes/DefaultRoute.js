import React from "react";
import { Route } from "react-router";
import MainLayout from "../layouts/MainLayout";

export default function DefautlRoute({
  mainComponent,
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
      render={(matchProps) => (
        <MainLayout
          mainComponent={mainComponent}
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
