import { compose } from "recompose";
import { connect } from "react-redux";
import { hasSession, getUserName } from "../../../redux/selectors/login";
import { moveToDocuments, moveToSetting } from "../../../redux/actions/navigation";
import { closeSidepanel } from "../../../redux/actions/sidepanel";
import Sidebar from "./Sidebar";
import { logout, reauth } from "../../../redux/actions/login";

const mapStateToProps = (state) => ({
  isLoggedIn: hasSession(state),
  userName: getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  closeSidepanel: () => dispatch(closeSidepanel()),
  onClickDocuments: () => dispatch(moveToDocuments()),
  onClickLogout: () => dispatch(logout()),
  onClickSetting: () => dispatch(moveToSetting()),
  onClickRefresh: () => dispatch(reauth()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);
