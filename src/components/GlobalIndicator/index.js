import { compose } from "recompose";
import { connect } from "react-redux";
import { isSending as isPictureSending } from "../../selectors/picture";
import GlobalIndicator from "./GlobalIndicator";

const mapStateToProps = (state) => {
  const pictureSending = isPictureSending(state);
  const sending = [pictureSending].some(Boolean);
  return {
    sending,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps))(GlobalIndicator);
