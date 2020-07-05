import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

//  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

const StaticProperties = {
  height: "56px",
  paddingTop: "16px",
};

const Headerbar = styled(AppBar)`
  z-index: 1200;
  height: ${({ height }) => height};
  background: #fcfcfc;
  color: #888888;
  display: flex;
  padding-top: ${({ paddingTop }) => paddingTop};
`;

const AppToolbar = styled(Toolbar)`
height: ${({ height }) => height};
  min-height: 0px;
`;

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  z-index: 1200;
`;

function GoBackHeader(props) {
  const { onClickBack } = props;
  return (
    <Headerbar position="fixed" elevation={1}  {...StaticProperties}>
      <AppToolbar disableGutters>
        <Fragment>
          <IconButton color="inherit" aria-label="back" onClick={onClickBack}>
            <BackIcon />
          </IconButton>
          <HeaderTitle
            variant="subtitle1"
            color="inherit"
            noWrap
            onClick={onClickBack}
          >
            戻る
            </HeaderTitle>
        </Fragment>
      </AppToolbar>
    </Headerbar >
  );
}

export default withStyles(styles)(Object.assign(GoBackHeader, StaticProperties));
