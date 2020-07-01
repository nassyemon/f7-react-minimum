import { compose } from "recompose";
import { connect } from "react-redux";
import { fetchDocuments } from "../../actions/documents";
import { getData, isLoaded } from "../../selectors/documents";
import Documents from "./Documents";

const mapStateToProps = state => {
  return {
    data: getData(state),
    loaded: isLoaded(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
      return dispatch(fetchDocuments())
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Documents);
