import { compose } from "recompose";
import { connect } from "react-redux";
import DocumentsLayout from "./DocumentsLayout";

const mapStateToProps = (state, { match }) => {
  return {
  };
};

const mapDispatchToProps = (dispatch, { hasSession, match }) => {
  return {
    handleSelectPanel: () => () => {

    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(DocumentsLayout);
