import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({});

const StyledDrawer = styled(Drawer)`
  & > div {
    position: fixed;
    top: ${({ theme }) => theme.spacing(8)}px;
    white-space: nowrap;
    width: ${props => props.width};
    transition: ${({ theme }) =>
      theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })};
    ${props =>
      !props.open
        ? `
    overflow-x: hidden;
    width: 0vw;
    transition: ${({ theme }) =>
      theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })};
    ${({ theme }) => theme.breakpoints.up("sm")}: {
      width: ${({ theme }) => theme.spacing.unit * 9}
    };
    `
        : ""}
  }
`;

function Sidebar({ open, onClickSidepanel, sideBarWidth, onClickLogin }) {
  return (
    <StyledDrawer variant="permanent" width={sideBarWidth} open={open} onClick={onClickSidepanel}>
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="なんとかかんとか一覧" />
          </ListItem>
        </Link>
        <Link onClick={onClickLogin}>
          <ListItem button>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText primary="ログイン" />
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </Link>
        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="設定" />
          </ListItem>
        </Link>
      </List>
    </StyledDrawer>
  );
}

export default withStyles(styles)(Sidebar);
