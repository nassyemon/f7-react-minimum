import { compose } from "recompose";
import { connect } from "react-redux";
import { moveToDocumentsLeft, moveToDocumentsRight } from "../../../../redux/actions/navigation";
import DocumentsCollectionLayout from "./DocumentsCollectionLayout";

const mapStateToProps = (state, { match }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, { hasSession, match }) => {
  return {
    onClickLeft: () => dispatch(moveToDocumentsLeft()),
    onClickRight: () => dispatch(moveToDocumentsRight()),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(DocumentsCollectionLayout);
