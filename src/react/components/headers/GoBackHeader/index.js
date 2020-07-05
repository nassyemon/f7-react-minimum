import { compose } from "recompose";
import { connect } from "react-redux";
import { goBack } from "../../../../redux/actions/navigation";
import GoBackHeader from "./GoBackHeader";

const mapDispatchToProps = (dispatch) => ({
  onClickBack: () => dispatch(goBack()),
});

export default compose(connect(null, mapDispatchToProps))(GoBackHeader);
