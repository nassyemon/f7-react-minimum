import React from "react";
import Html5CameraPhoto from "react-html5-camera-photo";
import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StaticProperties = {
  disableDefaultSwipe: true,
};


function Camera({ handleTakePhoto }) {
  return (
    <Root>
      <Html5CameraPhoto
        idealFacingMode="FACING_MODES.ENVIRONMENT"
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
    </Root>
  );
}

export default Object.assign(Camera, StaticProperties);
