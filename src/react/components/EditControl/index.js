import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from "@material-ui/core/styles";
import { moveToDocumentsEdit } from "../../../redux/actions/navigation";


function EditControl({ onClick }) {
  return (
    <Box onClick={onClick}>
      <EditIcon fontSize="large" />
    </Box>
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