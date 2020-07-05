import React, { Fragment } from "react";
import { Swipeable } from "react-swipeable";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CachedIcon from "@material-ui/icons/Cached";
import SettingsIcon from "@material-ui/icons/Settings";
// import VpnKeyIcon from "@material-ui/icons/VpnKey";d
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const StaticProperties = {
  width: "240px",
};

const StyledDrawer = styled(Drawer)`
  & > div {
    z-index: 1100;
    position: fixed;
    top: ${(props) => props.headerHeight};
    white-space: nowrap;
    width: ${({ open, width }) => (open ? width : "0px")};
    transition: ${({ theme }) =>
    theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.standard,
    })};
    ${({ open, theme }) =>
    !open
      ? `
    overflow-x: hidden;
  `
      : ""}
  }
`;

function Sidebar(props) {
  const {
    open,
    isLoggedIn,
    closeSidepanel,
    sideBarWidth,
    onClickRefresh,
    onClickLogout,
    onClickDocuments,
    onClickSetting,
  } = props;
  return (
    <Swipeable onSwipedLeft={closeSidepanel}>
      <StyledDrawer
        variant="permanent"
        width={sideBarWidth}
        open={open}
        onClick={closeSidepanel}
        {...StaticProperties}
      >
        <List>
          {
            isLoggedIn ? (
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
    </Swipeable>
  );
}

export default withStyles(() => ({}))(Object.assign(Sidebar, StaticProperties));
