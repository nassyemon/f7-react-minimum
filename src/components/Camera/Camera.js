import React from 'react';
import Camera from 'react-html5-camera-photo';
import styled from "styled-components";


const Root = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default ({ handleTakePhoto }) => (
<Root>
    <Camera
        isFullscreen
        isMaxResolution
        idealResolution={{
            width: 1080,
            height: 1920
        }}
        idealFacingMode="FACING_MODES.ENVIRONMENT"
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
</Root>
);
