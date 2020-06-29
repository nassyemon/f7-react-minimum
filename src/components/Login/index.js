import { compose } from "recompose";
import { connect } from "react-redux";
import Login from "./Login";
import tryOauth from "../../modules/tryOAuth";

const mapDispatchToProps = dispatch => {
  return {
    onClickLogin: () => tryOauth(dispatch),
  };
};

export default compose(connect(null, mapDispatchToProps))(Login);
