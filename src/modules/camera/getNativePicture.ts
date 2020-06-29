import { addPicture } from "../../actions/picture";
import { moveToSubmitPicture } from "../../actions/navigation";

export default function getNativePicture(
  sourceType: any,
  destinationType: any,
  dispatch: any
) {
    return navigator.camera.getPicture(
      onSuccess(dispatch, destinationType),
      onFail(dispatch),
      getCameraOptions(sourceType, destinationType),
    );
  }

function getCameraOptions(sourceType, destinationType) {
  return  {
    quality: 90,
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
      dispatch(addPicture("data:image/jpeg;base64, " + uri, Date.now()));
    } else {
      dispatch(addPicture(uri, Date.now()));
    }
    return dispatch(moveToSubmitPicture());
  };
}

function onFail(dispatch: any) {
  return (message: string) => {
    alert(message);
    return;
  };
}
