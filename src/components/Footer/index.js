import { connect } from "react-redux";
import getNativePicture from "../../modules/camera/getNativePicture";
import { getPictures } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import { moveToWebCamera } from "../../actions/navigation";
import Footer from "./Footer";

const mapStateToProps = state => {
  return {
    isApp: usingCordova(),
    hasWebCamera: !!navigator.mediaDevices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickCameraButton: () => {
      if (usingCordova()) {
        return getNativePicture(
          Camera.PictureSourceType.CAMERA,
          Camera.DestinationType.DATA_URL,
          dispatch
        );
      }
      return dispatch(moveToWebCamera());
    },
    /*
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
