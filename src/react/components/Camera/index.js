import { connect } from "react-redux";
import { addPicture } from "../../../redux/actions/picture";
import { replaceToSubmitPicture } from "../../../redux/actions/navigation";
import Camera from "./Camera";

const mapDispatchToProps = (dispatch) => ({
  handleTakePhoto: (dataUri) => {
    dispatch(addPicture(dataUri, Date.now()));
    dispatch(replaceToSubmitPicture());
  },
});

export default connect(null, mapDispatchToProps)(Camera);
