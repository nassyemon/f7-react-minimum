import { compose } from "recompose";
import { connect } from "react-redux";
import { moveToDocumentDetail } from "../../actions/navigation";
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
  reloadDocuments: () => dispatch(fetchDocuments()),
  onClickItem: (id) => () => dispatch(moveToDocumentDetail(id)),
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Documents);
