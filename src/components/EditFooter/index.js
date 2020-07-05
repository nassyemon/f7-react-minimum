import { connect } from "react-redux";
// import { getPictures } from "../../redux/selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import {
  goBack,
} from "../../redux/actions/navigation";
import { closeSidepanel } from "../../redux/actions/sidepanel";
import { deleteDocuments } from "../../redux/actions/documents";
import { getSeleted } from "../../redux/selectors/documents";
import EditFooter from "./EditFooter";

const mapStateToProps = (state) => {
  const selected = getSeleted(state);
  return {
    isApp: usingCordova(),
    selectedCount: selected.length,
  };
}

const mapDispatchToProps = (dispatch) => ({
  onClickCancelButton: () => {
    dispatch(closeSidepanel());
    return dispatch(goBack());
  },
  onClickDeleteButton: () => {
    dispatch(closeSidepanel());
    const answer = confirm("選択したアイテムを本当に削除しますか？");
    if (answer) {
      dispatch(deleteDocuments());
    }
    return dispatch(goBack());
  },
  /*
    onClickAlbumButton: () =>
      getNativePicture(
        Camera.PictureSourceType.PHOTOLIBRARY,
        Camera.DestinationType.FILE_URI,
        dispatch
      ),
    */
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);
