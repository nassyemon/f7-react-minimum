import { connect } from "react-redux";
import getNativePicture from "../../modules/camera/getNativePicture";
// import { getPictures } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import {
  moveToWebCamera,
  moveToHome,
  moveToDocuments,
} from "../../actions/navigation";
import { closeSidepanel } from "../../actions/sidepanel";
import Footer from "./Footer";

const mapStateToProps = (state) => ({
  isApp: usingCordova(),
  hasWebCamera: !!navigator.mediaDevices,
});

const mapDispatchToProps = (dispatch) => ({
  onClickHomeButton: () => {
    dispatch(closeSidepanel());
    return dispatch(moveToHome());
  },
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
  onClickDocumentButton: () => {
    dispatch(closeSidepanel());
    return dispatch(moveToDocuments());
  }
  /*
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    */
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
