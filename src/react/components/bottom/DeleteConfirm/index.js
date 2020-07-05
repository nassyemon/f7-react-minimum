import { compose } from "recompose";
import { connect } from "react-redux";
import {
  fetchDocuments,
} from "../../../../redux/actions/documents";
import {
  getMergedData,
  isLoaded,
  isLoading,
} from "../../../../redux/selectors/documents";
import DeleteConfirm from "./DeleteConfirm";

const mapStateToProps = (state, { match }) => {
  const mergedData = getMergedData(state);
  return {
    mode: getMode(match),
    data: mergedData?.length > 0 ? mergedData.filter(x => x.selected) : [],
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
  };
};

function getMode(match) {
  const lastPath = match.path.split("/").pop();
  const mode = lastPath === "edit" ? "edit" : "";
  return mode;
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(DeleteConfirm);
