import { compose } from "recompose";
import { connect } from "react-redux";
import { login } from "../../actions/login";
import { hasSession } from "../../selectors/login";
import Login from "./Login";
import tryOauth from "../../modules/tryOAuth";

const mapStateToProps = (state) => ({
  isLoggedIn: hasSession(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogin: async () => {
    try {
      const code = await tryOauth();
      dispatch(login(code));
    } catch (error) {
      // TODO:
      alert("ログイン処理に失敗しました.");
    }
  },
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(Login);
