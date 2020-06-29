import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = theme => ({});

const Root = styled.div`
    position: fixed;
    z-index: 2000;
    width: 100vw;
    max-height: 15vw;
    bottom: 0;
`;

function Footer({}) {
  return (
      <Root>
        <BottomNavigation
          showLabels
        >
            <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
            <BottomNavigationAction label="カメラ" icon={<CameraIcon fontSize="large"/>} />
            <BottomNavigationAction label="レシート" icon={<ListAltIcon />} />
        </BottomNavigation>
      </Root>
  );
}

export default withStyles(styles)(Footer);
