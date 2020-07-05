import { compose } from "recompose";
import { connect } from "react-redux";
import { moveToDocumentDetail } from "../../redux/actions/navigation";
import { fetchDocuments, toggleDocumentSelect } from "../../redux/actions/documents";
import { getMergedData, isLoaded, isLoading } from "../../redux/selectors/documents";
import Documents from "./Documents";


const mapStateToProps = (state, { match }) => {
  return {
    mode: getMode(match),
    data: getMergedData(state),
    loaded: isLoaded(state),
    loading: isLoading(state),
  };
};

const mapDispatchToProps = (dispatch, { hasSession, match }) => {
  return {
    onMount: async () => {
      if (hasSession) {
        await dispatch(fetchDocuments());
        return true;
      }
      return false;
    },
    reloadDocuments: () => dispatch(fetchDocuments()),
    onClickItem: (id) => () => {
      const mode = getMode(match);
      if (mode === "edit") {
        return dispatch(toggleDocumentSelect(id));
      }
      return dispatch(moveToDocumentDetail(id))
    },
  }
};

function getMode(match) {
  const lastPath = match.path.split("/").pop();
  const mode = lastPath === "edit" ? "edit" : "";
  return mode;
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Documents);
