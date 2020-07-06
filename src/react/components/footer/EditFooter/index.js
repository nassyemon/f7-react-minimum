import { connect } from "react-redux";
// import { getPictures } from "../../../redux/selectors/picture";
import { usingCordova } from "../../../../modules/cordovaUtils";
import { goBack, moveToDocumentsDelete } from "../../../../redux/actions/navigation";
import { closeSidepanel } from "../../../../redux/actions/sidepanel";
import { getSeleted } from "../../../../redux/selectors/documents";
import EditFooter from "./EditFooter";

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
  onClickDeleteButton: () => dispatch(moveToDocumentsDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);
