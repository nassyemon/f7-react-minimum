/// <reference types="cordova-plugin-camera" />
import { addPicture } from "../../redux/actions/picture";
import { moveToSubmitPicture } from "../../redux/actions/navigation";

export default function getNativePicture(
  sourceType: any,
  destinationType: any,
  dispatch: any
) {
  return navigator.camera.getPicture(
    onSuccess(dispatch, destinationType),
    onFail(dispatch),
    getCameraOptions(sourceType, destinationType)
  );
}

function getCameraOptions(sourceType, destinationType) {
  return {
    // Image Quality is temporary.
    targetWidth: 720,
    targetHeight: 1280,
    quality: 75,
    // Image Quality is temporary.
    sourceType,
    destinationType,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    cameraDirection: Camera.Direction.BACK,
    correctOrientation: true,
  };
}

function onSuccess(dispatch: any, destinationType: any) {
  return (uri: string) => {
    if (destinationType === Camera.DestinationType.DATA_URL) {
      dispatch(addPicture(`data:image/jpeg;base64, ${uri}`, Date.now()));
    } else {
      dispatch(addPicture(uri, Date.now()));
    }
    return dispatch(moveToSubmitPicture());
  };
}

function onFail(dispatch: any) {
  return (message: string) => {
    alert(message);
  };
}
