import { compose } from "recompose";
import { connect } from "react-redux";
import { getData, isLoaded, isLoading } from "../../selectors/detail";
import { fetchDocumentDetail, clearDocumentDetail } from "../../actions/detail";
import DocumentDetail from "./DocumentDetail";

const mapStateToProps = (state) => ({
  data: getData(state),
  loading: isLoading(state),
  loaded: isLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUnmount: () => dispatch(clearDocumentDetail()),
  handleFetchDocumentDetailById: (id) => () => dispatch(fetchDocumentDetail(id)),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { match } = ownProps;
  const { handleFetchDocumentDetailById } = dispatchProps;
  const id = match?.params?.id;
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    id,
    onMount: handleFetchDocumentDetailById(id),
  };
};


export default compose(connect(mapStateToProps, mapDispatchToProps, mergeProps))(DocumentDetail);
