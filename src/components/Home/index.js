import { compose } from "recompose";
import { connect } from "react-redux";
import { getUserName } from "../../selectors/login";
import Home from "./Home";

const mapStateToProps = state => {
  return {
    userName: getUserName(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Home);
