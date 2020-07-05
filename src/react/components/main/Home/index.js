import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserName } from "../../../../redux/selectors/login";
import Home from "./Home";

const mapStateToProps = (state) => ({
  userName: getUserName(state),
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
