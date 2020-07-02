import { compose } from "recompose";
import { connect } from "react-redux";
import { fetchDocuments } from "../../actions/document";
import { getData, isLoaded, isLoading } from "../../selectors/documents";
import Documents from "./Documents";

const mapStateToProps = (state) => ({
  data: getData(state),
  loaded: isLoaded(state),
  loading: isLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(fetchDocuments()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Documents);
