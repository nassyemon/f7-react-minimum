import { connect } from "react-redux";
// import { getPictures } from "../../selectors/picture";
import { usingCordova } from "../../modules/cordovaUtils";
import {
  goBack,
} from "../../actions/navigation";
import { closeSidepanel } from "../../actions/sidepanel";
import { getSelectedData } from "../../selectors/documents";
import EditFooter from "./EditFooter";

const mapStateToProps = (state) => ({
  isApp: usingCordova(),
  selectedData: getSelectedData(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickCancelButton: () => {
    dispatch(closeSidepanel());
    return dispatch(goBack());
  },
  onClickDeleteButton: () => {
    const answer = confirm("選択したアイテムを本当に削除しますか？");
    dispatch(closeSidepanel());
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
