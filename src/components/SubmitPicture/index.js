import { connect } from "react-redux";
import getNativePicture from "../../modules/camera/getNativePicture";
import { getLastPicture, isSending } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import { replaceToWebCamera, replaceToDocuments } from "../../actions/navigation";
import { sendPicture } from "../../actions/picture";
import SubmitPicture from "./SubmitPicture";

const mapStateToProps = (state) => ({
  sending: isSending(state),
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
    await dispatch(sendPicture());
    dispatch(replaceToDocuments());
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
