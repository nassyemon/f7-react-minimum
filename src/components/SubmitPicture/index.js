import { connect } from "react-redux";
import getNativePicture from "../../modules/camera/getNativePicture";
import { getLastPicture } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import { replaceToWebCamera } from "../../actions/navigation";
import SubmitPicture from "./SubmitPicture";

const mapStateToProps = state => {
  return {
    picture: getLastPicture(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPicture);
