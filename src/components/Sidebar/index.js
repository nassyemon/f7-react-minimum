import { compose } from "recompose";
import { connect } from "react-redux";
import { hasSession, getUserName } from "../../selectors/login";
import { moveToDocuments, moveToSetting } from "../../actions/navigation";
import { closeSidepanel } from "../../actions/sidepanel";
import Sidebar from "./Sidebar";
import { logout, reauth } from "../../actions/login";

const mapStateToProps = (state) => ({
  isLoggedIn: hasSession(state),
  userName: getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickSidepanel: () => dispatch(closeSidepanel()),
  onClickDocuments: () => dispatch(moveToDocuments()),
  onClickLogout: () => dispatch(logout()),
  onClickSetting: () => dispatch(moveToSetting()),
  onClickRefresh: () => dispatch(reauth()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sidebar);
