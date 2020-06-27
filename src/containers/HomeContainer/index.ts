import { connect } from "react-redux";

import HomePage from "../../components/pages/HomePage";
import { goToAbout } from "../../actions/AboutActions";
import { goToForm } from "../../actions/FormActions";
import { goToDynamicRoute } from "../../actions/DynamicRouteActions";
import { goToDefaultRoute } from "../../actions/DefaultRouteActions";
import { openPanelLeft } from "../../actions/PanelLeftActions";
import { openPanelRight } from "../../actions/PanelRightActions";
import { openPopup } from "../../actions/PopupActions";
import { openLogin } from "../../actions/LoginActions";
import { clearPicture, openWebApiCamera } from "../../actions/CameraActions";
import getNativePicture from "./utils/getNativePicture.ts";
import { getPictures } from "../../selectors/PictureSelectors";

const mapStateToProps = state => {
  return {
    pictures: getPictures(state),
    hasHTML5mediaDevice: !!navigator.mediaDevices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGoToAbout: () => dispatch(goToAbout()),
    onGoToForm: () => dispatch(goToForm()),
    onGoToDynamicRoute: () => dispatch(goToDynamicRoute()),
    onGoToDefaultRoute: () => dispatch(goToDefaultRoute()),
    onOpenLeftPanel: () => dispatch(openPanelLeft()),
    onOpenRightPanel: () => dispatch(openPanelRight()),
    onOpenPopup: () => dispatch(openPopup()),
    onOpenLoginScreen: () => dispatch(openLogin()),
    onClickCameraButton: () =>
      getNativePicture(
        Camera.PictureSourceType.CAMERA,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    onClickWebApiCameraButton: () => dispatch(openWebApiCamera()),
    onClickClearPicture: () => dispatch(clearPicture()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
