import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from "styled-components";
import { withStyles } from "@material-ui/core";

const Root = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  background-color: rgba(64,64,64,0.5);
`;

const SpinnerBox = styled.div`
  width: 70vw;
  height: 50px;
  border-radius: 8px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const TextContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  padding-left: 20px;
`

function GlobalIndicator({ show, sending, deleting }) {
  return show ? (
    <Root>
      <SpinnerBox>
        <CircularProgress size={30} />
        <TextContainer>
          <Typography>{getMessage(sending, deleting)}</Typography>
        </TextContainer>
      </SpinnerBox>
    </Root>
  ) : null;
}

function getMessage(showing, deleting) {
  if (showing) {
    return "データを送信しています";
  }
  if (deleting) {
    return "データを削除しています";
  }
  return "通信中です";
}

export default withStyles(() => ({}))(GlobalIndicator);
