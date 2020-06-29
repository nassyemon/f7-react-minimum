import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({});

const StyledDrawer = styled(Drawer)`
  & > div {
    position: fixed;
    top: ${({ theme }) => theme.spacing(8)}px;
    white-space: nowrap;
    width: ${props => props.sideBarWidth};
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

function Sidebar({ open, sideBarWidth }) {
  return (
    <StyledDrawer variant="permanent" sideBarWidth={sideBarWidth} open={open}>
      <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/setting">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </Link>
      </List>
    </StyledDrawer>
  );
}

export default withStyles(styles)(Sidebar);
