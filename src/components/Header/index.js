import { compose } from "recompose";
import { connect } from "react-redux";
import { toggleSidepanel } from "../../actions/sidepanel";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => ({
  onClicHamberger: () => dispatch(toggleSidepanel()),
});

export default compose(connect(null, mapDispatchToProps))(Header);
