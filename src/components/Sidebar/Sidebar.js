import React, { Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CachedIcon from "@material-ui/icons/Cached";
import SettingsIcon from "@material-ui/icons/Settings";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { Link } from "react-router-dom";
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

function Sidebar(props) {
  const { open, isLoggedIn, onClickSidepanel, sideBarWidth, onClickRefresh, onClickLogout, onClickDocuments, onClickSetting } = props;
  return (
    <StyledDrawer
      variant="permanent"
      width={sideBarWidth}
      open={open}
      onClick={onClickSidepanel}
    >
      <List>
        {isLoggedIn ? (
          <Fragment>
            <ListItem button onClick={onClickDocuments}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="ドキュメント一覧" />
            </ListItem>
            <ListItem button onClick={onClickRefresh}>
              <ListItemIcon>
                <CachedIcon />
              </ListItemIcon>
              <ListItemText primary="再読み込み" />
            </ListItem>
            <ListItem button onClick={onClickLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </Fragment>
        ) : null
          /*
            (
            <ListItem button onClick={onClickLogin} >
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="ログイン" />
            </ListItem>
          )
        */
        }
        <ListItem button onClick={onClickSetting}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="設定" />
        </ListItem>
      </List>
    </StyledDrawer>
  );
}

export default withStyles(styles)(Sidebar);
