import { addPicture } from "../../actions/picture";
import { moveToSubmitPicture } from "../../actions/navigation";

export default function getNativePicture(
  sourceType: any,
  destinationType: any,
  dispatch: any
) {
    return navigator.camera.getPicture(
      onSuccess(dispatch),
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

function onSuccess(dispatch: any) {
  return (fileUri: string) => {
    console.log(fileUri);
    dispatch(addPicture(fileUri, Date.now()));
    return dispatch(moveToSubmitPicture());
  };
}

function onFail(dispatch: any) {
  return (message: string) => {
    alert(message);
    return;
  };
}
