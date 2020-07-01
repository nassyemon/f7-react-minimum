import React from "react";
import Camera from "react-html5-camera-photo";
import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default ({ handleTakePhoto }) => (
  <Root>
    <Camera
      idealResolution={{
        width: 480,
        height: 720,
      }}
      idealFacingMode="FACING_MODES.ENVIRONMENT"
      onTakePhoto={dataUri => {
        handleTakePhoto(dataUri);
      }}
    />
  </Root>
);
