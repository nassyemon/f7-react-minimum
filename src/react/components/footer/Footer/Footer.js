import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import CameraIcon from "@material-ui/icons/Camera";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const styles = (theme) => ({});

const StaticProperties = {
  height: "56px",
};

const Root = styled.div`
`;

const Buttons = styled(BottomNavigation)`
  height: ${({ height }) => height};
`
function Footer({
  onClickCameraButton,
  onClickDocumentButton,
  onClickHomeButton,
}) {
  return (
    <Root>
      <Buttons showLabels>
        <BottomNavigationAction
          label="ホーム"
          onClick={onClickHomeButton}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="カメラ"
          onClick={onClickCameraButton}
          icon={<CameraIcon fontSize="large" />}
        />
        <BottomNavigationAction
          label="ドキュメント"
          onClick={onClickDocumentButton}
          icon={<ListAltIcon />}
        />
      </Buttons>
    </Root>
  );
}

export default withStyles(styles)(Object.assign(Footer, StaticProperties));
