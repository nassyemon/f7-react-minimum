import { connect } from "react-redux";
import { clearPicture, openWebApiCamera } from "../../actions/picture";
import getNativePicture from "../../modules/camera/getNativePicture";
import { getPictures } from "../../selectors/picture";
import Footer from "./Footer";

const mapStateToProps = state => {
  return {
    pictures: getPictures(state),
    hasHTML5mediaDevice: !!navigator.mediaDevices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCameraButton: () =>
      getNativePicture(
        Camera.PictureSourceType.CAMERA,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    /*
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    */
    onClickWebApiCameraButton: () => dispatch(openWebApiCamera()),
    onClickClearPicture: () => dispatch(clearPicture()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
