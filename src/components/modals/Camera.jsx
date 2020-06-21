import React from 'react';
import Camera from 'react-html5-camera-photo';
import { Popup } from 'framework7-react';


export default ({ handleTakePhoto }) => (
<Popup>
    <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
</Popup>
);