import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserName } from "../../selectors/login";
import DocumentDetail from "./DocumentDetail";

const mapStateToProps = (state) => ({
  userName: getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps))(DocumentDetail);
