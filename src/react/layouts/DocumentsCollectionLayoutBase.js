import React from "react";

import MainLayout from "./MainLayout";
import DocumentsCollectionLayout from "./subLayouts/DocumentCollectionsLayout";
import DocumentDetail from "../components/right/DocumentDetail";

function BaseLayout({
  matchProps,
  mainComponent = DocumentsCollectionLayout,
  rightComponent = DocumentDetail,
  controlComponent,
  footerComponent,
  bottomComponent,
  control,
  right,
  bottom,
  mainProps,
}) {
  return (
    <MainLayout
      mainComponent={mainComponent}
      rightComponent={rightComponent}
      controlComponent={controlComponent}
      footerComponent={footerComponent}
      bottomComponent={bottomComponent}
      matchProps={matchProps}
      right={right}
      bottom={bottom}
      control={control}
      mainProps={mainProps}
    />
  );
}

export default BaseLayout;