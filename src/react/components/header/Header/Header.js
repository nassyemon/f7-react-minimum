import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

//  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

const StaticProperties = {
  height: "40px",
};

const Headerbar = styled(AppBar)`
  background: #fcfcfc;
  color: #888888;
  display: flex;
  position: relative;
`;

const AppToolbar = styled(Toolbar)`
  min-height: 0px;
  height: ${({ height }) => height};
`;

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  z-index: 1200;
`;

function Header(props) {
  const { onClicHamberger } = props;
  return (
    <Headerbar elevation={1}>
      <AppToolbar disableGutters height={StaticProperties.height}>
        <Fragment>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={onClicHamberger}
          >
            <MenuIcon />
          </IconButton>
          <HeaderTitle variant="subtitle1" color="inherit" noWrap>
            アプリちゃん
          </HeaderTitle>
        </Fragment>
      </AppToolbar>
    </Headerbar>
  );
}

export default withStyles(styles)(Object.assign(Header, StaticProperties));
