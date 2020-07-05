import { compose } from "recompose";
import { connect } from "react-redux";
import { getData, isLoaded, isLoading } from "../../../redux/selectors/detail";
import { fetchDocumentDetail, clearDocumentDetail } from "../../../redux/actions/detail";
import DocumentDetail from "./DocumentDetail";

const mapStateToProps = (state, ownProps) => ({
  data: getData(state),
  loading: isLoading(state),
  loaded: isLoaded(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match, hasSession } = ownProps;
  const id = match?.params?.id;
  return {
    id,
    onUnmount: () => dispatch(clearDocumentDetail()),
    onMount: async () => {
      if (hasSession) {
        await dispatch(fetchDocumentDetail(id));
        return true;
      }
      return false;
    },
  };
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(DocumentDetail);
