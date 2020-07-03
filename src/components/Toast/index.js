import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import styled from "styled-components";
import { clearToast } from "../actions/../toast";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import { getMessage, getType, isVisible } from "../../selectors/toast";

const ToastPaper = styled(Paper)`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme, message }) => `
    z-index: 700;
    width: ${theme.spacing(10)}px;
    height: ${theme.spacing(10)}px;
    top: calc(50vh - ${theme.spacing(5)}px);
    left: calc(50vw - ${theme.spacing(5)}px);
  `}
  background-color: rgb(153, 193, 60, 0.8);
`;

const SuccessIcon = styled(DoneOutlineIcon)`
  ${({ theme }) => `
    width: ${theme.spacing(6)}px;
    height: ${theme.spacing(6)}px;
  `}
  color: #ffffff;
`;

const Title = styled.span`
  color: #ffffff;
  font-size: 8px;
`;

function Toast({ onClick, message, visible }) {
  return (
    <Grow in={visible} timeout={visible ? 300 : 600} >
      <ToastPaper elevation={2} onClick={onClick}>
        <SuccessIcon />
        <Title>{message}</Title>
      </ToastPaper>
    </Grow>
  );
}

const mapStateToProps = (state) => ({
  visible: isVisible(state),
  message: getMessage(state),
  type: getType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(clearToast()),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Toast);