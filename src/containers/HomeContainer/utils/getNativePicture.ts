import { addPicture } from "../../../actions/CameraActions";

export default function getNativePicture(
  sourceType: any,
  destinationType: any,
  dispatch: any,
) {
  navigator.camera.getPicture(onSuccess(dispatch), onFail(dispatch), {
    quality: 50,
    sourceType,
    destinationType,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    correctOrientation: true,
  });
}

function onSuccess(dispatch: any) {
  return fileUri => {
    console.log(fileUri);
    dispatch(addPicture(fileUri, Date.now()));
  };
}

function onFail(dispatch: any) {
  return message => {
    alert(message);
  };
}
