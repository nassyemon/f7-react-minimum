import { connect } from "react-redux";

import PanelLeft from "../components/modals/PanelLeft";
import {
  closePanelLeft,
  goToAboutPageFromLeftPanel,
  goToFormPageFromLeftPanel,
} from "../actions/PanelLeftActions";
import { logout } from "../actions/LoginActions";

const mapDispatchToProps = dispatch => {
  return {
    onClosePanelLeft: () => dispatch(closePanelLeft()),
    onGoToAbout: () => dispatch(goToAboutPageFromLeftPanel()),
    onGoToForm: () => dispatch(goToFormPageFromLeftPanel()),
    onLogout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(PanelLeft);
