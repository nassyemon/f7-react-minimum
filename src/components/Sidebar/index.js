import { compose } from "recompose";
import { connect } from "react-redux";
import { replaceToLogin } from "../../actions/navigation";
import { closeSidepanel } from "../../actions/sidepanel";
import Sidebar from "./Sidebar";

const mapDispatchToProps = dispatch => {
  return {
    onClickSidepanel: () => dispatch(closeSidepanel()),
    onClickLogin: () => dispatch(replaceToLogin()),
  };
};

export default compose(connect(null, mapDispatchToProps))(Sidebar);
