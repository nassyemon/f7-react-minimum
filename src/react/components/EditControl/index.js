import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";
import { moveToDocumentsEdit } from "../../../redux/actions/navigation";


function EditControl({ onClick }) {
  return (
    <Fab color="secondary" onClick={onClick}>
      <EditIcon fontSize="large" />
    </Fab>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(moveToDocumentsEdit()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(EditControl);