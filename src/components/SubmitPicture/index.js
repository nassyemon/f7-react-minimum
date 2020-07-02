import { connect } from "react-redux";
import getNativePicture from "../../modules/camera/getNativePicture";
import { getLastPicture } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import { replaceToWebCamera } from "../../actions/navigation";
import { createDocument } from "../../actions/document";
import SubmitPicture from "./SubmitPicture";

const mapStateToProps = (state) => ({
  picture: getLastPicture(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickRetakeButton: () => {
    if (usingCordova()) {
      return getNativePicture(
        Camera.PictureSourceType.CAMERA,
        Camera.DestinationType.FILE_URI,
        dispatch
      );
    }
    return dispatch(replaceToWebCamera());
  },
  onClickSubmitButton: async () => {
    await dispatch(createDocument());
  },
  /*
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    */
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPicture);
