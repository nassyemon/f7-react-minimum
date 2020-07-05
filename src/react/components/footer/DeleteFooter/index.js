import { connect } from "react-redux";
// import { getPictures } from "../../../redux/selectors/picture";
import { usingCordova } from "../../../../modules/cordovaUtils";
import { goBack, replaceToDocuments } from "../../../../redux/actions/navigation";
import { closeSidepanel } from "../../../../redux/actions/sidepanel";
import { deleteDocuments } from "../../../../redux/actions/documents";
import { getSeleted } from "../../../../redux/selectors/documents";
import DeleteFooter from "./DeleteFooter";

const mapStateToProps = (state) => {
  const selected = getSeleted(state);
  return {
    isApp: usingCordova(),
    selectedCount: selected.length,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onClickCancelButton: () => {
    dispatch(closeSidepanel());
    return dispatch(goBack());
  },
  onClickDeleteButton: async () => {
    dispatch(closeSidepanel());
    await dispatch(deleteDocuments());
    return dispatch(replaceToDocuments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFooter);
