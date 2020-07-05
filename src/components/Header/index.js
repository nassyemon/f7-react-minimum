import { compose } from "recompose";
import { connect } from "react-redux";
import { toggleSidepanel } from "../../redux/actions/sidepanel";
import { goBack } from "../../redux/actions/navigation";
import Header from "./Header";

const mapDispatchToProps = (dispatch) => ({
  onClicHamberger: () => dispatch(toggleSidepanel()),
  onClickBack: () => dispatch(goBack()),
});

export default compose(connect(null, mapDispatchToProps))(Header);
