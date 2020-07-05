import React, { Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import BackIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

//  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);

const Headerbar = styled(AppBar)`
  z-index: 1200;
  background: #fcfcfc;
  color: #888888;
`;

const AppToolbar = styled(Toolbar)`
  height: ${({ theme }) => theme.spacing(5)}px;
  min-height: 0px;
`

const HeaderTitle = styled(Typography)`
  flex-grow: 1;
  z-index: 1200;
`;

function Header(props) {
  const { classes, onClicHamberger, onClickBack, showMenu, showBack } = props;
  return (
    <Headerbar position="fixed" elevation={1} >
      <AppToolbar disableGutters>
        {showBack && (
          <Fragment>
            <IconButton
              color="inherit"
              aria-label="back"
              onClick={onClickBack}
            >
              <BackIcon />
            </IconButton>
            <HeaderTitle variant="subtitle1" color="inherit" noWrap onClick={onClickBack}>
              戻る
            </HeaderTitle>
          </Fragment>
        )}
        {showMenu && (
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
        )}
      </AppToolbar>
    </Headerbar>
  );
}

export default withStyles(styles)(Header);
