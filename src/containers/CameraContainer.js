import { connect } from 'react-redux'
import Camera from '../components/modals/Camera';
import { addPicture, closeWebApiCamera } from '../actions/CameraActions';


const mapDispatchToProps = (dispatch) => {
  return {
    handleTakePhoto: (dataUri) => {
        dispatch(addPicture(dataUri));
        dispatch(closeWebApiCamera());
    }
  };
};

export default connect(null, mapDispatchToProps)(Camera);
