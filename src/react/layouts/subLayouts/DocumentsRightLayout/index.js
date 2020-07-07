import { compose } from "recompose";
import { connect } from "react-redux";
import DocumentsRightLayout from "./DocumentsRightLayout";
import {
  moveToDocumentsRightItem1,
  moveToDocumentsRightItem2,
} from "../../../../redux/actions/navigation";


const mapStateToProps = (state, { match }) => {
  return {
  };
};


const mapDispatchToProps = (dispatch, { hasSession, match }) => {
  return {
    moveToItem1: () => dispatch(moveToDocumentsRightItem1()),
    moveToItem2: () => dispatch(moveToDocumentsRightItem2()),
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { moveToItem1, moveToItem2 } = dispatchProps;
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onTabIndexChange: (idx) => {
      switch (idx) {
        case 0:
          return moveToItem1();
        case 1:
          return moveToItem2();
        default:
          return null;
      }
    },
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps, mergeProps))(DocumentsRightLayout);
