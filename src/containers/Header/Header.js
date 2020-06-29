import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = theme => ({});
const HeaderTitle = styled(Typography)`
  flex-grow: 1;
`;

function Header(props) {
  const { classes, onClicHamberger } = props;
  return (
    <AppBar position="fixed">
      <Toolbar disableGutters={true} classes={{ root: classes.toolbarRoot }}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={onClicHamberger}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <HeaderTitle variant="subtitle1" color="inherit" noWrap>
          アプリちゃん
        </HeaderTitle>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
