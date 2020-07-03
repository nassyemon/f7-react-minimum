import { compose } from "recompose";
import { connect } from "react-redux";
import { isSending as isPictureSending } from "../../selectors/picture";
import { isDeleting as isDocumentDeleting } from "../../selectors/documents";
import GlobalIndicator from "./GlobalIndicator";

const mapStateToProps = (state) => {
  const pictureSending = isPictureSending(state);
  const documentDeleting = isDocumentDeleting(state);
  const sending = [pictureSending].some(Boolean);
  const deleting = [documentDeleting].some(Boolean);
  return {
    show: sending || deleting,
    sending,
    deleting,
  };
}

const mapDispatchToProps = (dispatch) => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps))(GlobalIndicator);
