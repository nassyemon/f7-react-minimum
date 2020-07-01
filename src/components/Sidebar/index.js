import { compose } from "recompose";
import { connect } from "react-redux";
import { hasSession, getUserName } from "../../selectors/login";
import { replaceToLogin, moveToDocuments, moveToSetting } from "../../actions/navigation";
import { closeSidepanel } from "../../actions/sidepanel";
import Sidebar from "./Sidebar";
import { logout } from "../../actions/login";

const mapStateToProps = state => {
  return {
    isLoggedIn: hasSession(state),
    userName: getUserName(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickSidepanel: () => dispatch(closeSidepanel()),
    onClickDocuments: () => dispatch(moveToDocuments()),
    onClickLogin: () => dispatch(replaceToLogin()),
    onClickLogout: () => dispatch(logout()),
    onClickSetting: () => dispatch(moveToSetting()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);
